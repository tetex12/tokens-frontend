"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { useAuth } from "../../src/components/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DuelPage() {

  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    // redireciona para dashboard
    router.push("/dashboard");

  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">

      <div className="max-w-3xl mx-auto">

        <div className="flex items-center justify-between mb-10">
          <Brand />

          <Link
            href="/dashboard"
            className="text-white/70 hover:text-white"
          >
            Voltar
          </Link>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">

          <h2 className="text-3xl font-black mb-4">
            Partidas são criadas no Discord
          </h2>

          <p className="text-white/70">
            Para iniciar um duelo, utilize o bot oficial da Arena Tokens no Discord.
          </p>

        </div>

      </div>

    </div>
  );
}