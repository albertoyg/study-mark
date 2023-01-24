import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-col justify-center">
      <h1 className="text-3xl bg-slate-300 w-screen py-10 font-bold text-center">
        <Link href="/">Study-Mark</Link>
      </h1>
      <h1 className="text-2xl bg-slate-400 w-screen py-10 font-medium text-center">
        Find available study spots at Uvic
      </h1>
    </header>
  );
}
