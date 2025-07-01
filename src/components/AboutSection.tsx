import { motion } from 'motion/react'
import { useInView } from "react-intersection-observer"

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * .15,
            duration: .6,
            ease: 'easeOut'
        }
    })
}

const AboutSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: .2 })

    const paragraphs = [
        "We are a digital-first design and development studio that believes in creating bold and intuitive user experiences.",
        "Our mission is to turn complex ideas into elegant, high-performing products through design, motion, and code.",
        "From brands to interactive websites, we help our clients craft work that stands out in a saturated digital world.",

    ]

    return (
        <section id='about' ref={ref} className='bg-neutral-900 text-primary py-28 px-6 md:px-12'>
            <div className="mx-w-4xl mx-auto">
                <motion.h2 className="text-4xl md:text-5xl font-bold mb-10" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: .8 }}>
                    About the Studio
                </motion.h2>

                <div className="space-y-8 text-lg leading-relaxed text-gray-300">
                    {
                        paragraphs.map((text, i) => (
                            <motion.p key={i} custom={i} variants={textVariants} initial='hidden' animate={inView ? 'visible' : 'hidden'}>
                                {text}
                            </motion.p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutSection
