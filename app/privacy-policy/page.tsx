import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Remitout - Privacy Policy",
  description:
    "Learn how Remitout collects, uses, and protects your data when using our education loan, admission, and remittance services.",
  alternates: { canonical: "https://loan.remitout.com/privacy-policy" },
  openGraph: {
    title: "Remitout - Privacy Policy",
    description:
      "Learn how Remitout collects, uses, and protects your personal information when using Remitout services.",
    url: "https://loan.remitout.com/privacy-policy",
    siteName: "Remitout",
    images: [
      {
        url: "https://loan.remitout.com/og-image-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Remitout Privacy Policy",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};


export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Remitout Service Private Limited (“Remitout”, “we”, “us”, “our”)
            operates <strong>www.remitout.com</strong> (the “Website”,
            “Platform”, or “Service”).
          </p>
          <p>
            This Privacy Policy describes how we collect, use, disclose, and
            protect your personal data when you submit information for student
            international money transfers, education loans, overseas
            university/college admissions, and visa application assistance.
          </p>
          <p>
            By using our Website or providing your information, you acknowledge
            that you have read, understood, and agree to the terms of this
            Privacy Policy. If you do not agree, you must not use this Website.
          </p>
          <h2 className="text-xl font-semibold mt-8">1. Our Role</h2>
          <p>
            Remitout acts as a lead-generation and facilitation platform
            connecting students and users with authorized partners (such as
            educational consultants, universities, financial institutions, and
            visa service providers).
          </p>
          <p>
            We do not directly provide education loans, money transfer services,
            or visa filing services — we only connect you with partners who are
            authorized to deliver such services. We are not responsible for the
            quality, accuracy, timelines, pricing, approvals, or outcomes of
            services provided by such partners.
          </p>
          <h2 className="text-xl font-semibold mt-8">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Identity and Contact Data</strong> – Name, email address,
              phone number, gender, date of birth, postal address
            </li>
            <li>
              <strong>Education Data</strong> – Current course, school/college
              name, grades, test scores, intended study destination
            </li>
            <li>
              <strong>Financial Data</strong> – Annual income, bank details (if
              needed for loan assessment), co-applicant/parent income data
            </li>
            <li>
              <strong>Identification Data</strong> – Aadhaar/PAN details,
              passport number, visa details, copies of documents (only when
              necessary)
            </li>
            <li>
              <strong>Technical Data</strong> – IP address, device/browser type,
              operating system, referrer URL, cookies, analytics data
            </li>
            <li>
              <strong>Communication Data</strong> – Chat history, emails,
              WhatsApp messages, feedback forms, support tickets
            </li>
          </ul>
          <p>
            We collect only the minimum data required to serve the stated
            purposes.
          </p>
          <h2 className="text-xl font-semibold mt-8">3. How We Collect Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Directly from you</strong> – When you fill out forms,
              upload documents, or contact us
            </li>
            <li>
              <strong>Automatically</strong> – Through cookies, tracking pixels,
              analytics tools
            </li>
            <li>
              <strong>From third parties</strong> – Referral partners or
              advertising networks (where you have consented)
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">
            4. Purpose of Data Processing
          </h2>{" "}
          <p>We process your data for the following purposes:</p>{" "}
          <ul className="list-disc pl-6 space-y-2">
            {" "}
            <li>To connect you with appropriate service providers</li>{" "}
            <li>To facilitate education loan, forex, and visa services</li>{" "}
            <li>To improve our Website, products, and services</li>{" "}
            <li>For customer support and responding to inquiries</li>{" "}
            <li>For compliance with legal and regulatory requirements</li>{" "}
          </ul>{" "}
          <h2 className="text-xl font-semibold mt-8">
            5. Data Sharing and Disclosure
          </h2>{" "}
          <p>
            {" "}
            We may share your data with our verified partners (universities,
            consultants, financial institutions, visa service providers) only
            when necessary to provide the requested service. We do not sell or
            rent your personal data to third parties for marketing
            purposes.{" "}
          </p>{" "}
          <h2 className="text-xl font-semibold mt-8">6. Data Retention</h2>{" "}
          <p>
            {" "}
            We retain your personal data only as long as necessary for the
            purposes described in this policy, unless a longer retention period
            is required by law.{" "}
          </p>{" "}
          <h2 className="text-xl font-semibold mt-8">7. Your Rights</h2>{" "}
          <p>You have the right to:</p>{" "}
          <ul className="list-disc pl-6 space-y-2">
            {" "}
            <li>Access the personal data we hold about you</li>{" "}
            <li>Request correction of inaccurate or incomplete data</li>{" "}
            <li>Request deletion of your data (“right to be forgotten”)</li>{" "}
            <li>Withdraw your consent at any time</li>{" "}
            <li>Opt out of marketing communications</li>{" "}
          </ul>{" "}
          <h2 className="text-xl font-semibold mt-8">8. Data Security</h2>{" "}
          <p>
            {" "}
            We implement industry-standard security measures including
            encryption, secure servers, and access controls to protect your
            personal data. However, no online transmission or storage method is
            100% secure, and we cannot guarantee absolute security.{" "}
          </p>{" "}
          <h2 className="text-xl font-semibold mt-8">
            9. International Data Transfers
          </h2>{" "}
          <p>
            {" "}
            Your data may be transferred to and stored in servers located
            outside India. In such cases, we ensure that adequate data
            protection measures are in place as per applicable law.{" "}
          </p>{" "}
          <h2 className="text-xl font-semibold mt-8">
            10. Third-Party Links
          </h2>{" "}
          <p>
            {" "}
            Our Website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of such sites. We
            encourage you to read their privacy policies.{" "}
          </p>{" "}
          <h2 className="text-xl font-semibold mt-8">
            11. Cookies and Tracking
          </h2>{" "}
          <p>
            {" "}
            We use cookies and similar tracking technologies to enhance user
            experience, analyze traffic, and improve our services. You can
            control cookie settings through your browser.{" "}
          </p>{" "}
          <h2 className="text-xl font-semibold mt-8">
            12. Changes to this Privacy Policy
          </h2>{" "}
          <p>
            {" "}
            We may update this Privacy Policy from time to time. The updated
            version will be posted on this page with a revised “Last Updated”
            date. Please check periodically for updates.{" "}
          </p>{" "}
          <h2 className="text-xl font-semibold mt-8">13. Contact Us</h2>{" "}
          <p>
            {" "}
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at:{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>Email:</strong> support@remitout.com <br />{" "}
            <strong>Phone:</strong> +91-XXXXXXXXXX <br />{" "}
            <strong>Address:</strong> Remitout Service Pvt. Ltd, Bangalore,
            India{" "}
          </p>
          <h2 className="text-xl font-semibold mt-8">
            14. Limitation of Liability & Indemnity
          </h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remitout disclaims liability for direct, indirect, incidental, or
              consequential damages resulting from partner actions, service
              quality, or third-party data breaches.
            </li>
            <li>
              You agree to indemnify and hold Remitout harmless from any claims,
              damages, or legal proceedings arising from your use of our
              Website, your data submissions, or your engagement with partner
              services.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-8">
            15. Governing Law & Jurisdiction
          </h2>
          <p>
            This Privacy Policy is governed by and construed under the laws of
            India. Any disputes shall be subject to the exclusive jurisdiction
            of the courts of Mumbai, Maharashtra, India.
          </p>
          <h2 className="text-xl font-semibold mt-8">
            16. Contact & Grievance Redressal
          </h2>
          <p>For any questions, complaints, or concerns, contact:</p>
          <p>
            <strong>Remitout Service Private Limited</strong>
            <br />
            Website: www.remitout.com
            <br />
            Email:{" "}
            <a
              href="mailto:support@remitout.com"
              className="text-blue-600 underline"
            >
              support@remitout.com
            </a>
            <br />
            Phone: +91 8454999327
          </p>
          <p>
            We will acknowledge your request within 24 hours and respond in line
            with applicable legal requirements.
          </p>
          <h2 className="text-xl font-semibold mt-8">17. Policy Updates</h2>
          <p>
            We may revise this Privacy Policy periodically. The updated version
            will be posted here with a revised “Last Updated” date. Material
            changes may be communicated by email or website notification.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
