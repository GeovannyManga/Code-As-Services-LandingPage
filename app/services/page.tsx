'use client'
import { useLanguage } from '../../context/lenguageProvider';
import translate from "../../translate.json";
import Image from 'next/image';
import NavBar from "../../components/NavBar";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';

const Services = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <div className="bg-services bg-cover w-full h-[80vh] flex items-center justify-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <h1 className="text-5xl font-bold text-white relative">{translate[language].servicesSection.title}</h1>
            </div>

            <div className="relative flex-1 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                        
                    >
                        <Image
                            src="/consultoria.jpg"
                            alt="Software Consulting"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">{translate[language].servicesSection.cards[0].title}</h2>
                        <p>{translate[language].servicesSection.cards[0].description}</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                        {translate[language].servicesSection.cards[0].button}
                        </Link>
                    </div>
                    
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                    >
                        <Image
                            src="/software.jpg"
                            alt="Mobile Development"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">{translate[language].servicesSection.cards[1].title}</h2>
                        <p>{translate[language].servicesSection.cards[1].description}</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                        {translate[language].servicesSection.cards[1].button}
                        </Link>
                    </div>
                    
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                       
                    >
                        <Image
                            src="/ecommerce.jpg"
                            alt="Sales Pages"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">{translate[language].servicesSection.cards[2].title}</h2>
                        <p>{translate[language].servicesSection.cards[2].description}</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                        {translate[language].servicesSection.cards[2].button}
                        </Link>
                    </div>
                    
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                    >
                        <Image
                            src="/futuro.png"
                            alt="Software Solutions"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">{translate[language].servicesSection.cards[3].title}</h2>
                        <p>{translate[language].servicesSection.cards[3].description}</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                        {translate[language].servicesSection.cards[3].button}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
