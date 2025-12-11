import Link from "next/link";
import type { NavLinkProps } from "../types";

export default function NavLink({ href, children, isActive }: NavLinkProps) {
    console.log(isActive)
    return (
        <li className="text-sm uppercase">
            <Link
                href={href}
                className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-700" : "text-gray-700"}`}
            >{children}</Link>
        </li>
    )
}