import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-col justify-between">
      <div className="flex">
        <div className="w-1/2"></div>
        <h1 className="text-3xl w-screen py-10 font-bold text-center">
          <Link href="/">Study-Mark</Link>
        </h1>
        <div className="w-1/2 flex justify-center items-center">
          <Link className="bg-slate-200 p-4 mr-5 rounded-md" href="/auth">
            Login/Signup
          </Link>
        </div>
      </div>
      <h2 className="text-2xl bg-slate-400 w-screen py-10 font-medium text-center">
        Find available study spots at Uvic
      </h2>
    </header>
  );
}
