import {createContext, useContext, useEffect, useState} from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme])

    const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

