'use client'
import { useLanguage } from '../context/lenguageProvider';
import translate from "../translate.json";

const Welcome = ()=>{
    const { language, changeLanguage } = useLanguage();
    return (
        <div className="flex justify-center pt-56 w-full lg:h-screen bg-cover bg-no-repeat bg-white bg-welcomeLight dark:bg-welcomeDark">
            <div className="w-11/12 h-full ">
                <h1 className="font-bold text-slate-950 text-3xl lg:text-5xl max-w-2xl bg-emerald-800/80 backdrop-blur-md">{translate[language].welcome.title}</h1>
                <p className=" w-full mt-4 text-lg font-bold backdrop-blur-sm bg-white/70 dark:backdrop-blur-sm dark:bg-black/30 lg:w-3/4">{translate[language].welcome.description}</p>
            </div>
        </div>
    );
}

export default Welcome;