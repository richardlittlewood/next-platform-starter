import { Header } from 'components/header';
import { Footer } from 'components/footer';

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <MeetingOverviewSection />
                <AgendaSection />
                <SpeakersSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}

/* ─── Hero Section ─── */
function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 sm:py-24 lg:py-32">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="container-narrow relative">
                {/* Meeting banner: logo + title side by side, matching the official banner style */}
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-10">
                    <img
                        src="/images/sian-logo.png"
                        alt="SIAN Logo"
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/95 p-1 flex-shrink-0 shadow-xl"
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-white mb-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                            Special Focus Meeting<br />
                            Beta‑hydroxybutyrate (BHB) in Applied Metabolic Nutrition
                        </h1>
                        <p className="text-primary-100 text-lg sm:text-xl italic">
                            An industry leader&rsquo;s forum
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-primary-100 mb-10">
                    <span className="flex items-center gap-2">
                        <CalendarIcon />
                        June 8, 2026
                    </span>
                    <span className="flex items-center gap-2">
                        <ClockIcon />
                        From 3:00 PM (Spain)
                    </span>
                    <span className="flex items-center gap-2">
                        <GlobeIcon />
                        Hybrid: Online &amp; In‑Person
                    </span>
                </div>
                <div className="text-center">
                    <a href="#agenda" className="btn btn-primary text-lg px-8 py-4 bg-white text-primary-900 hover:bg-primary-50 font-bold shadow-lg no-underline">
                        View Meeting Agenda
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ─── About Section ─── */
function AboutSection() {
    return (
        <section id="about" className="section">
            <div className="container-narrow max-w-3xl">
                <h2 className="text-primary-800 mb-6 text-center">About the Institute</h2>
                <p className="text-text-muted text-lg leading-relaxed">
                    The Scientific Institute for Advanced Nutrition (SIAN) is an independent, standards‑driven body
                    focused on applied metabolic and nutrition science. SIAN sets higher benchmarks for evidence,
                    manufacturing quality, and real‑world clinical impact. Working transparently with industry,
                    clinicians, and regulators, the Institute is dedicated to advancing robust evidence, promoting
                    high‑quality production, driving innovation in advanced metabolic nutrition, and establishing
                    global benchmarks that benefit patients and practitioners worldwide.
                </p>
            </div>
        </section>
    );
}

/* ─── Meeting Overview Section ─── */
function MeetingOverviewSection() {
    return (
        <section id="overview" className="section section-alt">
            <div className="container-narrow">
                <h2 className="text-primary-800 mb-6 text-center">Special Focus Meeting on BHB</h2>
                <p className="text-text-muted text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
                    SIAN&rsquo;s inaugural industry leaders&rsquo; forum on Beta‑hydroxybutyrate in applied metabolic
                    nutrition, covering standards, regulation, production innovation, clinical applications, and future
                    science.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <InfoCard icon={<CalendarIcon />} label="Date" value="June 8, 2026" />
                    <InfoCard icon={<ClockIcon />} label="Time" value="From 3:00 PM (Spain)" />
                    <InfoCard icon={<MapPinIcon />} label="Location" value="Spain — Hybrid Online & In-Person" />
                    <InfoCard icon={<UsersIcon />} label="Audience" value="Clinicians, Researchers, Industry & Regulators" />
                </div>
            </div>
        </section>
    );
}

function InfoCard({ icon, label, value }) {
    return (
        <div className="info-card flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary">
                {icon}
            </div>
            <p className="font-semibold text-primary-800 text-sm uppercase tracking-wider">{label}</p>
            <p className="text-text-muted text-sm">{value}</p>
        </div>
    );
}

