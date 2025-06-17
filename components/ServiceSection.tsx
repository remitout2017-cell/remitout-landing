import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="bg-white w-full">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-500 italic">Remittance</span>{" "}
            Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Send money abroad for education, travel, medical, and more — 100%
            RBI-compliant and hassle-free.
          </p>
        </div>

        {/* Services Grid - 2 rows x 4 columns */}
        <div className="grid grid-cols-4 gap-6 h-auto">
          {/* Row 1 - Column 1: Visa Guidance Image */}
          <div className="bg-white rounded-[10px]  shadow-sm border border-gray-100 flex items-center justify-center min-h-[300px]">
            <Image
              src="/service_section01.webp"
              alt="Visa guidance consultation"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Row 1 - Column 2: Visa Guidance Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[300px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Visa{" "}
              <span className="text-[#45267f99] italic font-medium">
                Guidance
              </span>
            </h3>
            <div className="space-y-3 mb-6 flex-1">
              <p className="text-[#8E8E8E] text-[16px] font-normal text-sm leading-relaxed">
                End-to-end visa application management.
              </p>
              <p className="text-[#8E8E8E] text-[16px] font-normal text-sm leading-relaxed">
                Professional support for interview preparation and
                documentation.
              </p>
              <p className="text-[#8E8E8E] text-[16px] font-normal text-sm leading-relaxed">
                Real-time updates on visa regulations and compliance.
              </p>
            </div>
            <button className="flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Row 1 - Column 3: International Transaction Image */}
          <div className="bg-white rounded-[10px]  shadow-sm border border-gray-100 flex items-center justify-center min-h-[300px]">
            <Image
              src="/service_section02.webp"
              alt="International money transfer"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Row 1 - Column 4: International Transaction Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[300px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              International{" "}
              <span className="text-purple-500 italic">Transaction</span>
            </h3>
            <div className="space-y-3 mb-6 flex-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                Swift and secure international transfers.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Competitive exchange rates with minimal fees.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts provide personalized guidance for a smooth and
                secure international money transfer experience.
              </p>
            </div>
            <button className="flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Row 2 - Column 1: Loan Assistance Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[300px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Loan <span className="text-purple-500 italic">Assistance</span>
            </h3>
            <div className="space-y-3 mb-6 flex-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                End-to-end visa application management.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional support for interview preparation and
                documentation.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real-time updates on visa regulations and compliance.
              </p>
            </div>
            <button className="flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Row 2 - Column 2: Loan Assistance Image */}
          <div className="bg-white rounded-[10px]  shadow-sm border border-gray-100 flex items-center justify-center min-h-[300px]">
            <Image
              src="/service_section03.webp"
              alt="Loan assistance documentation"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Row 2 - Column 3: Career Assistance Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[300px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Career <span className="text-purple-500 italic">Assistance</span>
            </h3>
            <div className="space-y-3 mb-6 flex-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                Swift and secure international transfers.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Competitive exchange rates with minimal fees.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts provide personalized guidance for a smooth and
                secure international money transfer experience.
              </p>
            </div>
            <button className="flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Row 2 - Column 4: Career Assistance Image */}
          <div className="bg-white rounded-[10px]  shadow-sm border border-gray-100 flex items-center justify-center min-h-[300px]">
            <Image
              src="/service_section04.webp"
              alt="Career guidance professional"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
