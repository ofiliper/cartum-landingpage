'use client';
import Button from "@/components/shared/Button";
import { aboutData } from "./data/about-data";
import Accordeon from "@/components/shared/Accordeon";
import { questionsData } from "./data/questions-data";

export default function About() {



    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center px-4 sm:px-10 gap-5 sm:gap-30 mx-auto w-full sm:w-[1280px]">

                    <div className="flex flex-col items-center sm:items-start md:w-2/5 mb-6 md:mb-0">
                        <h2 className="text-center sm:text-left text-3xl sm:text-5xl font-bold mb-4">
                            Você fornece os detalhes e nós criamos o resto! ✨
                        </h2>
                        <p className="text-center sm:text-left text-[#767a72] text-xl pt-7 pb-10">
                            Descreva com detalhes especiais para torná-la ainda mais personalizada. Assim, a imagem gerada ficará mais parecida com a narrativa!
                        </p>
                        <Button
                            onClick={() => { console.log("Cliquei") }}
                            label="Criar minha história agora" />
                    </div>

                    <div className="md:w-1/2">
                        <img
                            src="/images/family.png"
                            alt="Família"
                            className="rounded"
                        />
                    </div>
                </div>


                <div className="py-20">
                    <div className="text-center">
                        <h4 className="text-4xl font-extrabold">Como funciona? 🚀</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12 w-11/12 sm:w-8/12 mx-auto">
                        {
                            aboutData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`px-4 py-10 rounded-xl border-b-4 border-[#490d59] transition-all linear-ease shadow-md hover:shadow-xl`}
                                >
                                    <img
                                        src={item.image}
                                        alt="Personalize"
                                        className="mx-auto mb-4 w-[180px]"
                                    />
                                    <h3 className="text-xl font-extrabold text-2xl">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </section>
    )
}