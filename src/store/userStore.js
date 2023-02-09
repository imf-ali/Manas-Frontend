import { create } from "zustand";

const userStore = create((set) => ({
  isAdmin: false,
  isStudent: false,
  isPaid: false,
  userId: '',
  setIsLogin: (isAdmin, isStudent, userId) => set((state) => ({ isAdmin , isStudent, userId })),
  setIsPaid: (isPaid) => set(() => ({ isPaid })),
}));

export default userStore;