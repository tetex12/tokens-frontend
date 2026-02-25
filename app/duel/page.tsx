import Link from "next/link";
import { Brand } from "@/src/components/Brand";

export default function DuelPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <Brand />
          <Link href="/" className="text-white/70 hover:text-white">
            Voltar
          </Link>
        </div>

        <h2 className="text-3xl md:text-4xl font-black">
          Criar Duelo <span className="text-cyan-neon">FT5 / FT7</span>
        </h2>
        <p className="mt-3 text-white/75">
          (UI inicial) Aqui vamos ligar com a sua API depois.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="bg-white/5 border border-white/15 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Player 1 ID</label>
                <input className="mt-2 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-cyan-neon/60" />
              </div>
              <div>
                <label className="text-sm text-white/70">Player 2 ID</label>
                <input className="mt-2 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-cyan-neon/60" />
              </div>
              <div>
                <label className="text-sm text-white/70">Bet (R$)</label>
                <input className="mt-2 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-purple-neon/60" />
              </div>
              <div>
                <label className="text-sm text-white/70">Regra</label>
                <select className="mt-2 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none">
                  <option>FT5</option>
                  <option>FT7</option>
                </select>
              </div>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-neon to-purple-neon text-black font-extrabold py-4 hover:-translate-y-0.5 transition-all">
              Criar Match (UI)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
