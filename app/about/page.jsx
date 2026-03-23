import { Card } from 'components/card';

export const metadata = {
    title: 'About'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-6">About SIAN</h1>
                <p className="text-lg text-[#3E4C59] mb-6">
                    The Scientific Institute of Advanced Nutrition (SIAN) was founded in 1998 with a clear mission:
                    to advance the understanding of human nutrition through rigorous scientific research and to
                    translate that knowledge into practical, evidence-based solutions for improving public health.
                </p>
                <p className="text-[#3E4C59]">
                    Over more than two decades, SIAN has grown from a small research centre into one of the
                    most respected institutions in the field of nutritional science. Our interdisciplinary approach
                    brings together biochemists, clinicians, epidemiologists, and food scientists to tackle the
                    complex challenges of modern nutrition.
                </p>
            </section>

            <section>
                <h2 className="mb-8">Our Mission</h2>
                <div className="rounded-lg bg-white border border-[#D8E2EC] p-8">
                    <p className="text-lg text-[#3E4C59] italic">
                        &ldquo;To advance the science of human nutrition through innovative research, to educate future
                        leaders in nutritional science and dietetics, and to improve health outcomes globally through
                        evidence-based dietary guidance and policy.&rdquo;
                    </p>
                </div>
            </section>

            <section>
                <h2 className="mb-8">Our Values</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card title="Scientific Rigour">
                        <p>Every study, programme, and recommendation at SIAN is grounded in robust scientific methodology. We are committed to reproducible research and transparent reporting.</p>
                    </Card>
                    <Card title="Innovation">
                        <p>We embrace new technologies and approaches, from nutrigenomics and metabolomics to AI-driven dietary analysis, to push the frontiers of nutritional science.</p>
                    </Card>
                    <Card title="Collaboration">
                        <p>Our best work emerges from interdisciplinary partnerships. We actively collaborate with hospitals, universities, food industry leaders, and public health organisations worldwide.</p>
                    </Card>
                    <Card title="Inclusivity">
                        <p>Nutritional health is a universal concern. Our research and programmes are designed to address the dietary needs of diverse populations across all socioeconomic backgrounds.</p>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="mb-8">SIAN by the Numbers</h2>
                <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
                    <div className="text-center p-6 rounded-lg bg-white border border-[#D8E2EC]">
                        <p className="text-3xl font-bold text-accent mb-2">25+</p>
                        <p className="text-sm text-[#616E7C]">Years of Excellence</p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-white border border-[#D8E2EC]">
                        <p className="text-3xl font-bold text-accent mb-2">120+</p>
                        <p className="text-sm text-[#616E7C]">Faculty &amp; Researchers</p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-white border border-[#D8E2EC]">
                        <p className="text-3xl font-bold text-accent mb-2">3,500+</p>
                        <p className="text-sm text-[#616E7C]">Graduates</p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-white border border-[#D8E2EC]">
                        <p className="text-3xl font-bold text-accent mb-2">800+</p>
                        <p className="text-sm text-[#616E7C]">Published Studies</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="mb-6">Our History</h2>
                <div className="space-y-6 text-[#3E4C59]">
                    <div className="flex gap-4">
                        <span className="text-accent font-bold whitespace-nowrap">1998</span>
                        <p>SIAN founded as a specialist research unit within the Cambridge Centre for Biomedical Sciences.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-accent font-bold whitespace-nowrap">2003</span>
                        <p>Launched the first M.Sc. programme in Clinical Nutrition, attracting students from 15 countries.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-accent font-bold whitespace-nowrap">2008</span>
                        <p>Established the Centre for Nutrigenomics Research, pioneering personalised nutrition approaches.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-accent font-bold whitespace-nowrap">2014</span>
                        <p>Awarded the Royal Medal for Outstanding Contribution to Nutritional Science.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-accent font-bold whitespace-nowrap">2019</span>
                        <p>Opened the state-of-the-art Metabolic Research Facility for human dietary intervention trials.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-accent font-bold whitespace-nowrap">2024</span>
                        <p>Expanded to six academic departments with over 120 faculty members and research staff.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
