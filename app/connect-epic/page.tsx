"use client";

import { Brand } from "@/components/Brand";

export default function ConnectEpicPage() {

  function connectEpic() {
    window.location.href =
      `${process.env.NEXT_PUBLIC_API_URL}/auth/epic`;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="flex justify-center mb-10">
          <Brand />
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">

          <h2 className="text-3xl font-black mb-4">
            Conectar conta Epic Games
          </h2>

          <p className="text-white/70 mb-6">
            Para jogar na Arena Tokens você precisa conectar sua conta Epic Games.
          </p>

          <button
            onClick={connectEpic}
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-extrabold py-4 hover:scale-105 transition-all"
          >
            Conectar Epic Games
          </button>

        </div>

      </div>

    </div>
  );
}