import { SKILLS } from "@/constants/skills";

export default function About() {
    return (
        <>
            <section id="about" className="py-20 dark:bg-black">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-8 text-4xl font-light tracking-tight text-black md:text-5xl dark:text-white">
                                About Me
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                <p>
                                    I'm a passionate developer driven with
                                    curiosity, passion, and discipline. Constantly learning and excited
                                    by how much more there is to discover in the world of tech.
                                </p>
                                <p>
                                    My background includes full stack
                                    development for both web and mobile
                                    development using modern frameworks like
                                    React, React-Native, Next.js, Flutter and
                                    tools like Firebase for backend as a
                                    service. Amidst these technical skills, I am
                                    a problem solver at heart and values
                                    collaboration and honesty
                                </p>
                                <p>
                                    When I'm not coding, you'll find me
                                    exploring new technologies, in the gym, or
                                    watching tv-series.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-6 text-2xl font-light tracking-tight text-black dark:text-white">
                                    Skills & Expertise
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                    {SKILLS.map(
                                        (
                                            { icon: Icon, name, color },
                                            index,
                                        ) => (
                                            <div
                                                key={name}
                                                className="group flex flex-col items-center justify-center p-6 transition-shadow duration-200 hover:shadow-md"
                                                style={{
                                                    animationDelay: `${index * 100}ms`,
                                                }}
                                            >
                                                <Icon
                                                    size={32}
                                                    className={`${color} mb-2 transition-transform duration-200 group-hover:scale-110`}
                                                />
                                                <span className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    {name}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
