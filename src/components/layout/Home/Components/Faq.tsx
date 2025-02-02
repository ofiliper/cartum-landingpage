'use client'

import Accordeon from "@/components/shared/Accordeon";
import { questionsData } from "./data/questions-data";

export default function Faq() {
    return (
        <section className="bg-white">
            <div className="flex flex-col md:flex-row items-center px-4 sm:px-10 gap-5 sm:gap-30 mx-auto w-full sm:w-[1280px]">

                <div className="md:w-1/2">
                    <img
                        src="/images/family-phone.png"
                        alt="Família"
                        className="rounded"
                    />
                </div>

                <div className="md:w-2/5 mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        Talvez você se pergunte...
                    </h2>
                    <Accordeon questions={questionsData} defaultQuestion={0} />
                </div>

            </div>
        </section>
    )
}