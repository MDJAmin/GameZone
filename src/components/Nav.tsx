"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export default function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-transparent text-primary-foreground flex justify-between px-10 sm:py-14 py-4 ">
      {children}
    </nav>
  );
}

export function NavLink({
  href,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props}>
      <span
        className={cn(
          "p-4 hover:text-[#FF4553] transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </Link>
  );
}

export function NavLogo({
  href,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props}>
      <span
        className={cn(
          " sm:text-[1.2em] text-[1em]  sm:pe-5 pe-0 hover:text-[#FF4553] transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </Link>
  );
}

export function Login({
  href,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props}>
      <span
        className={cn(
          " bg-white text-black py-2 px-3 rounded-md text-[1.2em] hover:text-[#FF4553] transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </Link>
  );
}

export function SingUp({
  href,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props}>
      <span
        className={cn(
          " bg-[#FF4553] text-white py-2 px-3 rounded-md text-[1.2em] hover:bg-white hover:text-black transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </Link>
  );
}
