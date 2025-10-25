import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Auto Wheelers",
  description: "Privacy Policy for Auto Wheelers",
};

export default function PrivacyPolicy() {
  return (
    <main className="mt-20 px-6 py-12 bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10">
        <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          At Auto Wheelers, your privacy matters. This Privacy Policy explains what
          information we collect, how we use it, and the choices you have regarding
          your personal data when you use our platform.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect information you provide directly (like contact details and
            listings), data collected automatically (like device and usage
            information), and information from third-party services when you
            connect them to your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>To provide and personalize the services you request.</li>
            <li>To process transactions and send confirmations.</li>
            <li>To improve, analyze, and optimize our products and offerings.</li>
            <li>To communicate important notices and updates.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Cookies & Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to enable core site
            functionality, remember preferences, and analyze site usage. You can
            manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Sharing & Third Parties</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell personal information. We may share data with service
            providers who help operate the site, comply with the law, or protect
            rights and safety.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Data Retention & Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain data for as long as necessary to provide services and for
            legitimate business purposes. We use reasonable measures to protect
            your information, but no system is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            Depending on your jurisdiction, you may have rights to access,
            correct, or delete your personal data. Contact us using the details
            below to make a request.
          </p>
        </section>

        <section className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact</h3>
          <p className="text-gray-700">For questions about this policy, email contact@autowheelers.example</p>
        </section>
      </div>
    </main>
  );
}
