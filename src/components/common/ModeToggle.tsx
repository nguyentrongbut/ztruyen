'use client';

// ** React
import * as React from 'react';
import { useState } from 'react';

// ** Theme
import { useTheme } from 'next-themes';

// ** lucide icon
import { Moon, Sun } from 'lucide-react';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

export function ModeToggle() {
    const { setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        setIsDark(!isDark);
    };

    return (
        <Button variant="ghost" shape="squareRounded" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
