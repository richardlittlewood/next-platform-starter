import { Card } from 'components/card';

export const metadata = {
    title: 'Faculty'
};

const facultyMembers = [
    {
        name: 'Prof. E. Whitfield',
        role: 'Director & Professor of Clinical Nutrition',
        bio: 'Professor Whitfield has over 25 years of experience in clinical nutrition research, with a particular focus on dietary interventions for type 2 diabetes and cardiovascular disease. She has led more than 30 randomised controlled trials and published over 200 peer-reviewed papers.',
        expertise: ['Clinical Nutrition', 'Diabetes Management', 'Cardiovascular Health']
    },
    {
        name: 'Prof. J. Okoro',
        role: 'Head of Nutrigenomics & Personalised Nutrition',
        bio: "Professor Okoro is a leading figure in the emerging field of nutrigenomics. His research explores how genetic variation influences nutrient metabolism and dietary requirements. He established SIAN's Centre for Nutrigenomics Research in 2008.",
        expertise: ['Nutrigenomics', 'Personalised Nutrition', 'Genetic Epidemiology']
    },
    {
        name: 'Dr. A. Sharma',
        role: 'Senior Lecturer in Gut Microbiome Science',
        bio: 'Dr. Sharma investigates the intricate relationships between diet, the gut microbiome, and host health. Her award-winning research on dietary fibre and microbiome diversity has been widely cited and has informed national dietary guidelines.',
        expertise: ['Gut Microbiome', 'Dietary Fibre', 'Fermented Foods']
    },
    {
        name: 'Dr. M. Jennings',
        role: 'Reader in Public Health Nutrition',
        bio: 'Dr. Jennings combines epidemiological methods with community-based research to develop and evaluate nutrition interventions at the population level. He advises the World Health Organisation on nutrition policy for low- and middle-income countries.',
        expertise: ['Public Health', 'Nutrition Policy', 'Global Health']
    },
    {
        name: 'Dr. S. Brennan',
        role: 'Senior Lecturer in Sports Nutrition',
        bio: 'Dr. Brennan is a registered sports dietitian and researcher specialising in the nutritional demands of elite athletes. She has worked with national Olympic teams and professional sporting organisations across multiple disciplines.',
        expertise: ['Sports Nutrition', 'Exercise Physiology', 'Body Composition']
    },
    {
        name: 'Dr. H. Larsson',
        role: 'Lecturer in Food Science',
        bio: 'Dr. Larsson researches the health-promoting properties of bioactive compounds found in plant-based foods. His laboratory work on polyphenol bioavailability and antioxidant mechanisms contributes to our understanding of functional foods.',
        expertise: ['Food Science', 'Bioactive Compounds', 'Polyphenols']
    },
    {
        name: 'Dr. F. Al-Rashid',
        role: 'Lecturer in Nutritional Biochemistry',
        bio: 'Dr. Al-Rashid teaches and researches the biochemical mechanisms underlying nutrient metabolism. Her current research focuses on the role of micronutrients in immune function and the metabolic consequences of vitamin D deficiency.',
        expertise: ['Nutritional Biochemistry', 'Micronutrients', 'Immune Function']
    },
    {
        name: 'Dr. T. Chen',
        role: 'Research Fellow in Metabolomics',
        bio: 'Dr. Chen applies advanced metabolomics techniques to identify biomarkers of dietary intake and nutritional status. His work aims to develop objective tools for measuring dietary exposure in epidemiological studies.',
        expertise: ['Metabolomics', 'Biomarker Discovery', 'Analytical Chemistry']
    }
];

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-6">Our Faculty</h1>
                <p className="text-lg text-[#3E4C59]">
                    SIAN&apos;s faculty members are internationally recognised experts in their respective fields. Our team
                    of researchers, educators, and clinicians brings together a wealth of experience across all
                    areas of nutritional science.
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {facultyMembers.map((member, index) => (
                    <Card key={index} title={member.name}>
                        <p className="text-sm text-accent -mt-2 mb-3">{member.role}</p>
                        <p className="text-sm">{member.bio}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {member.expertise.map((tag, i) => (
                                <span key={i} className="px-2 py-1 text-xs font-medium rounded bg-accent/10 text-accent border border-accent/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </section>
        </div>
    );
}
