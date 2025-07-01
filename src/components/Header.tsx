import { useState, useEffect } from "react"
import { motion } from "motion/react"

const navItems = [
    { name: "Projects", href: '#projects' },
    { name: "Studio", href: '#about' },
    { name: "Contact", href: '#contact' },
]

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .2 }} className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-background/70' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center text-sm uppercase tracking-wide">
                <a href="#" className="font-semibold text-lg">nk.studio</a>
                <nav className="space-x-6">
                    {
                        navItems.map((item) => (
                            <a key={item.name} href={item.href} className="hover:underline transition-colors duration-300">
                                {item.name}
                            </a>
                        ))
                    }
                </nav>
            </div>
        </motion.header>
    )
}

export default Header
