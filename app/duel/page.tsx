"use client";

import { useState } from "react";
import Link from "next/link";
import { Brand } from "@/src/components/Brand";

export default function DuelPage() {
  const [player1Id, setPlayer1Id] = useState("");
  const [player2Id, setPlayer2Id] = useState("");
  const [betAmount, setBetAmount] = useState("");
  const [rule, setRule] = useState("FT5");
  const [message, setMessage] = useState("");

  async function handleCreateMatch() {
    setMessage("Criando match...");

    try {
      const res = await fetch("http://localhost:3000/matches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player1Id,
          player2Id,
          betAmount: Number(betAmount),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Erro ao criar match");
        return;
      }

      setMessage("Match criado com sucesso 🔥");
      console.log(data);

    } catch (err) {
      setMessage("Erro de conexão com API");
    }
  }

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
          Criar Duelo <span className="text-cyan-400">{rule}</span>
        </h2>

        <div className="mt-8 bg-white/10 border border-white/20 rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-white/70">Player 1 ID</label>
              <input
                value={player1Id}
                onChange={(e) => setPlayer1Id(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Player 2 ID</label>
              <input
                value={player2Id}
                onChange={(e) => setPlayer2Id(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Bet (R$)</label>
              <input
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Regra</label>
              <select
                value={rule}
                onChange={(e) => setRule(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3"
              >
                <option>FT5</option>
                <option>FT7</option>
              </select>
            </div>

          </div>

          <button
            onClick={handleCreateMatch}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-extrabold py-4 hover:scale-105 transition-all"
          >
            Criar Match
          </button>

          {message && (
            <p className="mt-4 text-center text-white/80">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
