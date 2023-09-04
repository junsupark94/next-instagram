import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware";

interface GlobalState {
  muted: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleMuted: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
      (set) => ({
        muted: true,
        darkMode: true,
        toggleDarkMode: () => set(state => ({darkMode: !state.darkMode})),
        toggleMuted: () => set(state => ({muted: !state.muted})),
        isModalOpen: false,
        openModal: () => set({isModalOpen: true}),
        closeModal: () => set({isModalOpen: false}),
      }),
      {
        name: 'store'
      }
    )
  )
)