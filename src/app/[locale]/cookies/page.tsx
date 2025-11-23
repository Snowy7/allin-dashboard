import Navbar from "@/components/Navbar";

export default function CookiesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                        <p className="text-muted-foreground">Last updated: November 22, 2025</p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl prose prose-lg dark:prose-invert">
                        <h2>What Are Cookies</h2>
                        <p>
                            Cookies are small text files that are placed on your device when you visit our website. Happy Sweet Cake Trading uses cookies to enhance your browsing experience and provide personalized services.
                        </p>

                        <h2>Types of Cookies We Use</h2>

                        <h3>Essential Cookies</h3>
                        <p>
                            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                        </p>

                        <h3>Performance Cookies</h3>
                        <p>
                            These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve the website's performance.
                        </p>

                        <h3>Functionality Cookies</h3>
                        <p>
                            These cookies allow the website to remember choices you make (such as language preference or theme) and provide enhanced, more personal features.
                        </p>

                        <h3>Analytics Cookies</h3>
                        <p>
                            We use analytics cookies to understand how visitors interact with our website. This helps us measure and improve our services.
                        </p>

                        <h2>Third-Party Cookies</h2>
                        <p>
                            We may use third-party services that place cookies on your device. These may include:
                        </p>
                        <ul>
                            <li>Analytics providers (e.g., Google Analytics)</li>
                            <li>Social media platforms</li>
                            <li>Payment processors</li>
                        </ul>

                        <h2>Managing Cookies</h2>
                        <p>
                            Most web browsers allow you to control cookies through their settings. You can set your browser to:
                        </p>
                        <ul>
                            <li>Accept all cookies</li>
                            <li>Notify you when a cookie is issued</li>
                            <li>Refuse all cookies</li>
                        </ul>
                        <p>
                            Please note that blocking all cookies may impact your experience on our website and prevent you from using certain features.
                        </p>

                        <h2>Cookie Consent</h2>
                        <p>
                            When you first visit our website, you will see a cookie consent banner. You can choose to accept or decline non-essential cookies. Your preferences will be stored for future visits.
                        </p>

                        <h2>Updates to This Policy</h2>
                        <p>
                            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have questions about our use of cookies, please contact us at:
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
