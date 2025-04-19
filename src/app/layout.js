import localFont from "next/font/local";
import "./globals.css";


const inter = localFont({src: './fonts/Inter.ttf', variable: '--font-inter'});
const montserrat = localFont({src: './fonts/Montserrat.ttf', variable: '--font-montserrat'});

export const metadata = {
  title: "TSK",
  description: "TSK temp description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
