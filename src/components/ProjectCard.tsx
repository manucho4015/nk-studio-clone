import { motion, useAnimation } from 'motion/react'
import { useInView } from "react-intersection-observer"

// custom types
import type { Project } from "../custom-types/projects"

const ProjectCard = ({ title, image, description }: Project) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: .2 })

    if (inView) {
        controls.start({ opacity: 1, y: 0 })
    }
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls} transition={{ duration: .6, ease: 'easeInOut' }} className='space-y-6 group:'>
            <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={image} alt={title} className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105' />
            </div>
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-gray-400 max-w-xl">{description}</p>
        </motion.div>
    )
}

export default ProjectCard
