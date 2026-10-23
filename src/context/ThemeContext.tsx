import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'classic' | 'midnight' | 'parchment' | 'cobalt';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  subtitle: string;
  dotBg: string;
  dotAccent: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'classic',
    name: 'Classic Executive',
    subtitle: 'Navy & Gold on Pure Slate',
    dotBg: '#0f172a',
    dotAccent: '#c59b27',
  },
  {
    id: 'midnight',
    name: 'Midnight Heritage',
    subtitle: 'Obsidian Dark Mode',
    dotBg: '#090d16',
    dotAccent: '#fbbf24',
  },
  {
    id: 'parchment',
    name: 'Parchment Linen',
    subtitle: 'Warm Bharat Ivory & Saffron',
    dotBg: '#f3ece1',
    dotAccent: '#b45309',
  },
  {
    id: 'cobalt',
    name: 'Cobalt Enterprise',
    subtitle: 'Cool Steel & Royal Cobalt',
    dotBg: '#e8eef7',
    dotAccent: '#2563eb',
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
  toggleNextTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'ccb_preferred_theme_v1';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeId;
      if (saved && ['classic', 'midnight', 'parchment', 'cobalt'].includes(saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'classic';
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // ignore
    }
  };

  const toggleNextTheme = () => {
    const list: ThemeId[] = ['classic', 'midnight', 'parchment', 'cobalt'];
    const idx = list.indexOf(theme);
    const next = list[(idx + 1) % list.length];
    setTheme(next);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'midnight') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleNextTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
