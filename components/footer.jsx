export function Footer() {
    return (
        <footer className="bg-[#28371c] py-14 sm:py-20 border-t border-[#28371c]">
            <div className="section-container">
                <div className="grid gap-8 sm:grid-cols-3">
                    <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#fa4f28]">SIAN</h3>
                        <p className="text-sm text-white/60">
                            Scientific Institute for Advanced Nutrition. Advancing evidence-based metabolic nutrition through rigorous science, independent research, and clinical translation.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#fa4f28]">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about-sian" className="no-underline text-white/60 hover:text-[#cbfcff] transition-colors">About SIAN</a></li>
                            <li><a href="#about-meeting" className="no-underline text-white/60 hover:text-[#cbfcff] transition-colors">About the Meeting</a></li>
                            <li><a href="#programme" className="no-underline text-white/60 hover:text-[#cbfcff] transition-colors">Scientific Programme</a></li>
                            <li><a href="#faculty" className="no-underline text-white/60 hover:text-[#cbfcff] transition-colors">Faculty</a></li>
                            <li><a href="#registration" className="no-underline text-white/60 hover:text-[#cbfcff] transition-colors">Register Interest</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#fa4f28]">Policies & Disclosures</h3>
                        <ul className="space-y-2 text-sm text-white/40">
                            <li>Privacy Policy (coming soon)</li>
                            <li>Conflict of Interest Policy (coming soon)</li>
                            <li>Faculty Disclosures (coming soon)</li>
                            <li>Terms of Use (coming soon)</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-white/40">
                        &copy; {new Date().getFullYear()} Scientific Institute for Advanced Nutrition (SIAN). All rights reserved.
                    </p>
                    <p className="text-xs text-white/30 mt-2">
                        BHB Special Focus Meeting &middot; 8 June 2026 &middot; Spain (Hybrid)
                    </p>
                </div>
            </div>
        </footer>
    );
}
