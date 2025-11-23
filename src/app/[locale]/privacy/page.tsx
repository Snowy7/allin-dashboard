import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-muted-foreground">Last updated: November 22, 2025</p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl prose prose-lg dark:prose-invert">
                        <h2>Introduction</h2>
                        <p>
                            Happy Sweet Cake Trading ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
                        </p>

                        <h2>Information We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
                        </ul>

                        <h2>How We Use Your Information</h2>
                        <p>We use your personal data for the following purposes:</p>
                        <ul>
                            <li>To process and deliver your orders</li>
                            <li>To manage our relationship with you</li>
                            <li>To improve our website and services</li>
                            <li>To make suggestions and recommendations to you about goods or services that may be of interest to you</li>
                        </ul>

                        <h2>Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>

                        <h2>Your Legal Rights</h2>
                        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                        <ul>
                            <li>Request access to your personal data</li>
                            <li>Request correction of your personal data</li>
                            <li>Request erasure of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request restriction of processing your personal data</li>
                            <li>Request transfer of your personal data</li>
                        </ul>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            <br />
                            Email: privacy@happysweetcake.qa
                            <br />
                            Address: Doha, Qatar
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
