import { Card } from 'components/card';
import Link from 'next/link';

export const metadata = {
    title: 'Programs'
};

const programs = [
    {
        title: 'B.Sc. Nutrition & Dietetics',
        duration: '3 years full-time',
        description:
            'A comprehensive undergraduate programme covering the fundamentals of human nutrition, food science, biochemistry, and dietetic practice. Graduates are prepared for careers in clinical dietetics, public health nutrition, and the food industry.',
        highlights: ['Accredited by the British Dietetic Association', '120 hours of supervised clinical placement', 'Research methods and statistics training']
    },
    {
        title: 'M.Sc. Clinical Nutrition',
        duration: '1 year full-time / 2 years part-time',
        description:
            'An advanced programme focusing on medical nutrition therapy, advanced biochemistry, and evidence-based clinical practice. Designed for nutrition professionals seeking to deepen their clinical expertise and move into specialist roles.',
        highlights: ['Hospital-based clinical rotations', 'Advanced metabolic assessment techniques', 'Case study-driven curriculum']
    },
    {
        title: 'M.Sc. Public Health Nutrition',
        duration: '1 year full-time / 2 years part-time',
        description:
            'This programme trains nutritionists to address population-level dietary challenges. Students learn to design, implement, and evaluate nutrition interventions across diverse communities and policy settings.',
        highlights: ['Community intervention design', 'Global nutrition policy analysis', 'Epidemiological methods for nutrition research']
    },
    {
        title: 'M.Sc. Food Science & Innovation',
        duration: '1 year full-time',
        description:
            'Bridging nutrition science and food technology, this programme prepares graduates for careers in food product development, quality assurance, and regulatory affairs. Students gain hands-on experience in our food technology laboratory.',
        highlights: ['Product development laboratory sessions', 'Food safety and regulatory frameworks', 'Industry placement opportunities']
    },
    {
        title: 'Ph.D. Nutritional Sciences',
        duration: '3-4 years full-time',
        description:
            'A research-intensive doctoral programme for those seeking to make original contributions to nutritional science. Ph.D. candidates work alongside leading researchers in areas such as nutrigenomics, metabolomics, gut health, and clinical nutrition.',
        highlights: ['Dedicated research supervisors', 'Access to metabolic research facility', 'Funded conference attendance and publication support']
    },
    {
        title: 'Professional Development Courses',
        duration: 'Various (1 day - 12 weeks)',
        description:
            'Short courses and continuing professional development (CPD) programmes for practising nutritionists, dietitians, and healthcare professionals. Topics include sports nutrition, paediatric dietetics, and nutritional genomics.',
        highlights: ['Flexible online and in-person formats', 'CPD-accredited certificates', 'Expert-led masterclasses']
    }
];

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-6">Academic Programs</h1>
                <p className="text-lg text-[#3E4C59]">
                    SIAN offers a range of undergraduate, postgraduate, and professional development programmes
                    in nutritional science. All programmes are designed to combine rigorous scientific training
                    with practical, real-world application.
                </p>
            </section>

            <section className="flex flex-col gap-6">
                {programs.map((program, index) => (
                    <Card key={index} title={program.title}>
                        <p className="text-sm text-[#616E7C] -mt-2 mb-2">{program.duration}</p>
                        <p>{program.description}</p>
                        <ul className="mt-3 space-y-1">
                            {program.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#616E7C]">
                                    <span className="text-accent mt-0.5">&bull;</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </section>

            <section className="text-center py-8 px-6 rounded-lg bg-white border border-[#D8E2EC]">
                <h2 className="mb-4">Interested in Applying?</h2>
                <p className="mb-6 text-[#3E4C59] max-w-2xl mx-auto">
                    Contact our admissions team to learn more about entry requirements, funding opportunities,
                    and application deadlines for our programmes.
                </p>
                <Link href="/contact" className="btn btn-lg">
                    Contact Admissions
                </Link>
            </section>
        </div>
    );
}
