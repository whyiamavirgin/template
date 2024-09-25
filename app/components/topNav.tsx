import LocaleSwitcherSelect from "./localswitcherselect"
import { ThemeSwitch } from "./ThemeSwitcherMain"



export function Navbar() {
    return(
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-black/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <p>Template</p>
                <div className="flex items-center gap-1 md:gap-4">
                    <ThemeSwitch />
                    <LocaleSwitcherSelect />
                </div>
            </div>
        </header>
    )
}