export function Footer() {
    return (
        <footer className="bg-primary-900 text-white py-12">
            <div className="container-narrow text-center">
                <img
                    src="/images/sian-logo.png"
                    alt="SIAN Logo"
                    className="w-16 h-16 rounded-full bg-white/90 mx-auto mb-4"
                />
                <p className="font-bold text-lg mb-2">Scientific Institute for Advanced Nutrition</p>
                <p className="text-primary-200 text-sm mb-6">
                    Advancing evidence-based metabolic and nutrition science worldwide.
                </p>
                <div className="border-t border-primary-800 pt-6">
                    <p className="text-primary-200 text-xs">
                        &copy; 2026 Scientific Institute for Advanced Nutrition (SIAN). All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
