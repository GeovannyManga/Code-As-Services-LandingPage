'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TranslationMap } from "../app/interfaces";
import { Switch } from "../components/ui/switch";
import translate from "../translate.json";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/lenguageProvider';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage(); // Usar el contexto de lenguaje
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName('html')[0];
    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const html = document.documentElement;

    if (isMenuOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <nav className="z-50 backdrop-blur-md fixed w-full h-16 flex justify-between bg-white/30 dark:bg-slate-950/30">
        <Image
          src={"/logo.jpg"}
          height={64}
          width={64}
          alt="logo"
          className="ml-4"
        />

        <div className="flex items-center md:hidden mr-4">
          <button
            className="focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex h-full w-3/4 text-center items-center justify-end">
          <ul className="flex w-96 justify-evenly w-3/4 items-center">
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              <Link href="/">{translate[language].navbar.home}</Link>
            </li>
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              <Link href="/services">{translate[language].navbar.services}</Link>
            </li>
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              <Link href="/about">{translate[language].navbar.about}</Link>
            </li>
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              <Link href="https://wa.me/50761259266">{translate[language].navbar.contact}</Link>
            </li>
          </ul>
          <div className="flex w-72 justify-around items-center">
            <Select onValueChange={(e) => changeLanguage(e as keyof TranslationMap)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Switch onClick={toggleTheme}></Switch>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-16 left-0 w-full h-[calc(100%-4rem)] bg-white/20 dark:bg-slate-950/20 z-50 flex flex-col justify-center items-center backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isAnimating ? "animate-slide-out" : isMenuOpen ? "translate-x-0 opacity-100 animate-slide-in" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
            <Link href="/">{translate[language].navbar.home}</Link>
          </li>
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
            <Link href="/services">{translate[language].navbar.services}</Link>
          </li>
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
            <Link href="/about">{translate[language].navbar.about}</Link>
          </li>
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
          {translate[language].navbar.contact}
          </li>
          <li className="cursor-pointer py-2">
            <Switch onClick={toggleTheme}></Switch>
          </li>
          <li className="cursor-pointer w-full flex justify-center py-2">
            <Select onValueChange={(e) => changeLanguage(e as keyof TranslationMap)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
        </ul>
      </div>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slide-out {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }

        .animate-slide-out {
          animation: slide-out 0.5s ease-in;
        }
      `}</style>
    </>
  );
};

export default NavBar;
