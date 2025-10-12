import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Remitout - Terms of Use",
  description:
    "Read Remitout's Terms of Use to understand the rules and conditions for using our education loan, admission, and remittance services.",
  openGraph: {
    title: "Remitout - Terms of Use",
    description:
      "Read Remitout's Terms of Use to understand the rules and conditions for using our services.",
    url: "https://www.remitout.com/terms",
    siteName: "Remitout",
  },
};


export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>Remitout - Terms of Use</title>
        <meta
          name="description"
          content="Read Remitout's Terms of Use covering eligibility, services, data usage, disclaimers, and liability. Stay informed before using our platform."
        />
        <link rel="canonical" href="http://loan.remitout.com/terms" />
        <meta property="og:title" content="Remitout - Terms of Use" />
        <meta
          property="og:description"
          content="Understand Remitout's terms and conditions for using education loans, admissions, and remittance services."
        />
        <meta property="og:url" content="http://loan.remitout.com/terms" />
        <meta
          property="og:image"
          content="http://loan.remitout.com/og-image-terms.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <div className="space-y-6 text-justify text-gray-700 leading-relaxed">
          <p>
            Welcome to www.remitout.com (“Website”, “Platform”, or “Service”),
            owned and operated by Remitout Service Private Limited (“Remitout”,
            “we”, “us”, “our”).
          </p>
          <p className="mt-4">
            By accessing or using our Website, you (“user”, “student”, “parent”,
            “consultant”, or “you”) agree to be bound by these Terms of Use
            (“Terms”). If you do not agree, you must not access or use our
            Website.
          </p>
          <h2 className="text-xl font-semibold mt-8">1. Our Role</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remitout is a facilitation and lead-generation platform that
              connects students and parents with authorized service providers
              including education consultants, universities, financial
              institutions, and visa service providers.
            </li>
            <li>
              We do not directly provide education loans, international
              remittance services, or visa filing. We only connect you with
              partners authorized to deliver such services.
            </li>
            <li>
              We do not guarantee service approval, pricing, timelines, or
              outcomes. Final responsibility rests with the partner you engage.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">2. Eligibility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old to use this Website.</li>
            <li>
              If you are under 18, you may use the Website only under the
              supervision of a parent or legal guardian.
            </li>
            <li>
              By using the Website, you confirm that all information you provide
              is true, accurate, and complete.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">3. Use of Services</h2>
          <p>You agree:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To use the Website only for lawful purposes related to education,
              loans, remittances, admissions, and visa facilitation.
            </li>
            <li>
              Not to misuse, hack, attempt unauthorized access, or disrupt the
              Website.
            </li>
            <li>
              Not to submit fraudulent, misleading, or forged documents or
              information.
            </li>
            <li>
              To take full responsibility for verifying the authenticity and
              suitability of any partner services before engaging with them.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">4. Data & Privacy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              By using the Website, you consent to the collection and use of
              your data as outlined in our Privacy Policy.
            </li>
            <li>
              You authorize Remitout to share your information with partners
              relevant to your inquiry (consultants, universities, financial
              institutions, visa service providers).
            </li>
            <li>
              Once data is shared with partners, Remitout is not responsible for
              how such partners use or process your data.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">
            5. Third-Party Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The Website may contain links, references, or integrations with
              third-party websites and services.
            </li>
            <li>
              Remitout does not endorse, control, or guarantee the accuracy,
              reliability, or quality of such third-party services.
            </li>
            <li>
              Any dealings between you and third parties are solely between you
              and such parties.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">6. Fees & Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using our Website is free for students and parents.</li>
            <li>
              Certain services may involve charges payable directly to partners
              (banks, consultants, universities, visa providers).
            </li>
            <li>
              Remitout may earn a commission or referral fee from partners for
              successful transactions. This does not affect the price you pay to
              partners.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">
            7. No Guarantees & Disclaimers
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remitout does not guarantee loan approval, visa approval,
              admission offers, or foreign exchange rates.
            </li>
            <li>
              All services are subject to eligibility, partner policies,
              regulatory requirements, and other conditions outside our control.
            </li>
            <li>
              Information on our Website is for informational purposes only and
              should not be considered financial, legal, or immigration advice.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">
            8. Limitation of Liability
          </h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remitout shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from your use of our
              Website or partner services.
            </li>
            <li>
              Remitout is not responsible for losses caused by partner actions,
              delays, rejections, fraud, or service deficiencies.
            </li>
            <li>Your sole remedy is to discontinue using the Website.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">9. Indemnity</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Remitout, its
            directors, employees, and affiliates from any claims, damages,
            losses, liabilities, costs, or expenses arising out of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of the Website or services,</li>
            <li>Your breach of these Terms, or</li>
            <li>Your dealings with third-party partners.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">
            10. Intellectual Property
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All content, branding, logos, design, software, and data on this
              Website are the property of Remitout Service Private Limited.
            </li>
            <li>
              You may not copy, reproduce, distribute, or exploit our Website
              content without written permission.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">11. Termination</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remitout may suspend or terminate your access at any time without
              prior notice if you breach these Terms or misuse the Website.
            </li>
            <li>
              Upon termination, all provisions regarding liability, indemnity,
              and intellectual property survive.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">
            12. Governing Law & Jurisdiction
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              These Terms are governed by and construed under the laws of India.
            </li>
            <li>
              Any disputes shall be subject to the exclusive jurisdiction of the
              courts of Mumbai, Maharashtra, India.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">13. Updates to Terms</h2>
          <p>
            We may revise these Terms from time to time. Updated versions will
            be posted on this page with a new “Last Updated” date. Continued use
            of the Website after changes constitutes acceptance of the revised
            Terms.
          </p>
          <h2 className="text-xl font-semibold mt-8">
            14. Contact Information
          </h2>
          <p>
            For any queries or concerns regarding these Terms, please contact:
          </p>
          <p className="mt-2">Remitout Service Private Limited</p>
          <p>Website: www.remitout.com</p>
          <p>Email: support@remitout.com</p>
          <p>Phone: +91 8454999327</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
