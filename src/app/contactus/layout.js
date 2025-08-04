import localFont from "next/font/local";
import "../globals.css";


const inter = localFont({src: '../fonts/Inter.ttf', variable: '--font-inter'});
const montserrat = localFont({src: '../fonts/Montserrat.ttf', variable: '--font-montserrat'});

export const metadata = {
    title: "Оставить заявку тСк | Обсудить проект системы безопасности",
    description: "Оставьте заявку на расчёт стоимости проекта. Заполните форму — мы подготовим предложение с учётом особенностей объекта.",
    keywords: "обсудить проект, форма заявки, расчёт стоимости, коммерческое предложение, интеграция систем",
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
