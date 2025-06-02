"use client";
import { Menu, Bot } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {


    return (
        <nav className="bg-gradient-to-bl from-indigo-700 to-indigo-900 shadow-md">

            <div className="h-16 flex justify-between items-center px-5">
                {/* Logo */}
                <Link href="/" className="text-[20px] font-bold flex justify-center items-center text-white">
                    <Bot size={38} className="mr-2 text-white " /> Agentia World
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:justify-center  lg:items-center md:flex space-x-6">

                    <ul className="flex space-x-6">
                        <li className="nav-link">
                            <Link href="/">Features</Link>
                        </li>
                        <li className="nav-link">
                            <Link href="/">Technology </Link>
                        </li>
                        <li className="nav-link">
                            <Link href="/">Agents</Link>
                        </li>
                        <li className="nav-link">
                            <Link href="/">Price</Link>
                        </li>
                        <li className="nav-link">
                            <Link href="/">Contact</Link>
                        </li>


                    </ul>

                    <Link href="/" className=" bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-md">Launch Console</Link>


                </div>

                <Sheet>
                    <SheetTrigger className="md:hidden text-white">
                        <Menu size={28} />
                    </SheetTrigger>
                    <SheetContent className="bg-gradient-to-tr from-indigo-700 to-indigo-900 text-white dark:text-white">
                        <ul className="flex flex-col space-y-4 mt-10">
                            <li className="">
                                <Link href="/">Features</Link>
                            </li>
                            <li className="">
                                <Link href="/">Technology </Link>
                            </li>
                            <li className="">
                                <Link href="/">Agents</Link>
                            </li>
                            <li className="">
                                <Link href="/">Price</Link>
                            </li>
                            <li className="">
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                        <div className="flex justify-center mt-10">
                            <Link href="/" className="bg-indigo-800 text-white hover:bg-indigo-900 px-4 py-2 rounded-md">Launch Console</Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>






        </nav>
    );
}
