'use client';
import Button from "@/components/shared/Button";
import { planStore } from "@/store/plans/plan-store";
import usePlanData from "@/store/plans/PlanData";
import fnFormatCurrency from "@/utils/functions/fnFormatCurrency";
import Image from "next/image";
import { useEffect } from "react";
import { useStore } from "zustand";

export default function Price() {

    const planHook = usePlanData();
    const plans = useStore(planStore);
    const { list, isFetching } = plans.data;

    useEffect(() => {
        planHook.fnGetPlans();
    }, [])

    return (
        <div>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center -mb-40 relative z-[9]">
                    <div className="w-4/12 mx-auto">
                        <h2 className="text-4xl font-bold mb-8">Valores</h2>
                        <p className="text-gray-600 mb-12">
                            Sua história ficará salva em sua biblioteca. Você poderá reler
                            sempre que desejar!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[1200px] mx-auto">
                        <div
                            className="bg-gray-100 p-6 rounded shadow bg-white rounded-xl">
                            <h3 className="text-3xl font-bold">Forasteiro</h3>
                            <div className="flex justify-center">
                                <span className="mt-2 text-gray-600 flex items-center justify-center gap-2 border border-slate-400 rounded-2xl px-4 py-1">
                                    <Image src="/images/coin.png" width={20} height={20} alt="flag" />
                                    <span className="font-bold">Grátis</span>
                                </span>
                            </div>
                            <div className="py-4">
                                <p className="text-3xl font-bold pt-4 flex items-center justify-center">
                                    Gratuito
                                </p>

                                <p className="text-xs">
                                    Leia ou escute <b>histórias gratuitas compartilhadas pela comunidade.</b>
                                </p>
                            </div>

                            <Button label="Cadastrar agora" onClick={() => { }} />
                        </div>
                        {
                            list && list.map((item, i) => {
                                const price = fnFormatCurrency(item.price).split('.');
                                return (
                                    <div
                                        key={i}
                                        className="bg-gray-100 p-6 rounded shadow bg-white rounded-xl">
                                        <h3 className="text-3xl font-bold">{item.name}</h3>
                                        <div className="flex justify-center">
                                            <span className="mt-2 text-gray-600 flex items-center justify-center gap-2 border border-slate-400 rounded-2xl px-4 py-1">
                                                <Image src="/images/coin.png" width={20} height={20} alt="flag" />
                                                <span className="font-bold">{item.credits} créditos</span>
                                            </span>
                                        </div>

                                        <div className="py-4">
                                            <p className="text-3xl font-bold pt-4 flex items-center justify-center">
                                                R$ <span className="text-6xl">{price[0]}</span>,{price[1]}
                                            </p>

                                            <p className="text-xs">
                                                Cada crédito dá direito a 1 história.
                                            </p>
                                        </div>

                                        <Button label="Cadastrar agora" onClick={() => { }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Image
                src="/images/kids.png"
                alt="kids"
                width={1920}
                height={1080}
                className={`w-full object-cover h-[720px] rounded-t-[120px]`}
            />
        </div>
    )
}