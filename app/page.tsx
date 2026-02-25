import Link from "next/link";
import { Brand } from "@/src/components/Brand";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Glow mais claro */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/30 blur-[120px]" />
        <div className="absolute -bottom-40 right-[-100px] h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30" />
      </div>

      <div className="relative w-full max-w-5xl">

        <div className="mb-12 flex justify-center">
          <Brand />
        </div>

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            ARENA <span className="text-cyan-400">TOKENS</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/90">
            Desafie. Use suas habilidades. Vença.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">

            <Link
              href="/duel"
              className="px-10 py-5 rounded-2xl font-extrabold text-lg text-black
                         bg-gradient-to-r from-cyan-400 to-purple-500
                         shadow-[0_0_60px_rgba(0,255,255,0.35)]
                         hover:scale-105 transition-all duration-200"
            >
              Jogar Agora
            </Link>

            <a
              href="#"
              className="px-8 py-4 rounded-2xl bg-white/15 border border-white/25 hover:bg-white/25 transition-all duration-200 text-white font-semibold"
            >
              Entrar no Discord
            </a>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              1. Crie ou aceite um duelo
            </h3>
            <p className="text-white/90">
              Enfrente outro jogador em uma partida competitiva.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-purple-400 mb-3">
              2. Definam a regra
            </h3>
            <p className="text-white/90">
              Escolham FT5 ou FT7 antes da partida começar.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              3. Vença e evolua
            </h3>
            <p className="text-white/90">
              Mostre sua habilidade e conquiste reconhecimento.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
