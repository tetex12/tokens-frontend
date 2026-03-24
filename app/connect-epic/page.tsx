"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Brand } from "@/components/Brand";

export default function ConnectEpicPage() {
  const router = useRouter();
  const hasCheckedSessionRef = useRef(false);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (hasCheckedSessionRef.current) return;
    hasCheckedSessionRef.current = true;

    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;

    if (!token) {
      router.replace("/login");
      return;
    }

    setCheckingSession(false);
  }, [router]);

  async function connectEpic() {
    if (loading) return;

    try {
      setLoading(true);
      setMessage("Redirecionando para a Epic...");

      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("Sessão expirada. Faça login novamente.");
        router.replace("/login");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/epic`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("token");
          router.replace("/login");
          return;
        }

        setMessage(data?.message || "Erro ao iniciar conexão com a Epic");
        setLoading(false);
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      console.error("URL Epic não recebida:", data);
      setMessage("URL da Epic não recebida");
      setLoading(false);
    } catch (error) {
      console.error("Erro ao iniciar OAuth Epic:", error);
      setMessage("Erro ao iniciar OAuth Epic");
      setLoading(false);
    }
  }

  if (checkingSession) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-white/70 text-lg">Verificando sessão...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-10">
          <Brand />
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-black mb-4">
            Conectar com a Epic Games
          </h2>

          <p className="text-white/70 mb-6">
            Para jogar na Arena Tokens você precisa conectar sua conta Epic Games.
          </p>

          <button
            onClick={connectEpic}
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-extrabold py-4 hover:scale-105 transition-all disabled:opacity-70 disabled:hover:scale-100"
          >
            {loading ? "Redirecionando..." : "Conectar Epic Games"}
          </button>

          {message && (
            <p className="mt-4 text-center text-white/80">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}