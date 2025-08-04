import localFont from "next/font/local";
import "../globals.css";


const inter = localFont({src: '../fonts/Inter.ttf', variable: '--font-inter'});
const montserrat = localFont({src: '../fonts/Montserrat.ttf', variable: '--font-montserrat'});

export const metadata = {
    title: "Услуги тСк — Комплексные системы безопасности и ИТ",
    description: "Проектирование и внедрение видеонаблюдения, КИТСОЗ, пожарной сигнализации, ИИ-решений, кабельных сетей. Гарантия, обучение, поддержка.",
    keywords: "услуги, системы безопасности, проектирование, видеонаблюдение, КИТСОЗ, ИИ, контроль доступа, пожаротушение, СКУД",
    "og:title": "Инженерные и IT-услуги от тСк",
    "og:description": "Комплексная реализация систем охраны и автоматизации для бизнеса. От проектирования до поддержки.",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <body className={`${montserrat.variable} ${inter.variable}`}>
        {children}
        </body>
        </html>
    );
}
