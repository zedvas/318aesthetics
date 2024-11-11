import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-screen bg-zinc-900 text-zinc-200 text-xs flex flex-col justify-center items-center pt-8 px-4">
      <div className="w-full max-w-[700px] h-full flex justify-between items-end">
        <ul className="flex flex-col border-r-2 pr-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/book">Book</Link>
            <Link href="/becomeAnAmbassador">Become an Ambassador</Link>
        </ul>
        <Socials />
       
      </div>
      <p className="m-2 mt-6 text-[10px]">&copy; zedvas 2024</p>
    </footer>
  );
}
