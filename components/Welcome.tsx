const Welcome = ()=>{
    return (
        <div className="flex justify-center pt-56 w-full lg:h-screen bg-cover bg-no-repeat bg-white bg-welcomeLight dark:bg-welcomeDark">
            <div className="w-11/12 h-full ">
                <h1 className="font-bold text-slate-950 text-3xl lg:text-5xl max-w-2xl bg-emerald-800/80 backdrop-blur-md">We Transform Ideas into Innovative Software Solutions</h1>
                <p className=" w-full mt-4 text-lg font-bold backdrop-blur-sm bg-white/70 dark:backdrop-blur-sm dark:bg-black/30 lg:w-3/4">At Code as Service, we turn your technological challenges into opportunities with our custom software solutions and expert consulting. From custom application development to technology optimization strategies, we're here to help you achieve success.
                </p>
            </div>
        </div>
    );
}

export default Welcome;