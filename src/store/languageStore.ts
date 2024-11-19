'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';

type Language = 'en' | 'zh' | 'ja';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const cookieStorage = {
  getItem: (name: string) => {
    const value = Cookies.get(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name: string, value: string) => {
    Cookies.set(name, value, { expires: 365, sameSite: 'strict' });
  },
  removeItem: (name: string) => Cookies.remove(name),
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);