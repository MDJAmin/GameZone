"use client";
import Nav, { Login, NavLink, NavLogo, SingUp } from "@/components/Nav";
import logo from "/public/assets/logo/Icon gamepad.jpeg";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="absolute right-0 left-0">
        <div className="relative z-10">
          <Nav>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  className="sm:w-5 w-4 sm:h-7 h-5"
                />
                <NavLogo href="/admin/home">GameZone</NavLogo>
              </div>
              <div className="hidden md:flex gap-3">
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/games">Games</NavLink>
                {/* <NavLink href="/admin/users">Customers</NavLink> */}
                <NavLink href="/admin/orders">Orders</NavLink>
              </div>
            </div>
            <div className="hidden xl:flex gap-4">
              <Login href="#">Login</Login>
              <SingUp href="#">Sing up</SingUp>
            </div>
            <div className="md:hidden relative">
              <IoMenu
                className=" relative top-1 cursor-pointer text-2xl hover:text-[#FF4553]"
                onClick={handleMenuToggle}
              />
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute gap-4 flex top-8 flex-col right-0 bg-[#1A242E] shadow-md p-4 w-48 rounded-sm "
                >
                  <NavLink href="/admin">Dashboard</NavLink>
                  <NavLink href="/admin/games">Games</NavLink>
                  {/* <NavLink href="/admin/users">Customers</NavLink> */}
                  <NavLink href="/admin/orders">Orders</NavLink>
                  <div className="flex flex-col gap-8 py-4 ps-3">
                    <Login href="#">Login</Login>
                    <SingUp href="#">Sing up</SingUp>
                  </div>
                </div>
              )}
            </div>
          </Nav>
        </div>
      </div>
      <div className=" mx-0">{children}</div>
    </>
  );
}
