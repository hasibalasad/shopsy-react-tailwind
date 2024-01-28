

import lightMode from "../../assets/light-mode-button.png"
import darkMode from "../../assets/dark-mode-button.png"
import { useEffect, useState } from "react"

function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    ); // light or dark

    const htmlEle = document.documentElement;
    //document.querySelector("html")

    //Toggles the theme mode between light and dark
    const toggleThemeMode = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            htmlEle.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            htmlEle.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme, htmlEle.classList]);

    return (
        <div className="">
            <img
                src={lightMode}
                alt="lightMode"
                onClick={toggleThemeMode}
                className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 ${theme === "dark" ? "hidden" : ""
                    }`}
            />

            <img
                src={darkMode}
                alt="darkMode"
                onClick={toggleThemeMode}
                className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 ${theme === "light" ? "hidden" : ""
                    }`}
            />
        </div>
    );
}

export default DarkMode
