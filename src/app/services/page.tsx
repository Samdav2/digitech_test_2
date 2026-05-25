import { Metadata } from "next";
import ServicesComponent from "@/components/services";
import Pricing from "@/components/pricing";

export const metadata: Metadata = {
  title: "Our Services | City Sunny Services",
  description: "Explore our comprehensive range of services tailored for your home and lifestyle. From deep cleaning and sneaker washing to private chef and nanny services, we have you covered.",
};

export default function ServicesPage() {
  return (
    <div className="pt-10 bg-gray-50 flex-grow">
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <h1 className="text-4xl tracking-tight font-extrabold text-deep-black sm:text-5xl">
          Everything You Need For A <span className="text-hot-pink">Cleaner Life</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Explore our comprehensive range of services tailored for your home and lifestyle.
        </p>
      </div>
      <ServicesComponent />
      <Pricing />
    </div>
  );
}
