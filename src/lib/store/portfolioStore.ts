import { create } from 'zustand';

interface PortfolioState {
  darkMode: boolean;
  language: 'ko' | 'en';
  activeSection: string;
  toggleDarkMode: () => void;
  setLanguage: (lang: 'ko' | 'en') => void;
  setActiveSection: (section: string) => void;
}

const usePortfolioStore = create<PortfolioState>((set) => ({
  darkMode: false,
  language: 'ko',
  activeSection: 'home',
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setLanguage: (lang) => set({ language: lang }),
  setActiveSection: (section) => set({ activeSection: section }),
}));

export default usePortfolioStore;
