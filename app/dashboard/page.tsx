"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Brand } from "@/components/Brand";
import { useAuth } from "../../src/components/context/AuthContext";

export default function DashboardPage() {

  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

          <Brand />

          <button
            onClick={() => {
              logout();
              router.push("/");
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