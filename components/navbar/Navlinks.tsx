import { NAV_LINKS } from "@/constants/links";
import { JSX } from "react";

interface NavlinksProps {
    parentClass?: string;
    childClass?: string;
    icon?: JSX.Element;
    onToggleTheme?: () => void;
}

export default function Navlinks(props: NavlinksProps) {
    const { parentClass, childClass, icon, onToggleTheme } = props;

    return (
        <>
            <ul className={parentClass}>
                {NAV_LINKS.map((link, index) => {
                    return (
                        <li key={index}>
                            <a href={link.href} className={childClass}>
                                {link.title}
                            </a>
                        </li>
                    );
                })}
                <li onClick={onToggleTheme}>
                    {icon && <span className={childClass}>{icon}</span>}
                </li>
            </ul>
        </>
    );
}
