'use client';

import Button from "@/components/shared/Button"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner() {

    const router = useRouter();

    return (

        <div className="relative flex items-center justify-start h-[520px] sm:h-[720px]">

            <Image
                src="/images/banner.png"
                alt="kids"
                width={1920}
                height={1080}
                className={`w-full object-cover h-[520px] sm:h-[720px] rounded-b-[40px] sm:rounded-b-[120px] absolute top-0 left-0`}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#000] to-transparent opacity-70 rounded-b-[40px] sm:rounded-b-[120px]"></div>

            <div className="flex flex-col items-center sm:items-start w-full sm:w-[890px] mt-40 z-[9] sm:pl-40">

                <h1 className="text-center sm:text-left text-[28px] sm:text-[48px] leading-[42px] sm:leading-[62px] font-extrabold text-white mb-10">
                    Crie histórias envolventes para a alfabetização do seu filho com a ajuda da inteligência artificial!
                </h1>

                <Button
                    onClick={() => { router.push(`${process.env.NEXT_PUBLIC_DASH_URL}/auth/cadastrar`) }}
                    label="Criar minha história agora"
                    className={`!bg-gradient-to-r !from-blue-400 !to-blue-500`}
                />

            </div>
        </div>
    )
}