import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BalanceState {
  balance: number;
  setBalance: (value: number) => void;
  increaseBalance: (value: number) => void;
}

export const useBalance = create<BalanceState>((set) => ({
  balance: 0,
  setBalance: (value) => set({ balance: value }),
  increaseBalance: (value) => set((state) => ({
    balance: state.balance + value
  })),
}));


export const Balancer = create(
  persist<BalanceState>(
    (set) => ({
      balance: 0,
      setBalance: (value) => set({ balance: value }),
      increaseBalance: (value) => set((state) => ({
        balance: state.balance + value
      })),
    }),
    { name: "balance-storage" } // localStorage key
  )
);