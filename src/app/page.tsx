import Image from "next/image";
import Landing from "@/app/components/Landing/Landing";
import About from "@/app/components/About/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Landing/>
      <About/>
    </main>
  );
}
