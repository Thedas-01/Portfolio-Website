import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">Portfolio</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="h-24 w-auto"
        priority
        width={180}
        height={44}
      />
    </main>
  );
}