/* ─── Agenda Section ─── */
function AgendaSection() {
    return (
        <section id="agenda" className="section">
            <div className="container-narrow">
                <h2 className="text-primary-800 mb-4 text-center">Detailed Agenda</h2>
                <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
                    Afternoon programme — June 8, 2026, from 3:00 PM (Spain time)
                </p>

                <div className="max-w-4xl mx-auto space-y-0">
                    {/* Introduction */}
                    <div className="agenda-item">
                        <div className="agenda-session">
                            <h3 className="text-primary-800 mb-2">Introduction from Chairs</h3>
                            <div className="text-text-muted text-sm space-y-1">
                                <p><strong>Europe Chair:</strong> R. Littlewood MA MBA MD</p>
                                <p><strong>Japan Chair:</strong> [TBC]</p>
                                <p><strong>USA Online Chair:</strong> [TBC]</p>
                            </div>
                        </div>
                    </div>

                    {/* Keynote Opening */}
                    <div className="agenda-item">
                        <div className="agenda-session bg-primary-50 border-primary-200">
                            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary-100 rounded-full px-3 py-1 mb-3">
                                Keynote
                            </span>
                            <h3 className="text-primary-800 mb-2">&ldquo;Past, Present, Future: The BHB Journey&rdquo;</h3>
                            <p className="text-text-muted text-sm">Invited speaker: Gary M [TBC]</p>
                        </div>
                    </div>

                    {/* Session 1 */}
                    <div className="agenda-item">
                        <div className="agenda-session">
                            <h3 className="text-primary-800 mb-4">Session 1: Standards and Regulation</h3>
                            <div className="space-y-4">
                                <AgendaSubSession
                                    title="Session 1a — Overview"
                                    speaker="R. Littlewood (Medical Doctor, inventor of Klario)"
                                    focus="Clinical applications and regulatory vision for BHB."
                                />
                                <AgendaSubSession
                                    title="Session 1b — Worldwide Regulatory Overview"
                                    speaker="H. Myers, CEO Flow Health Science"
                                    focus="Global regulatory landscape for BHB products."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Session 2 */}
                    <div className="agenda-item">
                        <div className="agenda-session">
                            <h3 className="text-primary-800 mb-4">Session 2: Innovation in Supply and Production</h3>
                            <div className="space-y-4">
                                <AgendaSubSession
                                    title="Session 2a — Review of Supply and Production Innovations"
                                    speaker="Invited speaker"
                                    focus="Types of BHBs and their current supply status."
                                />
                                <AgendaSubSession
                                    title="Session 2b — Innovation in BHB Supply"
                                    speaker="[TBC]"
                                    focus="Details and supply strategy for a newly introduced natural fermented BHB."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Keynote 2 */}
                    <div className="agenda-item">
                        <div className="agenda-session bg-primary-50 border-primary-200">
                            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary-100 rounded-full px-3 py-1 mb-3">
                                Keynote
                            </span>
                            <h3 className="text-primary-800 mb-2">&ldquo;Major Success: BHB in Practice&rdquo;</h3>
                            <p className="text-text-muted text-sm">Invited speaker: D. D&rsquo;Agostino [TBC]</p>
                        </div>
                    </div>

                    {/* Session 3 */}
                    <div className="agenda-item">
                        <div className="agenda-session">
                            <h3 className="text-primary-800 mb-4">Session 3: Clinical Applications</h3>
                            <div className="space-y-4">
                                <AgendaSubSession
                                    title="Session 3a — Advances in Migraine"
                                    speaker="Dr. E. Gross, CH (suggested)"
                                    focus="Defining BHB's role in treatment of migraine, current and future."
                                />
                                <AgendaSubSession
                                    title="Session 3b — Evidence Generation in Diabetes"
                                    speaker="Prof. Russell Jones, UK"
                                    focus="Summary of high‑quality clinical evidence for BHB applications in diabetes management."
                                />
                                <AgendaSubSession
                                    title="Session 3c — Mechanism of Action and Clinical Practice"
                                    speaker="Prof. Dr. M. Laffan, UK"
                                    focus="Defining BHB mechanism of action and practical clinical applications."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Session 4 */}
                    <div className="agenda-item">
                        <div className="agenda-session">
                            <h3 className="text-primary-800 mb-4">Session 4: Future Science — Brain Function &amp; Emerging Topics</h3>
                            <p className="text-text-muted text-sm mb-4">
                                Short presentations from (suggested):
                            </p>
                            <ul className="text-text-muted text-sm space-y-1 mb-4 list-disc list-inside">
                                <li>Kentaro Nishioka (Suntory Global Innovation Center Ltd.)</li>
                                <li>Dominic D&rsquo;Agostino (University of South Florida)</li>
                                <li>John Newman (Buck Institute / UCSF)</li>
                                <li>Stephen Cunnane (University of Sherbrooke)</li>
                                <li>Vishwa Deep Dixit (Yale School of Medicine)</li>
                            </ul>
                            <div className="mt-4">
                                <AgendaSubSession
                                    title='Session 4.2 — "Beyond ATP: BHB as a Signalling Molecule"'
                                    speaker="Invited speaker (to be confirmed)"
                                    focus="Emerging understanding of BHB signalling pathways beyond energy metabolism."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AgendaSubSession({ title, speaker, focus }) {
    return (
        <div className="bg-surface-alt rounded-lg p-4 border border-border">
            <h4 className="text-primary-700 mb-1">{title}</h4>
            <p className="text-sm text-text-muted mb-1">
                <strong>Speaker:</strong> {speaker}
            </p>
            <p className="text-sm text-text-muted">
                <strong>Focus:</strong> {focus}
            </p>
        </div>
    );
}

