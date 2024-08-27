'use client'
import { useLanguage } from '../../context/lenguageProvider';
import translate from "../../translate.json";
import NavBar from "../../components/NavBar";
import Image from 'next/image';
import  Link  from "next/link";

const AboutUs = () => {
    const { language, changeLanguage } = useLanguage();
    return (
        <div>
            <NavBar></NavBar>
            <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center mt-8 mb-12">
                        <h2 className="text-4xl font-bold">{translate[language].about.title}</h2>
                        <p className="mt-4 text-lg">{translate[language].about.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/teamwork.jpg"
                                alt="Our Team"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-lg leading-relaxed">
                            {translate[language].about.description}
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                            {translate[language].about.description2}
                            </p>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative">
                            <Image
                                src="/consultoria.jpg"
                                alt="Consulting"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <h3 className="text-white text-2xl font-semibold">{translate[language].about.photoText1}</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/software.jpg"
                                alt="Development"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <h3 className="text-white text-2xl font-semibold">{translate[language].about.photoText2}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-xl font-semibold">
                        {translate[language].about.question} <Link href="https://wa.me/50761259266" className="text-blue-500 dark:text-teal-400">{translate[language].about.link}</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
