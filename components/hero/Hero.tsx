export default function Hero() {
    return (
        <>
            <section className="flex min-h-screen items-center justify-center bg-white text-black dark:bg-black dark:text-white" id="hero">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <div className="animate-fade-in">
                        <h1 className="mb-6 text-5xl font-light tracking-tight md:text-7xl">
                            Hi, I am <span className="font-bold">Rian</span>
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed font-extralight text-gray-700 md:text-2xl dark:text-white">
                            a thinker who builds with purpose, passion, and curiosity.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="#projects"
                                className="group bg-black px-8 py-3 font-medium tracking-wide text-white transition-all duration-200 hover:bg-[#343434] dark:bg-white dark:text-black dark:hover:bg-gray-300"
                            >
                                View My Works
                            </a>
                            <a
                                href="#contact"
                                className="group bg-black px-8 py-3 font-medium tracking-wide text-white transition-all duration-200 hover:bg-[#343434] dark:bg-white dark:text-black dark:hover:bg-gray-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
