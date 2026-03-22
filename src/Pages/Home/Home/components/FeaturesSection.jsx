import { homeFeatures } from "../../../../data/homeData";

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover what makes our school the perfect place for your child's
            education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl group border border-slate-200"
            >
              <div className="text-accent-gold mb-6 transform group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4 group-hover:text-accent-gold transition duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
