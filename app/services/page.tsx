'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import NavBar from "../../components/NavBar";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';

const Services = () => {
    const [audioEnabled, setAudioEnabled] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleInteraction = () => {
        setAudioEnabled(true);
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error('Error al reproducir el sonido:', error);
            });
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <div className="bg-services bg-cover w-full h-96 flex items-center justify-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <h1 className="text-5xl text-white relative">Our Services</h1>
            </div>

            <div className="relative flex-1 p-4">
                {!audioEnabled && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="p-6 bg-white rounded-lg dark:bg-cyan-900 shadow-lg text-center">
                            <h2 className="text-xl mb-4">Welcome!</h2>
                            <p>Click to enable sound for a better experience.</p>
                            <button
                                onClick={handleInteraction}
                                className="mt-4 p-2 dark:bg-teal-950 bg-blue-500 text-white rounded"
                            >
                                Enable Sound
                            </button>
                        </div>
                    </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                        onMouseEnter={() => {
                            if (audioEnabled && audioRef.current) {
                                audioRef.current.currentTime = 0;
                                audioRef.current.play().catch((error) => {
                                    console.error('Error al reproducir el sonido:', error);
                                });
                            }
                        }}
                    >
                        <Image
                            src="/consultoria.jpg"
                            alt="Software Consulting"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">Software Consulting</h2>
                        <p>We provide expert advice for optimizing and developing tailored software solutions.</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                            Contact Us
                        </Link>
                    </div>
                    
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                        onMouseEnter={() => {
                            if (audioEnabled && audioRef.current) {
                                audioRef.current.currentTime = 0;
                                audioRef.current.play().catch((error) => {
                                    console.error('Error al reproducir el sonido:', error);
                                });
                            }
                        }}
                    >
                        <Image
                            src="/software.jpg"
                            alt="Mobile Development"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">Mobile Development</h2>
                        <p>Creation of native and cross-platform mobile apps to enhance your business's digital presence.</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                            Contact Us
                        </Link>
                    </div>
                    
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                        onMouseEnter={() => {
                            if (audioEnabled && audioRef.current) {
                                audioRef.current.currentTime = 0;
                                audioRef.current.play().catch((error) => {
                                    console.error('Error al reproducir el sonido:', error);
                                });
                            }
                        }}
                    >
                        <Image
                            src="/ecommerce.jpg"
                            alt="Sales Pages"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">Sales Pages</h2>
                        <p>Development of optimized websites to boost conversions and sales of your products.</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                            Contact Us
                        </Link>
                    </div>
                    
                    <div
                        className="dark:bg-cyan-900 dark:hover:bg-teal-950 bg-slate-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:bg-teal-950 hover:text-white hover:scale-105 cursor-pointer"
                        onMouseEnter={() => {
                            if (audioEnabled && audioRef.current) {
                                audioRef.current.currentTime = 0;
                                audioRef.current.play().catch((error) => {
                                    console.error('Error al reproducir el sonido:', error);
                                });
                            }
                        }}
                    >
                        <Image
                            src="/futuro.png"
                            alt="Software Solutions"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold mb-2">Software Solutions</h2>
                        <p>We develop any type of customized software according to your business's specific needs.</p>
                        <Link href="https://wa.me/50761259266" className={`${buttonVariants({ variant: "outline" })} text-black dark:text-white`}>
                            Contact Us
                        </Link>
                    </div>
                </div>
                <audio ref={audioRef} src="/sounds/cardsound.mp3" preload="auto" />
            </div>
        </div>
    );
};

export default Services;
