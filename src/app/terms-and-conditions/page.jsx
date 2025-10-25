import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - Auto Wheelers",
  description: "Terms and Conditions for Auto Wheelers",
};

export default function TermsAndConditions() {
  return (
    <main className="mt-20 px-6 py-12 bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10">
        <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          These Terms & Conditions govern your use of Auto Wheelers. By using our
          platform you agree to these terms, so please read them carefully.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Using the Service</h2>
          <p className="text-gray-700 leading-relaxed">
            You must be at least 18 years old to use the service. You agree to
            provide accurate information and to use the platform in compliance
            with all applicable laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">User Content</h2>
          <p className="text-gray-700 leading-relaxed">
            You retain ownership of the content you post, but grant Auto Wheelers
            a license to use it to operate and promote the service. Do not post
            illegal or infringing content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Liability & Disclaimers</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide the platform "as is" and are not responsible for disputes
            or transactions between users. We do not guarantee outcomes or
            third-party behavior.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We may suspend or terminate accounts that violate these terms or for
            other legitimate reasons.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms are governed by the laws of the jurisdiction where Auto
            Wheelers is operated, unless local law requires otherwise.
          </p>
        </section>

        <section className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact</h3>
          <p className="text-gray-700">If you have questions about these terms, email contact@autowheelers.example</p>
        </section>
      </div>
    </main>
  );
}
