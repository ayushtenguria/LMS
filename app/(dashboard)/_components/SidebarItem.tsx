"use client";

import { LucideIcon } from "lucide-react";
import { usePathname , useRouter} from "next/navigation";
// import { useRouter } from "next/router";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
};

export const SidebarItem = ({
    icon,
    label,
    href,
}: SidebarItemProps) => {

    const pathname = usePathname;
    const router = useRouter;

    const isActive = 
    (pathname === "/" && href === "/") ||  pathname === href ||  pathname?.startsWith('$(href)/');

    return(
        <div>

        </div>
    )
}