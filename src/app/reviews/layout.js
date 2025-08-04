import localFont from "next/font/local";
import "../globals.css";


const inter = localFont({src: '../fonts/Inter.ttf', variable: '--font-inter'});
const montserrat = localFont({src: '../fonts/Montserrat.ttf', variable: '--font-montserrat'});

export const metadata = {
    title: "тСк — Интегрированные системы безопасности и автоматизации",
    description: "Компания тСк — надёжный интегратор систем безопасности: видеонаблюдение, пожаротушение, контроль доступа и ИИ-решения. Более 1000 проектов по всей России.",
    keywords: "системы безопасности, охранная сигнализация, видеонаблюдение, контроль доступа, проектирование, пожаротушение, автоматизация, тСк",
    "og:title": "тСк — Партнёрство лучших в системах безопасности",
    "og:description": "Комплексные решения по обеспечению безопасности и автоматизации: проектирование, монтаж, обслуживание.",
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
