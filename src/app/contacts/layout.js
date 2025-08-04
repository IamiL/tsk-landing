import localFont from "next/font/local";
import "../globals.css";


const inter = localFont({src: '../fonts/Inter.ttf', variable: '--font-inter'});
const montserrat = localFont({src: '../fonts/Montserrat.ttf', variable: '--font-montserrat'});

export const metadata = {
    title: "Контакты тСк | Связаться с нами",
    description: "Контактные данные, адреса и реквизиты компании. Звоните или пишите — обсудим ваш проект.",
    keywords: "контакты, реквизиты, адрес, телефон, e-mail, компания, связь",
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
