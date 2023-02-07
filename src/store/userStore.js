import { create } from "zustand";

const userStore = create((set) => ({
  isAdmin: false,
  isStudent: false,
  setIsLogin: (isAdmin, isStudent) => set((state) => ({ isAdmin , isStudent })),
}));

export default userStore;