'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Switch } from "../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useTheme } from '../context/ThemeContext'; // Importar el hook de contexto

const NavBar = () => {
  const { theme, toggleTheme } = useTheme(); // Usar el contexto del tema
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
      html.style.overflow = "hidden"; // Desactiva el scroll y la interacción con el fondo
    } else {
      html.style.overflow = ""; // Restablece la funcionalidad
    }

    return () => {
      html.style.overflow = ""; // Asegura que se restablezca cuando el componente se desmonte
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 500); // Duración de la animación
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

        {/* Menú de hamburguesa para dispositivos móviles */}
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

        {/* Menú completo para pantallas grandes */}
        <div className="hidden md:flex h-full w-3/4 text-center items-center justify-end">
          <ul className="flex w-96 justify-evenly w-3/4 items-center">
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              <Link href="/">HOME</Link>
            </li>
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              <Link href="/services">SERVICES</Link>
            </li>
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              ABOUT
            </li>
            <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-sm">
              CONTACT
            </li>
          </ul>
          <div className="flex w-72 justify-around items-center">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Switch onClick={toggleTheme}></Switch>
          </div>
        </div>
      </nav>

      {/* Menú desplegable móvil */}
      <div
        className={`fixed top-16 left-0 w-full h-[calc(100%-4rem)] bg-white/20 dark:bg-slate-950/20 z-50 flex flex-col justify-center items-center backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isAnimating ? "animate-slide-out" : isMenuOpen ? "translate-x-0 opacity-100 animate-slide-in" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
            <Link href="/">HOME</Link>
          </li>
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
            <Link href="/services">SERVICES</Link>
          </li>
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
            ABOUT
          </li>
          <li className="cursor-pointer hover:text-green-500 dark:hover:text-green-500 text-lg">
            CONTACT
          </li>
          <li className="cursor-pointer w-full flex justify-center py-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
          <li className="cursor-pointer py-2">
            <Switch onClick={toggleTheme}></Switch>
          </li>
        </ul>
      </div>

      {/* Animaciones CSS */}
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
