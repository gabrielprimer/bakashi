// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core'; 
config.autoAddCss = false; 

import type { Metadata } from "next"; 
import Header from "./components/layout/Header"; 
import Footer from './components/layout/Footer';
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Bakashi Tv - Assista Animes Online em FULL HD, HD E SD",
  description: "create by primerdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body>
          <Header /> 
          {children}
          <Footer/>
      </body>
    </html>
  );
}
