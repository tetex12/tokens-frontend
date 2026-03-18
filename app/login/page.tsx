// app/login/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { useAuth } from "../../src/components/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  async function handleLogin() {
    if (loading) return;

    setLoading(true);
    setMessage("Entrando...");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password,
          }),
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMessage(data?.message || "Erro no login");
        setLoading(false);
        return;
      }

      const token =
        data?.accessToken ||
        data?.token ||
        data?.access_token;

      if (!token) {
        setMessage("Token não recebido");
        console.log("LOGIN RESPONSE:", data);
        setLoading(false);
        return;
      }

      login(token);

      setMessage("Login realizado 🚀");

      const epicConnected =
        data?.user?.epicConnected ??
        !!data?.user?.epicId;

      setTimeout(() => {
        if (!epicConnected) {
          router.replace("/connect-epic");
        } else {
          router.replace("/dashboard");
        }
      }, 500);
    } catch (error) {
      console.error(error);
      setMessage("Erro de conexão com servidor");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-10">
          <Brand />
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-center">
            Login
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-white/70">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLogin();
                  }
                }}
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-extrabold py-4 hover:scale-105 transition-all disabled:opacity-70 disabled:hover:scale-100"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          {message && (
            <p className="mt-4 text-center text-white/80">
              {message}
            </p>
          )}

          <div className="mt-6 text-center text-white/60 text-sm">
            Não tem conta?{" "}
            <Link href="/register" className="text-cyan-400">
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}