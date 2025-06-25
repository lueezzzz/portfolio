import { PROJECTS } from "@/constants/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Project() {
    return (
        <>
            {PROJECTS.map((project) => (
                <div
                    key={project.title}
                    className="group delay transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl dark:bg-[#1c1c1e]"
                >
                    <div className="overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    <div className="p-6">
                        <h3 className="mb-3 text-xl font-semibold text-black transition-colors group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300">
                            {project.title}
                        </h3>
                        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                            {project.description}
                        </p>

                        <div className="mb-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-[#343434] dark:text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex space-x-4">
                            <a
                                href={project.github}
                                target="_blank"
                                className="flex items-center text-gray-600 transition-colors duration-200 hover:text-black dark:text-gray-400 dark:hover:text-white"
                            >
                                <Github size={16} className="mr-1" />
                                <span className="text-sm font-medium">
                                    Code
                                </span>
                            </a>
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center text-gray-600 transition-colors duration-200 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                >
                                    <ExternalLink size={16} className="mr-1" />
                                    <span className="text-sm font-medium">
                                        Live Demo
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
