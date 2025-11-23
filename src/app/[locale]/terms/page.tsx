import Navbar from "@/components/Navbar";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                        <p className="text-muted-foreground">Last updated: November 22, 2025</p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl prose prose-lg dark:prose-invert">
                        <h2>Agreement to Terms</h2>
                        <p>
                            By accessing and using the Happy Sweet Cake Trading website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                        </p>

                        <h2>Use of Services</h2>
                        <p>Our services include:</p>
                        <ul>
                            <li>Online ordering of sweets and cakes</li>
                            <li>Flower arrangement and delivery</li>
                            <li>Event planning and coordination services</li>
                            <li>E-commerce platform for gift shopping</li>
                        </ul>

                        <h2>Orders and Payments</h2>
                        <p>
                            When you place an order through our website, you agree to provide accurate and complete information. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.
                        </p>

                        <h2>Delivery</h2>
                        <p>
                            We aim to deliver orders within Qatar in a timely manner. Delivery times are estimates and not guaranteed. We are not liable for delays caused by circumstances beyond our control.
                        </p>

                        <h2>Cancellations and Refunds</h2>
                        <p>
                            Cancellation policies vary by product and service. Custom orders may not be refundable. Please contact us within 24 hours of placing your order if you need to make changes.
                        </p>

                        <h2>Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, and images, is the property of Happy Sweet Cake Trading and is protected by copyright laws.
                        </p>

                        <h2>Limitation of Liability</h2>
                        <p>
                            Happy Sweet Cake Trading shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.
                        </p>

                        <h2>Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of Qatar.
                        </p>

                        <h2>Contact Information</h2>
                        <p>
                            For questions about these Terms of Service, please contact us at:
                            <br />
                            Email: legal@happysweetcake.qa
                            <br />
                            Address: Doha, Qatar
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
