"use client"

import {useBalance} from "@repo/store/usebalance"
import Link from "next/link";

export default function HomePage() {
  const { balance, setBalance, increaseBalance } = useBalance();

  return (
    <main className="p-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 bg-blue-500">Zustand Balance Example</h1>
      <p className="mb-2">Current Balance: ₹{balance}</p>
      <div className="flex space-x-1 p-1 justify-center items-center">
        <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setBalance(balance + 10)}
      >
        Add ₹10
        </button>
        <button className="bg-green-600 text-2xl p-1 rounded-lg text-zinc-50" onClick={()=>{increaseBalance(500)}}>
          Add ₹500
        </button>
        <Link className="bg-zinc-800 text-white px-4 py-2 rounded" href="/check">Checker</Link>
      </div>
    </main>
  );
}