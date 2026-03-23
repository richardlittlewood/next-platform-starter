import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

const siteName = 'Scientific Institute for Advanced Nutrition';
const siteDescription = 'Scientific Institute for Advanced Nutrition information';
const siteUrl = process.env.URL || 'https://scientificinstituteadvancednutrition.netlify.app';

/*
 * OG Share Image Setup
 * --------------------
 * To add a visual preview when links are shared on social media:
 *
 * 1. Place a 1200x630px PNG image at: public/og-image.png
 * 2. Use Netlify Image CDN to serve it at exact dimensions by adding
 *    the following to the openGraph and twitter sections below:
 *
 *    openGraph: {
 *      ...
 *      images: [
 *        {
 *          url: '/.netlify/images?url=/og-image.png&w=1200&h=630&fit=cover&fm=png',
 *          width: 1200,
 *          height: 630,
 *          alt: siteName,
 *        },
 *      ],
 *    },
 *    twitter: {
 *      ...
 *      card: 'summary_large_image',  // Change from 'summary' to 'summary_large_image'
 *      images: ['/.netlify/images?url=/og-image.png&w=1200&h=630&fit=cover&fm=png'],
 *    },
 */

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        template: '%s | SIAN',
        default: 'SIAN BHB Meeting 2026 – Special Focus Meeting'
    },
    description:
        'Special Focus Meeting: Beta-hydroxybutyrate (BHB) in Applied Metabolic Nutrition. 9 June 2026, Spain (Hybrid Online). Organised by the Scientific Institute for Advanced Nutrition.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-[#1F2933] bg-[#F5F7FA]">
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
