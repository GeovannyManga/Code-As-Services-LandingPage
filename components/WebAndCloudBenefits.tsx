import Image from "next/image";
import { Button } from "../components/ui/button";

const WebAndCloudBenefits = () => {
  return (
    <div className="bg-custom-gradient dark:bg-custom-gradientDark w-full flex flex-col items-center pb-6">
      <h6 className="text-4xl font-black mt-8 text-center">NEW TECHNOLOGIES</h6>
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
              Nowadays, having a website and using cloud services are essential
              for any business, regardless of its size. Recent statistics show a
              significant increase in the adoption of these services.
              <br />
              <br /> In 2022, spending on cloud infrastructure grew by 23%,
              reaching a total of $247.1 billion for the year, reflecting the
              growing dependence of businesses on these services for their daily
              operations.
            </p>
            <Button className="mx-auto mb-6">Explore Cloud Infrastructure</Button>
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
              Additionally, nearly 96% of companies use at least one public cloud
              service, and 84% use at least one private cloud service. The
              combination of these services is driving digital transformation,
              which many organizations consider essential for their success.
              <br />
              <br /> These figures highlight the importance of adopting advanced
              digital technologies such as websites and cloud computing to stay
              competitive and successful in today’s market.
            </p>
            <Button className="mx-auto mb-6">Explore Digital Transformation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAndCloudBenefits;
