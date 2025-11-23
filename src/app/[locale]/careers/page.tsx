import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
                        <p className="text-xl text-muted-foreground">
                            Join the Happy Sweet Cake Trading team
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg mb-6">
                                <Briefcase className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">No Open Positions</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We don't have any open positions at the moment, but we're always looking for talented people.
                            </p>
                        </div>

                        <Card className="border-2">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold mb-4">Send us your CV</h3>
                                <p className="text-muted-foreground mb-6">
                                    Even if we don't have an opening that matches your skills right now, we'd love to hear from you.
                                </p>
                                <Button className="w-full h-12" asChild>
                                    <a href="mailto:careers@happysweetcake.qa">
                                        Email Your CV
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    );
}
