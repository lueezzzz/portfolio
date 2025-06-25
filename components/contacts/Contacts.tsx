import { SOCIAL_LINKS } from "@/constants/links";

export default function Contacts() {
    return (
        <>
            <section
                id="contact"
                className="py-20  dark:bg-black dark:text-white"
            >
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="mb-8 text-4xl font-medium tracking-tight md:text-5xl">
                        Let's Work Together
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-500 dark:text-gray-400">
                        I'm always interested in hearing about new projects and
                        opportunities. Whether you have a question or just want
                        to say hi, feel free to reach out.
                    </p>

                    <div className="mb-12">
                        <a
                            href="mailto:rianmabait45@gmail.com"
                            className="inline-block bg-black px-8 py-4 text-lg font-medium tracking-wide text-white transition-colors duration-200 hover:bg-[#343434] dark:bg-white dark:text-black dark:hover:bg-gray-300"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="flex justify-center space-x-8">
                        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                className="group flex flex-col items-center space-y-2 text-gray-400 transition-colors duration-200 hover:text-white dark:text-gray-500"
                                aria-label={label}
                            >
                                <div className="border  p-3 text-gray-700 transition-colors duration-200 group-hover:border-gray-500  dark:text-white dark:group-hover:border-white">
                                    <Icon size={24} />
                                </div>
                                <span className="text-sm font-medium text-black dark:text-gray-400">
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-16 border-t border-gray-800 pt-8 dark:border-gray-700">
                        <p className="text-gray-500 dark:text-gray-600">
                            © {new Date().getFullYear()} Rian Mabait. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
