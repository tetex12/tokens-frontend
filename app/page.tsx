import Link from "next/link";
import { Brand } from "@/src/components/Brand";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6 overflow-hidden">
      {/* glow + textura leve pra não ficar “preto chapado” */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-neon/25 blur-[130px]" />
        <div className="absolute -bottom-52 right-[-140px] h-[600px] w-[600px] rounded-full bg-purple-neon/25 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      <div className="relative w-full max-w-5xl">
        <div className="mb-10 flex justify-center">
          <Brand />
        </div>

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            ARENA <span className="text-cyan-neon">TOKENS</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/80">
            Desafie. Use suas habilidades. Vença.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            {/* CTA PRINCIPAL (bem mais chamativo) */}
            <Link
              href="/duel"
              className="group relative px-9 py-4 rounded-2xl font-extrabold text-lg text-black
                         bg-gradient-to-r from-cyan-neon to-purple-neon
                         shadow-[0_0_35px_rgba(0,255,255,0.22)]
                         hover:shadow-[0_0_55px_rgba(168,85,247,0.28)]
                         hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="relative z-10">Jogar Agora</span>
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/10" />
            </Link>

            <a
              href="#"
              className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-semibold"
            >
              Entrar no Discord
            </a>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-cyan-neon mb-3">
              1. Crie ou aceite um duelo
            </h3>
            <p className="text-white/80">
              Enfrente outro jogador em uma partida competitiva de Fortnite.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-purple-neon mb-3">
              2. Definam a regra
            </h3>
            <p className="text-white/80">
              Escolham o formato (FT5 ou FT7) antes da partida começar.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-cyan-neon mb-3">
              3. Vença e evolua
            </h3>
            <p className="text-white/80">
              Mostre sua habilidade e conquiste reconhecimento dentro da arena.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
