import React from 'react'
import Card from '../Card'
import { 
    Moon, 
    Sun 
} from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore'

const ThemeButton = () => {

    const {theme, toggleTheme} = useThemeStore();

    const isDark = theme === 'dark';

  return (
    <Card className='flex items-center justify-between p-6'>

        <span>Theme</span>

        <button 
            type='button' 
            role='switch' 
            aria-label='Toggle theme'
            aria-checked={isDark}
            onClick={toggleTheme}
            className={`relative flex h-9 w-16 items-center rounded-full p-1 transition-colors 
            duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30
                ${ 
                    isDark ? 
                        'bg-slate-700' 
                        : 'bg-slate-200'
                    }
            `}
        >

            <Sun 
                size={14}
                className={`absolute left-2 transition-opacity duration-200
                    ${
                        isDark ? 
                        'text-slate-400 opacity-100' 
                        : 'text-amber-500 opacity-0'
                    }
                `}
            />

            <Moon 
                size={14}
                className={`absolute right-2 transition-opacity duration-200
                    ${
                        isDark ? 
                        'text-blue-400 opacity-0' 
                        : 'text-slate-400 opacity-100'
                    }
                `}
            />

            <span 
                className={`relative z-10 h-7 w-7 rounded-full bg-white shadow-sm transition-transform
                dark:bg-slate-100 duration-300 cursor-pointer
                    ${
                        isDark ? 
                        'translate-x-7' 
                        : 'translate-x-0'
                    }
                `}
            />

        </button>

    </Card>
  )
}

export default ThemeButton