import localFont from "next/font/local";
import "../globals.css";


const inter = localFont({src: '../fonts/Inter.ttf', variable: '--font-inter'});
const montserrat = localFont({src: '../fonts/Montserrat.ttf', variable: '--font-montserrat'});

export const metadata = {
    title: "О компании тСк — 18 лет надёжных решений в безопасности",
    description: "Компания тСк с 2006 года разрабатывает и внедряет современные системы безопасности: от КИТСОЗ до ИИ-аналитики. Десятки регионов, тысячи проектов.",
    keywords: "о компании тск, история, инженерные системы, слаботочные системы, партнёры, миссия, автоматизация, безопасность",
    "og:title": "О компании тСк — 18 лет опыта в системах безопасности",
    "og:description": "История, ценности, направления и достижения компании тСк — ведущего интегратора инженерных решений.",
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
