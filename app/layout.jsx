import '../styles/globals.css';

export const metadata = {
    title: 'Scientific Institute for Advanced Nutrition (SIAN)',
    description:
        'SIAN is an independent scientific body focused on applied metabolic and nutrition science. Join our Special Focus Meeting on BHB in Applied Metabolic Nutrition, June 8, 2026.',
    keywords: 'SIAN, BHB, beta-hydroxybutyrate, metabolic nutrition, clinical nutrition, scientific institute',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
