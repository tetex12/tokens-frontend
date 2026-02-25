import Image from "next/image";

type BrandProps = {
  className?: string;
};

export function Brand({ className = "" }: BrandProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Se você ainda NÃO tiver public/logo.png,
          pode comentar esse Image temporariamente */}

      <Image
        src="/logo.png"
        alt="Arena Tokens Logo"
        width={44}
        height={44}
        priority
        className="rounded-lg"
      />

      <span className="font-extrabold tracking-wide text-white text-lg">
        ARENA <span className="text-cyan-neon">TOKENS</span>
      </span>
    </div>
  );
}
