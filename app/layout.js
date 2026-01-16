import './globals.css';

export const metadata = {
  title: 'Agroveli',
  description: 'Agroveli',
};

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={roboto.variable}>{children}</body>
    </html>
  );
}
