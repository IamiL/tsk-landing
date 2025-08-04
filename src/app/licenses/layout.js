import localFont from "next/font/local";
import "../globals.css";


const inter = localFont({src: '../fonts/Inter.ttf', variable: '--font-inter'});
const montserrat = localFont({src: '../fonts/Montserrat.ttf', variable: '--font-montserrat'});

export const metadata = {
    title: "Лицензии и допуски тСк — Надёжность и законность работ",
    description: "Компания 'тСк' имеет все необходимые лицензии и допуски: лицензия МЧС, СРО и ЧелРОП. Работы ведутся в соответствии с законодательством РФ.",
    keywords: "лицензии, допуски, СРО, МЧС, ЧелРОП, разрешения на работы, сертификация, безопасность, проектные работы, монтажные работы",
    "og:title": "Лицензии и допуски компании тСк",
    "og:description": "Документальное подтверждение права на выполнение проектных и монтажных работ в сфере систем безопасности.",
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
