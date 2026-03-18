"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Brand } from "@/components/Brand";
import { useAuth } from "../../src/components/context/AuthContext";

export default function DashboardPage() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function bootstrapDashboard() {
      try {
        const tokenFromUrl = searchParams.get("access_token");

        if (tokenFromUrl) {
          localStorage.setItem("token", tokenFromUrl);
          router.replace("/dashboard");
          return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
          router.replace("/login");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          localStorage.removeItem("token");
          router.replace("/login");
          return;
        }

        const data = await res.json().catch(() => null);

        if (!data) {
          localStorage.removeItem("token");
          router.replace("/login");
          return;
        }

        const epicConnected =
          data?.epicConnected ??
          !!data?.epicId;

        if (!epicConnected) {
          router.replace("/connect-epic");
          return;
        }

        setIsChecking(false);
      } catch (error) {
        console.error("Erro verificando Epic:", error);
        localStorage.removeItem("token");
        router.replace("/login");
      }
    }

    bootstrapDashboard();
  }, [router, searchParams]);

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;

    if (!token && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-white/70 text-lg">Carregando dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <Brand />

          <button
            onClick={() => {
              localStorage.removeItem("token");
              logout();
              router.replace("/");
            }}
            className="text-sm bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <h1 className="text-4xl font-black mb-8">
          Dashboard
        </h1>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* WALLET */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition">
            <h3 className="text-xl font-bold mb-2">
              Wallet
            </h3>
            <p className="text-white/70">
              Saldo e transações
            </p>
          </div>

          {/* RANKING */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition">
            <h3 className="text-xl font-bold mb-2">
              Ranking
            </h3>
            <p className="text-white/70">
              Ver leaderboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}