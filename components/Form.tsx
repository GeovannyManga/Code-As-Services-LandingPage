'use client'
import { useLanguage } from '../context/lenguageProvider';
import translate from "../translate.json";
import { Button } from "../components/ui/button";
import Image from "next/image";
import styles from "../styles/form.module.css";

const Form = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="pt-8 flex flex-col items-center bg-gradient-to-r from-bg-slate-800 via-bg-slate-900 md:flex-row">
      <div className="h-full w-10/12 md:w-10/12 flex flex-col items-center">
        <form
          className="grid gap-2 grid-cols-1 grid-row-5 md:w-10/12"
          action=""
        >
          <div>
            <h6 className="text-left text-3xl">{translate[language].form.title}</h6>
            <span className="text-lg">
            {translate[language].form.description}
            </span>
          </div>
          <div className="grid gap-1 grid-cols-2 row-span-1">
            <input
              className="rounded-md bg-slate-900 p-1.5"
              placeholder={translate[language].form.fields.firstName}
              type="text"
            />
            <input
              className="rounded-md bg-slate-900 p-1.5"
              placeholder={translate[language].form.fields.lastName}
              type="text"
            />
          </div>
          <input
            className="rounded-md bg-slate-900 p-1.5"
            type="email"
            placeholder={translate[language].form.fields.email}
            name=""
            id=""
          />
          <input
            className="rounded-md bg-slate-900 p-1.5"
            type="number"
            placeholder={translate[language].form.fields.phoneNumber}
            name=""
            id=""
          />
          <input
            className="rounded-md row-span-3 bg-slate-900 p-1.5"
            type="text"
            placeholder={translate[language].form.fields.message}
          />
          <Button className="bg-teal-950 text-white">
          {translate[language].form.button}
          </Button>
        </form>
      </div>
      <div className="w-9/12 flex items-center justify-center mt-8 md:p-12">
        <div className={language=== "en"? styles.imageContainer:styles.imageContainer2} style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            className={`${styles['image']} rounded-xl`}
            src="/astro.jpg"
            width={700}
            height={700}
            alt="foto astronauta"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
