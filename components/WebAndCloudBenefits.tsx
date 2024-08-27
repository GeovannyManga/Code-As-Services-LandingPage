'use client'
import { useLanguage } from '../context/lenguageProvider';
import translate from "../translate.json";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../components/ui/button";

const WebAndCloudBenefits = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="bg-custom-gradient dark:bg-custom-gradientDark w-full flex flex-col items-center pb-6">
      <h6 className="text-4xl font-black mt-8 text-center">{translate[language].newTech.title}</h6>
      <div className="w-full flex flex-col md:flex-row md:justify-around mt-8">
        <div className="flex flex-col rounded-2xl backdrop-blur-sm bg-white/20 dark:bg-white/20 h-auto w-full md:w-2/5 p-4 md:hover:scale-105">
          <div className="flex mb-4 items-center justify-center">
            <Image
              src={"/image.png"}
              width={200}
              height={300}
              alt="imagen-tecnologia"
              className="w-auto h-auto"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <p className="text-justify mb-4 flex-grow">
            {translate[language].newTech.content.services1.description}
            </p>
            <Link
        href="/services"
        className={`mx-auto mb-6 ${buttonVariants({ variant: 'default' })}`}
      >
        {translate[language].newTech.content.services1.button}
      </Link>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl backdrop-blur-sm bg-white/20 dark:bg-white/20 h-auto w-full md:w-2/5 p-4 mt-8 md:mt-0 md:hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={"/grafico.png"}
              width={350}
              height={400}
              alt="imagen-tecnologia"
              className="w-auto h-auto"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <p className="text-justify mb-4 flex-grow">
            {translate[language].newTech.content.services2.description}
            </p>
        <Link
        href="/services"
        className={`mx-auto mb-6 ${buttonVariants({ variant: 'default' })}`}
      >
        {translate[language].newTech.content.services2.button}
      </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAndCloudBenefits;
