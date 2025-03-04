/**
 * Represents a theme toggle component.
 * 
 * @remarks
 * This component provides a toggle button to switch between day and night themes.
 * 
 * @returns {JSX.Element} The rendered theme toggle component.
 */
import { FC } from 'react';
import { useTheme } from '@/components/context/theme_context'; 

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        backgroundColor: theme === 'day' ? '#121212' : '#f8f9fa',
        color: theme === 'day' ? '#FFF' : '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      Switch to {theme === 'day' ? 'Night' : 'Day'} Mode
    </button>
  );
};

export default ThemeToggle;
