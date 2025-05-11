"use client"

import {useBalance} from "@repo/store/usebalance"

export default function HomePage() {
  const { balance, setBalance } = useBalance();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4 bg-blue-500">Zustand Balance Example</h1>
      <p className="mb-2">Current Balance: ₹{balance}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setBalance(balance + 10)}
      >
        Add ₹10
      </button>
    </main>
  );
}