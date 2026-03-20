import { Card } from 'components/card';

export const metadata = {
    title: 'Research'
};

const researchAreas = [
    {
        title: 'Clinical Nutrition & Medical Dietetics',
        description:
            'Investigating the role of nutrition in the prevention, management, and treatment of chronic diseases including diabetes, cardiovascular disease, and obesity. Our clinical trials unit conducts randomised controlled trials of dietary interventions in hospital and community settings.',
        lead: 'Prof. Eleanor Whitfield'
    },
    {
        title: 'Nutrigenomics & Personalised Nutrition',
        description:
            'Exploring how genetic variation affects individual responses to nutrients and dietary patterns. Our team uses genome-wide association studies and metabolomics to develop personalised dietary recommendations based on an individual\'s genetic profile.',
        lead: 'Prof. James Okoro'
    },
    {
        title: 'Gut Microbiome & Digestive Health',
        description:
            'Studying the complex interactions between diet, the gut microbiome, and human health. Current projects include investigating the effects of dietary fibre on microbiome diversity and the role of fermented foods in gut barrier function.',
        lead: 'Dr. Ananya Sharma'
    },
    {
        title: 'Public Health Nutrition & Policy',
        description:
            'Developing and evaluating population-level nutrition interventions and informing food policy. Our researchers work with governments and international organisations to address malnutrition, food insecurity, and diet-related disease burden.',
        lead: 'Dr. Marcus Jennings'
    },
    {
        title: 'Sports & Exercise Nutrition',
        description:
            'Investigating optimal nutrition strategies for athletic performance, recovery, and injury prevention. Our sports nutrition laboratory is equipped with indirect calorimetry, body composition analysis, and exercise testing facilities.',
        lead: 'Dr. Sophie Brennan'
    },
    {
        title: 'Food Science & Bioactive Compounds',
        description:
            'Researching the health-promoting properties of bioactive compounds in foods, including polyphenols, carotenoids, and prebiotics. Our food analysis laboratory characterises the nutritional composition and functional properties of novel food ingredients.',
        lead: 'Dr. Henrik Larsson'
    }
];

const recentPublications = [
    {
        title: 'Dietary fibre diversity and microbiome resilience: a 5-year longitudinal study in adults aged 40-65',
        journal: 'Nature Nutrition',
        year: '2025'
    },
    {
        title: 'Genetic determinants of omega-3 fatty acid metabolism: implications for personalised supplementation',
        journal: 'The American Journal of Clinical Nutrition',
        year: '2025'
    },
    {
        title: 'Fermented food consumption and gut barrier integrity: a randomised controlled crossover trial',
        journal: 'Gut',
        year: '2024'
    },
    {
        title: 'Effectiveness of school-based nutrition education programmes in reducing childhood obesity: a systematic review and meta-analysis',
        journal: 'The Lancet Public Health',
        year: '2024'
    },
    {
        title: 'Polyphenol-rich diets and cognitive function in older adults: findings from the SIAN Ageing Cohort',
        journal: 'The British Journal of Nutrition',
        year: '2024'
    }
];

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-6">Research</h1>
                <p className="text-lg text-[#9CA3AF]">
                    Research is at the heart of everything we do at SIAN. Our six research groups span the full
                    spectrum of nutritional science, from molecular mechanisms to population-level interventions.
                    We are committed to producing high-quality, impactful research that advances understanding
                    and improves health outcomes.
                </p>
            </section>

            <section>
                <h2 className="mb-8">Research Areas</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {researchAreas.map((area, index) => (
                        <Card key={index} title={area.title}>
                            <p>{area.description}</p>
                            <p className="mt-3 text-sm text-[#6B7280]">Research Lead: {area.lead}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-8">Recent Publications</h2>
                <div className="space-y-4">
                    {recentPublications.map((pub, index) => (
                        <div key={index} className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                            <p className="font-medium mb-1">{pub.title}</p>
                            <p className="text-sm text-[#6B7280]">
                                <span className="italic">{pub.journal}</span> ({pub.year})
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-8">Research Facilities</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
                        <h3 className="mb-3">Metabolic Research Facility</h3>
                        <p className="text-sm text-[#6B7280]">
                            A state-of-the-art facility for conducting human dietary intervention trials, equipped
                            with metabolic chambers, indirect calorimetry, and a clinical assessment suite.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
                        <h3 className="mb-3">Genomics Laboratory</h3>
                        <p className="text-sm text-[#6B7280]">
                            High-throughput sequencing and genotyping capabilities for nutrigenomics research,
                            including microbiome analysis and genome-wide association studies.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg bg-white/[0.03] border border-white/5">
                        <h3 className="mb-3">Food Analysis Lab</h3>
                        <p className="text-sm text-[#6B7280]">
                            Analytical chemistry laboratory for the characterisation of food composition,
                            bioactive compounds, and nutritional quality of novel ingredients.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
