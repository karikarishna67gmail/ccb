import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { useTheme, THEME_OPTIONS, ThemeId } from '../context/ThemeContext';

interface ThemeSelectorProps {
  compact?: boolean;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ compact = false }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentTheme = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 rounded-md border transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
          compact
            ? 'p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-300'
            : 'px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border-slate-300'
        }`}
        title={`Current Theme: ${currentTheme.name}. Click to change.`}
        aria-label="Change Color Theme"
      >
        {/* Color Swatch Dot */}
        <span
          className="w-3.5 h-3.5 rounded-full border border-slate-400/60 shrink-0 shadow-xs"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.dotBg} 50%, ${currentTheme.dotAccent} 50%)`,
          }}
        />

        {!compact && (
          <>
            <span className="hidden md:inline-block max-w-[90px] truncate">
              {currentTheme.name}
            </span>
            <ChevronDown className="w-3 h-3 text-slate-500" />
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Select Workspace Theme
            </span>
          </div>

          <div className="p-1 space-y-0.5">
            {THEME_OPTIONS.map((item) => {
              const isSelected = item.id === theme;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setTheme(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50 text-slate-950 font-bold border border-amber-200/80'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full border border-slate-300 shrink-0 shadow-xs"
                      style={{
                        background: `linear-gradient(135deg, ${item.dotBg} 50%, ${item.dotAccent} 50%)`,
                      }}
                    />
                    <div>
                      <div className="leading-tight">{item.name}</div>
                      <div className="text-[10px] text-slate-500 font-normal">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
