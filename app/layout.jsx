import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | SIAN',
        default: 'SIAN BHB Meeting 2026 – Special Focus Meeting'
    },
    description:
        'Special Focus Meeting: Beta-hydroxybutyrate (BHB) in Applied Metabolic Nutrition. 8 June 2026, Spain (Hybrid Online). Organised by the Scientific Institute for Advanced Nutrition.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-[#28371c] bg-[#f9f9f1]">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
