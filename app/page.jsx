import { RegistrationForm } from '../components/registration-form';

export default function Page() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#28371c] py-20 sm:py-32">
                <div className="section-container relative z-10">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight text-white">
                                Special Focus Meeting: Beta-hydroxybutyrate (BHB) in Applied Metabolic Nutrition
                            </h1>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/15">
                                    <svg className="w-4 h-4 text-[#cbfcff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                                    8 June 2026
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/15">
                                    <svg className="w-4 h-4 text-[#cbfcff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    Afternoon session from 15:00 CEST
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/15">
                                    <svg className="w-4 h-4 text-[#cbfcff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
                                    Spain (On-site) &middot; Hybrid Online
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="#programme" className="btn btn-lg">View Scientific Programme</a>
                                <a href="#registration" className="btn btn-lg btn-white">Register Interest</a>
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <img
                                src="/images/bhb-cell.png"
                                alt="Cell with BHB metabolic pathway"
                                width="420"
                                height="280"
                                className="opacity-80"
                                style={{ mixBlendMode: 'screen', filter: 'brightness(1.1) contrast(1.05)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About SIAN */}
            <section id="about-sian" className="py-20 sm:py-28 bg-[#f9f9f1]">
                <div className="section-container">
                    <h2 className="text-3xl font-bold mb-4 text-center sm:text-4xl text-[#28371c]">About SIAN</h2>
                    <p className="text-center text-[#4a5a3c] max-w-3xl mx-auto mb-12 text-lg">
                        The Scientific Institute for Advanced Nutrition is an independent body committed to advancing evidence-based metabolic nutrition through rigorous science and clinical translation.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <PillarCard icon="evidence" title="Evidence">
                            Generating and evaluating high-quality clinical evidence for metabolic nutrition interventions.
                        </PillarCard>
                        <PillarCard icon="quality" title="Quality">
                            Upholding rigorous scientific and manufacturing standards across research and product development.
                        </PillarCard>
                        <PillarCard icon="clinical" title="Clinical Impact">
                            Translating bench science into actionable clinical guidance for healthcare professionals.
                        </PillarCard>
                        <PillarCard icon="transparency" title="Transparency">
                            Maintaining full disclosure of conflicts, funding sources, and scientific methodology.
                        </PillarCard>
                    </div>
                </div>
            </section>

            {/* About the Meeting */}
            <section id="about-meeting" className="py-20 sm:py-28 bg-[#f0f0e4]">
                <div className="section-container">
                    <h2 className="text-3xl font-bold mb-12 text-center sm:text-4xl text-[#28371c]">About the Meeting</h2>
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="rounded-lg bg-white/60 p-8 border border-[#28371c]/10">
                            <h3 className="text-xl font-bold mb-4 text-[#28371c]">Scientific Rationale</h3>
                            <p className="text-[#4a5a3c] leading-relaxed">
                                Beta-hydroxybutyrate (BHB) has emerged as a molecule of significant clinical interest beyond its role as an energy substrate. This meeting convenes leading investigators to evaluate the current evidence base, identify knowledge gaps, and set priorities for rigorous clinical research in metabolic nutrition.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white/60 p-8 border border-[#28371c]/10">
                            <h3 className="text-xl font-bold mb-4 text-[#28371c]">Intended Audience</h3>
                            <ul className="space-y-2 text-[#4a5a3c]">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Clinicians and metabolic medicine specialists
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Nutrition scientists and researchers
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Regulatory affairs professionals
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Industry leaders in metabolic health
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Academic investigators in ketone biology
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg bg-white/60 p-8 border border-[#28371c]/10">
                            <h3 className="text-xl font-bold mb-4 text-[#28371c]">Key Themes</h3>
                            <ul className="space-y-2 text-[#4a5a3c]">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Standards and worldwide regulation of BHB
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Innovation in supply, production, and natural fermented BHB
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Clinical applications in migraine, diabetes, and mechanism of action
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">&bull;</span>
                                    Future science: brain function, ageing, and BHB signalling
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programme at a Glance */}
            <section id="programme" className="py-20 sm:py-28 bg-[#f9f9f1]">
                <div className="section-container">
                    <h2 className="text-3xl font-bold mb-12 text-center sm:text-4xl text-[#28371c]">Programme at a Glance</h2>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <ProgrammeItem badge="Keynote" badgeClass="badge-keynote" title="Past, Present and Future: The BHB Journey">
                            Opening keynote tracing the historical development of BHB research to current clinical applications and future directions.
                        </ProgrammeItem>
                        <ProgrammeItem badge="Regulatory" badgeClass="badge-regulatory" title="Session 1: Standards & Worldwide Regulation">
                            Clinical applications, regulatory vision, and the global regulatory landscape for BHB products.
                        </ProgrammeItem>
                        <ProgrammeItem badge="Industry" badgeClass="badge-industry" title="Session 2: Innovation in BHB Supply & Production">
                            Review of BHB types (salts, esters, fermented forms) and emerging natural fermented BHB technologies.
                        </ProgrammeItem>
                        <ProgrammeItem badge="Keynote" badgeClass="badge-keynote" title="Major Success: BHB in Practice">
                            Real-world translation of BHB from bench to bedside in applied nutrition practice.
                        </ProgrammeItem>
                        <ProgrammeItem badge="Clinical" badgeClass="badge-clinical" title="Session 3: Clinical Applications">
                            Cutting-edge evidence in migraine, diabetes, and mechanisms of action linking biochemical insights to real-world practice.
                        </ProgrammeItem>
                        <ProgrammeItem badge="Future Science" badgeClass="badge-future" title="Session 4: Brain Function, Ageing & BHB Signalling">
                            Frontier research on brain energy metabolism, epigenetic effects, inflammatory modulation, and cellular resilience.
                        </ProgrammeItem>
                    </div>
                </div>
            </section>

            {/* Faculty */}
            <section id="faculty" className="py-20 sm:py-28 bg-[#f0f0e4]">
                <div className="section-container">
                    <h2 className="text-3xl font-bold mb-4 text-center sm:text-4xl text-[#28371c]">Faculty</h2>

                    {/* Faculty Introduction */}
                    <p className="text-center text-[#4a5a3c] max-w-3xl mx-auto mb-12 text-lg">
                        The Scientific Institute for Advanced Nutrition is proud to be guided by a world-class faculty of clinical pioneers, regulatory experts, and breakthrough innovators. Our leadership spans three continents—bringing together deep expertise from Europe, Japan, and the United States to advance thinking and standards for Beta-hydroxybutyrate (BHB) and applied metabolic nutrition.
                    </p>

                    {/* Meeting Chairs */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold mb-6 text-[#fa4f28] uppercase tracking-wider text-center">Meeting Chairs</h3>
                        <div className="grid gap-6 sm:grid-cols-3">
                            <FacultyCard name="Dr. Richard Littlewood" credentials="MA MBA MD" role="Europe Chair" description="Medical Doctor; Inventor of Klario" focus="Clinical applications & regulatory vision for BHB" />
                            <FacultyCard name="Dr. J. Tsubota" role="Japan Chair" description="International metabolic nutrition" />
                            <FacultyCard name="TBC" role="USA Chair" description="To be confirmed" />
                        </div>
                    </div>

                    {/* Session Faculty */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[#fa4f28] uppercase tracking-wider text-center">Session Faculty</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <FacultyCard name="G. Myers" role="CEO, Flow Health Science" description="Global BHB regulatory landscape" />
                            <FacultyCard name="Prof. Dr. David Russell-Jones" role="United Kingdom" description="BHB evidence in diabetes management" />
                            <FacultyCard name="Prof. Dr. M. Laffan" role="United Kingdom" description="BHB mechanism of action" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Venue & Format */}
            <section id="venue" className="py-20 sm:py-28 bg-[#f9f9f1]">
                <div className="section-container">
                    <h2 className="text-3xl font-bold mb-12 text-center sm:text-4xl text-[#28371c]">Venue & Format</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-lg bg-white/60 p-8 backdrop-blur-sm border border-[#28371c]/10">
                            <h3 className="text-xl font-bold mb-6 text-[#fa4f28]">In-Person</h3>
                            <ul className="space-y-4 text-[#4a5a3c]">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
                                    <div><strong className="text-[#28371c]">Location:</strong> Spain (exact venue to be confirmed)</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                                    <div><strong className="text-[#28371c]">Date:</strong> 8 June 2026, afternoon session</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    <div><strong className="text-[#28371c]">Time zone:</strong> CEST (Central European Summer Time, UTC+2)</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
                                    <div><strong className="text-[#28371c]">Start:</strong> 15:00 CEST</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                                    <div><strong className="text-[#28371c]">Access:</strong> By invitation, limited capacity</div>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-lg bg-white/60 p-8 backdrop-blur-sm border border-[#28371c]/10">
                            <h3 className="text-xl font-bold mb-6 text-[#fa4f28]">Online Participation</h3>
                            <ul className="space-y-4 text-[#4a5a3c]">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                                    <div><strong className="text-[#28371c]">Format:</strong> Live-streamed via secure conference platform</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                                    <div><strong className="text-[#28371c]">Interaction:</strong> Full participation including Q&amp;A</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                                    <div><strong className="text-[#28371c]">Time zones:</strong> Optimised for Europe, with accessibility for Japan (evening) and US East Coast (morning)</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <div><strong className="text-[#28371c]">Access:</strong> By registration; connection details provided upon confirmation</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration & Contact */}
            <section id="registration" className="py-20 sm:py-28 bg-[#f0f0e4]">
                <div className="section-container">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-6 sm:text-4xl text-[#28371c]">Register Your Interest</h2>
                        <p className="text-[#4a5a3c] text-lg max-w-2xl mx-auto mb-4">
                            This Special Focus Meeting is by invitation with limited capacity.
                        </p>
                        <p className="text-[#4a5a3c] max-w-2xl mx-auto">
                            Complete the form below to register your interest. You will receive further details including programme updates, venue logistics, and formal invitations as they become available.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <RegistrationForm />
                    </div>
                </div>
            </section>
        </div>
    );
}

function PillarCard({ icon, title, children }) {
    const icons = {
        evidence: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
        quality: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
        clinical: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
        transparency: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    };

    return (
        <div className="rounded-lg bg-white/60 p-6 text-center backdrop-blur-sm border border-[#28371c]/10 hover:border-[#fa4f28]/30 transition-colors">
            <div className="text-accent mb-4 flex justify-center">{icons[icon]}</div>
            <h3 className="text-lg font-bold mb-2 text-[#28371c]">{title}</h3>
            <p className="text-sm text-[#4a5a3c]">{children}</p>
        </div>
    );
}

function ProgrammeItem({ badge, badgeClass, title, children }) {
    return (
        <div className="rounded-lg bg-white/60 p-6 border border-[#28371c]/10 hover:border-[#fa4f28]/30 transition-colors">
            <div className="mb-3">
                <span className={`badge ${badgeClass}`}>{badge}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#28371c]">{title}</h3>
            <p className="text-[#4a5a3c] text-sm">{children}</p>
        </div>
    );
}

function FacultyCard({ name, credentials, role, description, focus }) {
    return (
        <div className="rounded-lg bg-white/60 p-6 border border-[#28371c]/10 hover:border-[#fa4f28]/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#fa4f28]/10 flex items-center justify-center text-[#fa4f28] font-bold text-sm border border-[#fa4f28]/20">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-[#28371c]">
                        {name}
                        {credentials && <span className="text-[#4a5a3c] font-normal text-sm ml-1">({credentials})</span>}
                    </h4>
                    {role && <p className="text-xs text-[#6b7b5c]">{role}</p>}
                </div>
            </div>
            <p className="text-sm text-[#4a5a3c]">{description}</p>
            {focus && <p className="text-xs text-[#fa4f28] mt-2 font-medium">{focus}</p>}
        </div>
    );
}
