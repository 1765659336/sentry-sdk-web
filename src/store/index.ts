import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SystemStoreState {
  systemUid: string;
  setSystemUid: (uid: string) => void;
  systemPrimary: React.CSSProperties['color'];
  setSystemPrimary: (color: React.CSSProperties['color']) => void;
  systemSize: 'small' | 'middle' | 'large';
  setSystemSize: (size: 'small' | 'middle' | 'large') => void;
  systemFontFamily: string;
  setSystemFontFamily: (fontFamily: string) => void;
}

export const useSystemStore = create<SystemStoreState>(
  persist(
    (set) => ({
      systemUid: '',
      setSystemUid: (uid: string) => set({ systemUid: uid }),
      systemPrimary: '#1B82FA',
      setSystemPrimary: (color: React.CSSProperties['color']) => set({ systemPrimary: color }),
      systemSize: 'middle',
      setSystemSize: (size: 'small' | 'middle' | 'large') => set({ systemSize: size }),
      systemFontFamily: 'caveat',
      setSystemFontFamily: (fontFamily: string) => set({ systemFontFamily: fontFamily }),
    }),
    {
      name: 'system-store', 
      getStorage: () => localStorage, 
    }
  )
);
