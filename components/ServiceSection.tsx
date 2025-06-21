import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="bg-white w-full pb-0 md:pb-39">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-semibold md:text-4xl text-[#363636] mb-4">
            Our <span className="text-[#45267f99] italic">Remittance</span>{" "}
            Services
          </h2>
          <p className="text-[#8E8E8E] text-[18px] max-w-2xl mx-auto">
            Send money abroad for education, travel, medical, and more — 100%
            RBI-compliant and hassle-free.
          </p>
        </div>

        {/* Services Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto">
          {/* Visa Guidance Image */}
          <div className="bg-white rounded-[6px] shadow-sm border border-gray-100 flex items-center justify-center min-h-[326px] md:min-h-[300px] order-1 md:order-1">
            <Image
              src="/service_section01.webp"
              alt="Visa guidance consultation"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Visa Guidance Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[250px] md:min-h-[300px] order-2 md:order-2">
            <h3 className="text-2xl font-semibold text-[#363636] mb-4">
              Visa{" "}
              <span className="text-[#45267f]/60 italic font-medium">
                Guidance
              </span>
            </h3>
            <div className="space-y-1 mb-6 flex-1">
              <p className="text-[#8E8E8E] font-normal text-base  leading-relaxed">
                End-to-end visa application management.
              </p>
              <p className="text-[#8E8E8E] text-base  font-normal leading-relaxed">
                Professional support for interview preparation and
                documentation.
              </p>
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Real-time updates on visa regulations and compliance.
              </p>
            </div>
            <button className="flex items-center gap-2 text-orange-500 font-medium text-base hover:text-orange-600 transition-colors cursor-pointer">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* International Transaction Image */}
          <div className="bg-white rounded-[5px] shadow-sm border border-gray-100 flex items-center justify-center min-h-[320px] md:min-h-[300px] order-3 md:order-3">
            <Image
              src="/service_section03.webp"
              alt="International money transfer"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* International Transaction Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[250px] md:min-h-[300px] order-4 md:order-4">
            <h3 className="text-2xl font-semibold text-[#363636] mb-4">
              International{" "}
              <span className="text-[#45267f]/60 italic font-medium">
                Transaction
              </span>
            </h3>
            <div className="space-y-1 mb-6 flex-1">
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Swift and secure international transfers.
              </p>
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Competitive exchange rates with minimal fees.
              </p>
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Our experts provide personalized guidance for a smooth and
                secure international money transfer experience.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[#FF7A00] font-medium text-base hover:text-[#FF7A00] transition-colors cursor-pointer">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Loan Assistance Image */}
          <div className="bg-white rounded-[5px] shadow-sm border border-gray-100 flex items-center justify-center min-h-[320px] md:min-h-[300px] order-5 md:order-6">
            <Image
              src="/service_section02.webp"
              alt="Loan assistance documentation"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Loan Assistance Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[250px] md:min-h-[300px] order-6 md:order-5">
            <h3 className="text-2xl font-semibold text-[#363636] mb-4">
              Loan{" "}
              <span className="text-[#45267f]/60 italic font-medium">
                Assistance
              </span>
            </h3>
            <div className="space-y-1 mb-6 flex-1">
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                End-to-end loan application management.
              </p>
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Professional support for documentation and approval process.
              </p>
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Competitive rates and flexible repayment options.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[#FF7A00] font-medium text-base hover:text-[#FF7A00] transition-colors cursor-pointer">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Career Assistance Image */}
          <div className="bg-white rounded-[5px] shadow-sm border border-gray-100 flex items-center justify-center min-h-[320px] md:min-h-[300px] order-7 md:order-8">
            <Image
              src="/service_section04.webp"
              alt="Career guidance professional"
              width={200}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Career Assistance Content */}
          <div className="bg-[#F7F7FB] rounded-[10px] p-[20px] shadow-sm border border-gray-100 flex flex-col justify-center min-h-[250px] md:min-h-[300px] order-8 md:order-7">
            <h3 className="text-2xl font-semibold text-[#363636] mb-4">
              Career{" "}
              <span className="text-[#45267f]/60 italic font-medium">
                Assistance
              </span>
            </h3>
            <div className="space-y-1 mb-6 flex-1">
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Professional career guidance and mentorship.
              </p>
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Resume building and interview preparation support.
              </p>
              <p className="text-[#8E8E8E] text-base  leading-relaxed">
                Industry connections and job placement assistance.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[#FF7A00] font-medium text-base hover:text-[#FF7A00] transition-colors">
              Contact to Know more
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
