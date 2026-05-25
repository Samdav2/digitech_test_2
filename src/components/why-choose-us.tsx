import { ShieldCheck, Tags, Clock, Smartphone, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Trusted & Reliable",
      description: "Our certified professionals are vetted and trained.",
      icon: ShieldCheck,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Affordable Prices",
      description: "High-quality service without breaking the bank.",
      icon: Tags,
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      title: "Quick Response Time",
      description: "We are available when you need us the most.",
      icon: Clock,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      title: "We Bring Convenience",
      description: "Services delivered right to your doorstep.",
      icon: Smartphone,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our top priority, guaranteed.",
      icon: HeartHandshake,
      color: "text-hot-pink",
      bg: "bg-pink-100",
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-hot-pink uppercase tracking-wider">Our Values</h2>
          <p className="mt-2 text-3xl font-extrabold text-deep-black sm:text-4xl">
            Why Choose Us?
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Building immediate trust with quality service delivery you can count on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 text-center flex flex-col items-center"
              >
                <div className={`w-14 h-14 rounded-full ${reason.bg} ${reason.color} flex items-center justify-center mb-5 shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-deep-black mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}