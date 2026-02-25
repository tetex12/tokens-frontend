import Image from "next/image";

type BrandProps = {
  className?: string;
};

export function Brand({ className = "" }: BrandProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Arena Tokens"
        width={44}
        height={44}
        priority
      />
      <span className="font-extrabold tracking-wide text-white">
        ARENA <span className="text-cyan-neon">TOKENS</span>
      </span>
    </div>
  );
}
