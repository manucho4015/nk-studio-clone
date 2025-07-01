import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <section className="h-screen w-full bg-background text-primary flex items-center">
            <motion.div className="text-center" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
                <motion.h1 className="text-5xl md:text-7xl font-semibold tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: 1 }}>
                    We craft bold digital experiences
                </motion.h1>
                <motion.p className="mt-4 text-lg  text-gray-400">
                    Studio specializing in design and technology
                </motion.p>
            </motion.div>
        </section>
    )
}

export default HeroSection
