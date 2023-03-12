import { create } from "zustand";

const userStore = create((set) => ({
  isAdmin: false,
  isStudent: false,
  isPaid: 0,
  userId: '',
  setIsLogin: (isAdmin, isStudent, userId) => set((state) => ({ isAdmin , isStudent, userId })),
  setIsPaid: (isPaid) => set(() => ({ isPaid })),
}));

export default userStore;