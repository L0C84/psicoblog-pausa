import type { Metadata } from 'next';
import { DM_Sans, Lora } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans-site', subsets: ['latin'] });
const serif = Lora({ variable: '--font-serif-site', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pausa — Psicología para la vida real',
  description: 'Un espacio cercano con información y herramientas de psicología para entenderte y cuidarte mejor.',
  openGraph: { title: 'Pausa — Psicología para la vida real', description: 'Información y herramientas cercanas para entenderte y cuidarte mejor.', images: [{ url: '/og.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Pausa — Psicología para la vida real', description: 'Información y herramientas cercanas para entenderte y cuidarte mejor.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
