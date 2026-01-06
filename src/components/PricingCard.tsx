
interface PricingCardProps {
  title: string;
  description?: string; 
  price: string;
  oldPrice?: string;
  period: string;
  features: string[];
  active?: boolean;
}
export const PricingCard = ( t: PricingCardProps) => {
  return (
    <div className="max-w-sm relative rounded-2xl border border-gray-200 
               bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#06B6D4]">

        {t.active && (
            <div className="absolute top-0 right-0 translate-x-6 translate-y-3
                    bg-green-600 text-white text-xs font-bold rotate-45
                    px-7 py-2">
                Best Value
            </div>
        )}

        <h3 className="text-lg font-semibold text-gray-800">
            {t.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
            {t.description}
        </p>

        <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">{t.price}</span>
            <span className="text-sm text-gray-500">/{t.period}</span>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-gray-600">
            {t.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> {feature}
                </li>
            ))}
        </ul>

        <button
            className="btn btn-primary w-full mt-5">
            Pilih Paket
        </button>
    </div>
  );
};
