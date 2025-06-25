import Project from "./Project";

export default function Projects() {
    return (
        <>
            <section id="projects" className=" py-2 dark:bg-black">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-semibold tracking-tight text-black md:text-5xl dark:text-white">
                            Featured Projects
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                            A selection of my recent work showcasing different
                            technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Project />
                    </div>
                </div>
            </section>
        </>
    );

}
