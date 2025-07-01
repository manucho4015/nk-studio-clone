// images
import { ManuchoMaps, EnigmaSite, SmartEdge } from "../assets"

// component
import ProjectCard from "./ProjectCard"

// custom types
import type { Project } from "../custom-types/projects"

const projects: Project[] = [
    {
        id: 1,
        title: "Minimal Design Platform",
        image: ManuchoMaps,
        description: "A clean and modern UI built with purpose.",
    },
    {
        id: 2,
        title: "Interactive Portfolio",
        image: EnigmaSite,
        description: "An immersive developer showcase experience.",
    },
    {
        id: 3,
        title: "Creative Studio Website",
        image: SmartEdge,
        description: "Branded digital experiences with subtle animation.",
    },
]

const ProjectShowcase = () => {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-background text-primary">
            <div className="max-w-5xl mx-auto space-y-20">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </div>
        </section>
    )
}

export default ProjectShowcase
