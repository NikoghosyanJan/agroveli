"use client"
import './globals.css';
import 'react-phone-number-input/style.css'
import 'swiper/css';
import "swiper/css/pagination";



// export const metadata = {
//   title: 'Agroveli',
//   description: 'Agroveli',
// };

import { Roboto } from 'next/font/google';
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={roboto.variable}>
    <Provider store={store}>
      {children}
    </Provider>
    </body>
    </html>
  );
}
