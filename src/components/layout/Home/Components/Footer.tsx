import Image from "next/image";
import { BiEnvelope } from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="bg-[#ffd600] text-white pt-10 pb-4">
            <div className="w-10/12 flex flex-col gap-4 items-center mx-auto px-4 flex justify-center">
                <div className="bg-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <Image
                        src="/images/cartum.png"
                        alt="kids"
                        width={1920}
                        height={1080}
                        className={`w-[165px]`}
                    />
                </div>
                <div className="flex flex-col sm:flex-row w-10/12 justify-between items-center">
                    <h4 className="font-bold text-[#645404] text-xs">Desenvolvido por:
                        <a
                            href="https://instagram.com/filipesaas"
                            target="_blank"
                            rel="nofollow noopener"
                            className="ml-1">Filipe Ricardo</a>
                    </h4>
                    <h4 className="font-bold text-[#645404] text-xs">
                        <a
                            href="mailto:sac@cartum.com.br"
                            target="_blank"
                            rel="nofollow noopener"
                            className="flex items-center gap-1">
                            <BiEnvelope />
                            <span>sac@cartum.com.br</span>
                        </a>
                    </h4>
                </div>
            </div>
        </footer>
    )
}