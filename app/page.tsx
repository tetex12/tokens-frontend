import { Brand } from "@/src/components/Brand";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-arena text-text-arena flex items-center justify-center px-6 overflow-hidden">
      {/* Background glow (clareia sem perder o estilo) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-neon/20 blur-[120px]" />
        <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-purple-neon/20 blur-[130px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/30" />
      </div>

      <div className="relative w-full max-w-5xl">
        {/* TOP BRAND (logo em todas as telas iniciais) */}
        <div className="mb-10 flex justify-center">
          <Brand />
        </div>

        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            ARENA <span className="text-cyan-neon">TOKENS</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/80">
            Desafie. Use suas habilidades. Vença.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            {/* Botão mais visível */}
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-neon to-purple-neon text-black font-extrabold text-lg shadow-glow hover:scale-105 transition-all duration-200">
              Jogar Agora
            </button>

            <button className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white font-semibold">
              Entrar no Discord
            </button>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card-arena/75 backdrop-blur border border-white/15 rounded-2xl p-8 shadow-glow">
            <h3 className="text-xl font-bold text-cyan-neon mb-3">
              1. Crie ou aceite um duelo
            </h3>
            <p className="text-white/80">
              Enfrente outro jogador em uma partida competitiva de Fortnite.
            </p>
          </div>

          <div className="bg-card-arena/75 backdrop-blur border border-white/15 rounded-2xl p-8 shadow-glow2">
            <h3 className="text-xl font-bold text-purple-neon mb-3">
              2. Definam a regra
            </h3>
            <p className="text-white/80">
              Escolham o formato da série (BO5 ou BO7) antes da partida começar.
            </p>
          </div>

          <div className="bg-card-arena/75 backdrop-blur border border-white/15 rounded-2xl p-8 shadow-glow">
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
