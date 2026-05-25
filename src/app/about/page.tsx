import WhyChooseUs from "@/components/why-choose-us";
import Coverage from "@/components/coverage";

export default function AboutPage() {
  return (
    <div className="pt-20 flex-grow bg-white">
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-4xl tracking-tight font-extrabold text-deep-black sm:text-5xl">
           About <span className="text-hot-pink">City Sunny Services</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 leading-relaxed">
          We are a dedicated team of professionals committed to making everyday life easier for individuals and families. 
          By offering a suite of reliable and affordable services, we help you reclaim your time so you can focus on what matters most.
        </p>
      </div>
      <WhyChooseUs />
      <Coverage />
    </div>
  );
}
