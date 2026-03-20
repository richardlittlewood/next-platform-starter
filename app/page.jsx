import Link from 'next/link';
import { Card } from 'components/card';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center py-8 sm:py-12">
                <h1 className="mb-6">Scientific Institute of Advanced Nutrition</h1>
                <p className="mb-8 text-lg max-w-3xl mx-auto text-blue-100">
                    Pioneering research in nutritional science. Educating the next generation of nutrition
                    professionals. Transforming lives through evidence-based dietary practices.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/programs" className="btn btn-lg sm:min-w-48">
                        Explore Programs
                    </Link>
                    <Link href="/research" className="btn btn-lg sm:min-w-48 bg-secondary hover:bg-secondary/85">
                        Our Research
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="mb-8 text-center">Why SIAN?</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <Card title="World-Class Research">
                        <p>Our faculty leads groundbreaking studies in clinical nutrition, nutrigenomics, and public health nutrition, publishing in top-tier peer-reviewed journals.</p>
                    </Card>
                    <Card title="Evidence-Based Education">
                        <p>Programs designed around the latest scientific evidence, preparing graduates to become leaders in dietetics, nutrition therapy, and food science.</p>
                    </Card>
                    <Card title="Global Impact">
                        <p>From community nutrition programs to international food policy, SIAN graduates and researchers are making a difference in nutritional health worldwide.</p>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="mb-8 text-center">Featured Programs</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card title="M.Sc. Clinical Nutrition">
                        <p>A rigorous program combining advanced biochemistry, medical nutrition therapy, and clinical practice to prepare nutrition professionals for healthcare settings.</p>
                        <Link href="/programs" className="inline-block mt-3 text-sm font-semibold text-primary no-underline hover:underline">
                            Learn more &rarr;
                        </Link>
                    </Card>
                    <Card title="Ph.D. Nutritional Sciences">
                        <p>An advanced research degree for those seeking to push the boundaries of nutritional knowledge through original investigation and scholarly contribution.</p>
                        <Link href="/programs" className="inline-block mt-3 text-sm font-semibold text-primary no-underline hover:underline">
                            Learn more &rarr;
                        </Link>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="mb-8 text-center">Research Highlights</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card title="Gut Microbiome &amp; Diet Study">
                        <p>Our latest longitudinal study reveals significant correlations between dietary fibre diversity and microbiome resilience in adults aged 40&ndash;65.</p>
                    </Card>
                    <Card title="Nutrigenomics Breakthrough">
                        <p>SIAN researchers have identified key genetic markers that influence individual responses to omega-3 supplementation, paving the way for personalised nutrition.</p>
                    </Card>
                </div>
                <div className="mt-6 text-center">
                    <Link href="/research" className="btn">
                        View All Research
                    </Link>
                </div>
            </section>

            <section className="text-center py-8 px-6 rounded-lg bg-white/5">
                <h2 className="mb-4">Ready to Advance Your Career in Nutrition?</h2>
                <p className="mb-6 text-lg text-blue-100 max-w-2xl mx-auto">
                    Join a community of passionate scientists and practitioners dedicated to improving human health
                    through nutrition.
                </p>
                <Link href="/contact" className="btn btn-lg">
                    Get in Touch
                </Link>
            </section>
        </div>
    );
}