/* ─── Speakers Section ─── */
const speakers = [
    { name: 'R. Littlewood', role: 'MA MBA MD — Europe Chair', description: 'Medical doctor and inventor of Klario; clinical and regulatory vision leader.' },
    { name: 'H. Myers', role: 'CEO, Flow Health Science', description: 'Expert in global regulatory landscape for BHB products.' },
    { name: 'Gary M', role: 'Invited Keynote [TBC]', description: 'Keynote speaker on the past, present, and future of BHB.' },
    { name: 'D. D\u2019Agostino', role: 'University of South Florida [TBC]', description: 'Leading researcher in ketone metabolism and BHB applications.' },
    { name: 'Dr. E. Gross', role: 'CH (suggested)', description: 'Specialist in BHB\u2019s role in treatment of migraine.' },
    { name: 'Prof. Russell Jones', role: 'UK', description: 'Clinical evidence for BHB applications in diabetes management.' },
    { name: 'Prof. Dr. M. Laffan', role: 'UK', description: 'BHB mechanism of action and practical clinical applications.' },
    { name: 'Kentaro Nishioka', role: 'Suntory Global Innovation Center Ltd.', description: 'Future science and brain function research.' },
    { name: 'John Newman', role: 'Buck Institute / UCSF', description: 'Emerging topics in BHB and aging science.' },
    { name: 'Stephen Cunnane', role: 'University of Sherbrooke', description: 'Brain energy metabolism and ketone research.' },
    { name: 'Vishwa Deep Dixit', role: 'Yale School of Medicine', description: 'BHB signalling pathways and immunometabolism.' },
    { name: 'Japan Chair', role: '[TBC]', description: 'Meeting co-chair, Japan.' },
    { name: 'USA Online Chair', role: '[TBC]', description: 'Meeting co-chair, USA (online).' },
];

function SpeakersSection() {
    return (
        <section id="speakers" className="section section-alt">
            <div className="container-narrow">
                <h2 className="text-primary-800 mb-4 text-center">Speakers &amp; Chairs</h2>
                <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
                    Leading experts from across the globe in clinical nutrition, metabolic science, and regulatory affairs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="speaker-card">
                            <div className="w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-primary font-bold text-xl">
                                    {speaker.name.charAt(0)}
                                </span>
                            </div>
                            <h3 className="text-primary-800 text-base mb-1">{speaker.name}</h3>
                            <p className="text-primary-700 text-sm font-medium mb-2">{speaker.role}</p>
                            <p className="text-text-muted text-sm">{speaker.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Contact Section ─── */
function ContactSection() {
    return (
        <section id="contact" className="section">
            <div className="container-narrow max-w-2xl text-center">
                <h2 className="text-primary-800 mb-6">Participation &amp; Contact</h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                    This meeting is by invitation for leading experts and organizations. Limited places are available
                    for both online and in‑person participation.
                </p>
                <div className="card max-w-md mx-auto">
                    <p className="text-text-muted mb-6">
                        Interested in attending or partnering with SIAN? Get in touch.
                    </p>
                    <a
                        href="mailto:info@sian-nutrition.org"
                        className="btn btn-primary w-full no-underline"
                    >
                        Email Us to Request Participation
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ─── Icons ─── */
function CalendarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );
}
