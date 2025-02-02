'use client'

import { actionStore } from "@/store/action/action-store";
import Image from "next/image";
import { BiMenu, BiUser, BiX } from "react-icons/bi";
import { useStore } from "zustand";

export default function Header() {

    const action = useStore(actionStore);
    const { menuIsOpen } = action.data;

    return (
        <header className="text-white py-8 absolute w-full z-[999]">
            <nav className="flex items-center justify-between items-center mb-6 w-11/12 sm:w-[1140px] mx-auto bg-white rounded-full px-10 py-4">
                <div className="text-3xl font-bold text-black">
                    <a href="/" className="!w-[165px]">
                        <Image
                            src="/images/cartum.png"
                            alt="kids"
                            width={1920}
                            height={1080}
                            className={`!w-[120px] sm:!w-[165px]`}
                        />
                    </a>
                </div>

                <button
                    onClick={() => action.fnOnChange("menuIsOpen", true)}
                    className="text-black text-2xl sm:hidden">
                    <BiMenu />
                </button>

                <ul className={`bg-slate-50 sm:bg-transparent top-[-1200px] sm:top-0 left-0 w-full sm:w-auto sm:h-auto h-screen fixed sm:relative flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0 sm:space-x-6 text-md text-black font-bold transition-all linear-ease ${menuIsOpen ? '!top-0' : ''}`}>

                    <button
                        onClick={() => action.fnOnChange("menuIsOpen", false)}
                        className="absolute sm:hidden top-7 right-7 border border-slate-400 rounded-full">
                        <BiX />
                    </button>

                    <li><a href="/termos" className="">Termos de uso</a></li>
                    <li>
                        <a
                            href={`${process.env.NEXT_PUBLIC_DASH_URL}/auth/login`}
                            className="bg-white text-white px-4 py-2 rounded flex items-center space-x-2 !bg-rose-600 rounded-full">
                            <BiUser />
                            <span>Minha conta</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}