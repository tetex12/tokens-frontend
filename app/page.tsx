export default function Home() {
  return (
    <div className="min-h-screen bg-bg-arena text-text-arena flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">

        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            ARENA <span className="text-cyan-neon">TOKENS</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/70">
            Desafie. Use suas habilidades. Vença.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-neon to-purple-neon text-black font-bold text-lg shadow-glow hover:scale-105 transition-all duration-200">
              Jogar Agora
            </button>

            <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200">
              Entrar no Discord
            </button>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card-arena/70 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-glow">
            <h3 className="text-xl font-bold text-cyan-neon mb-3">
              1. Crie ou aceite um duelo
            </h3>
            <p className="text-white/70">
              Enfrente outro jogador em uma partida competitiva de Fortnite.
            </p>
          </div>

          <div className="bg-card-arena/70 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-glow2">
            <h3 className="text-xl font-bold text-purple-neon mb-3">
              2. Definam a regra
            </h3>
            <p className="text-white/70">
              Escolham o formato da série (BO5 ou BO7) antes da partida começar.
            </p>
          </div>

          <div className="bg-card-arena/70 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-glow">
            <h3 className="text-xl font-bold text-cyan-neon mb-3">
              3. Vença e evolua
            </h3>
            <p className="text-white/70">
              Mostre sua habilidade e conquiste reconhecimento dentro da arena.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
