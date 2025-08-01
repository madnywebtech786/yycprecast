import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ServiceAreasSection = () => (
  <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 bg-gradient-3">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
        SERVICE AREAS
      </span>
      <h2 className="text-3xl lg:text-4xl font-space font-bold mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Serving
        </span>
        <span className="text-primary-light ml-2">Western Canada</span>
      </h2>
      <p className="text-xl text-white">
        With strategically located manufacturing facilities, we provide rapid
        delivery and installation services across Alberta and British Columbia,
        ensuring your projects stay on schedule.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
      <div className="relative rounded-xl group overflow-hidden">
        <Image
          src={"/images/cities/Calgary.webp"}
          width={600}
          height={600}
          className="w-full h-full object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

        <p className="absolute bg-white top-[45%] left-[30%] text-3xl font-semibold text-primary p-3 rounded-2xl z-30">
          Calgary
        </p>
      </div>

      <div className="relative rounded-xl group overflow-hidden">
        <Image
          src={"/images/cities/Chesteremere.webp"}
          width={600}
          height={600}
          className="w-full h-full object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

        <p className="absolute bg-white top-[45%] left-[25%] text-3xl font-semibold text-primary p-3 rounded-2xl z-30">
          Chesteremere
        </p>
      </div>

      <div className="relative rounded-xl group overflow-hidden">
        <Image
          src={"/images/cities/Strathmore.webp"}
          width={600}
          height={600}
          className="w-full h-full object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

        <p className="absolute bg-white top-[45%] left-[28%] text-3xl font-semibold text-primary p-3 rounded-2xl z-30">
          Strathmore
        </p>
      </div>

      <div className="relative rounded-xl group overflow-hidden">
        <Image
          src={"/images/cities/highriver.webp"}
          width={600}
          height={600}
          className="w-full h-full object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

        <p className="absolute bg-white top-[45%] left-[30%] text-3xl font-semibold text-primary p-3 rounded-2xl z-30">
          Highriver
        </p>
      </div>

      <div className="relative rounded-xl group overflow-hidden">
        <Image
          src={"/images/cities/Cochrane.webp"}
          width={600}
          height={600}
          className="w-full h-full object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

        <p className="absolute bg-white top-[45%] left-[30%] text-3xl font-semibold text-primary p-3 rounded-2xl z-30">
          Cochrane
        </p>
      </div>

      <div className="relative rounded-xl group overflow-hidden">
        <Image
          src={"/images/cities/okotoks.webp"}
          width={600}
          height={600}
          className="w-full h-full object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

        <p className="absolute bg-white top-[45%] left-[35%] text-3xl font-semibold text-primary p-3 rounded-2xl z-30">
          Okotoks
        </p>
      </div>
    </div>
  </div>
);
export default ServiceAreasSection;
