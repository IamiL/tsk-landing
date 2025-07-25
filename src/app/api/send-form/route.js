// Константы для Telegram бота
const TELEGRAM_BOT_TOKEN = '7522766003:AAH0ULTi1GsY12mXr8Qm3wc9n4DJd7TYf5s'; // Замените на токен вашего бота
const TELEGRAM_CHAT_ID = '-4868703702'; // Замените на ID чата

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }

    try {
        const formData = req.body;

        // Форматируем данные для отправки в Telegram
        const message = formatFormDataForTelegram(formData);

        // Отправляем сообщение в Telegram
        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            }),
        });

        if (!telegramResponse.ok) {
            throw new Error('Failed to send message to Telegram');
        }

        res.status(200).json({message: 'Form submitted successfully'});
    } catch (error) {
        console.error('Error sending form:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

function formatFormDataForTelegram(data) {
    const {
        checkboxes,
        objectAddress,
        requestDeadline,
        position,
        fullName,
        phone,
        email,
        city,
        organization,
        message
    } = data;

    let telegramMessage = '<b>🔥 Новая заявка с сайта</b>\n\n';

    // Характеристика объекта
    telegramMessage += '<b>📋 ХАРАКТЕРИСТИКА ОБЪЕКТА</b>\n';

    if (checkboxes['1']) {
        const purposes = [];
        if (checkboxes['1'].option1) purposes.push('завод');
        if (checkboxes['1'].option2) purposes.push('административное здание');
        if (checkboxes['1'].option3) purposes.push('специальный объект');
        if (checkboxes['1'].option4) purposes.push('прочее');
        if (purposes.length > 0) {
            telegramMessage += `Функциональное назначение: ${purposes.join(', ')}\n`;
        }
    }

    if (objectAddress) {
        telegramMessage += `Адрес объекта: ${objectAddress}\n`;
    }

    if (checkboxes['2']) {
        const ownership = [];
        if (checkboxes['2'].option1) ownership.push('в собственности');
        if (checkboxes['2'].option2) ownership.push('в аренде');
        if (ownership.length > 0) {
            telegramMessage += `Объект находится: ${ownership.join(', ')}\n`;
        }
    }

    if (checkboxes['3']) {
        const objectType = [];
        if (checkboxes['3'].option1) objectType.push('относится к группе компаний');
        if (checkboxes['3'].option2) objectType.push('является самостоятельным');
        if (objectType.length > 0) {
            telegramMessage += `Объект: ${objectType.join(', ')}\n`;
        }
    }

    // Потребность заказчика
    telegramMessage += '\n<b>🎯 ПОТРЕБНОСТЬ ЗАКАЗЧИКА</b>\n';

    if (checkboxes['4']) {
        const requests = [];
        if (checkboxes['4'].option1) requests.push('система автоматической пожарной сигнализации и оповещения о пожаре');
        if (checkboxes['4'].option2) requests.push('система контроля и управления доступом');
        if (checkboxes['4'].option3) requests.push('система охраны периметра');
        if (checkboxes['4'].option4) requests.push('система охранной сигнализации');
        if (checkboxes['4'].option5) requests.push('прочее');
        if (requests.length > 0) {
            telegramMessage += `Наименование запроса: ${requests.join(', ')}\n`;
        }
    }

    if (checkboxes['5']) {
        const basis = [];
        if (checkboxes['5'].option1) basis.push('предписание надзорных органов');
        if (checkboxes['5'].option2) basis.push('строительство нового объекта');
        if (checkboxes['5'].option3) basis.push('модернизация существующей системы');
        if (checkboxes['5'].option4) basis.push('прочее');
        if (basis.length > 0) {
            telegramMessage += `Основание для запроса: ${basis.join(', ')}\n`;
        }
    }

    // Ответ на запрос
    telegramMessage += '\n<b>📊 ОТВЕТ НА ЗАПРОС</b>\n';

    if (checkboxes['6']) {
        const expectedResult = [];
        if (checkboxes['6'].option1) expectedResult.push('ориентировочная стоимость для формирования бюджета');
        if (checkboxes['6'].option2) expectedResult.push('коммерческое предложение без детализации');
        if (checkboxes['6'].option3) expectedResult.push('подробный расчет с составлением спецификации');
        if (checkboxes['6'].option4) expectedResult.push('прочее');
        if (expectedResult.length > 0) {
            telegramMessage += `Ожидаемый результат: ${expectedResult.join(', ')}\n`;
        }
    }

    if (requestDeadline) {
        telegramMessage += `Срок получения результата: ${requestDeadline}\n`;
    }

    // Контактная информация
    telegramMessage += '\n<b>👤 КОНТАКТНАЯ ИНФОРМАЦИЯ</b>\n';

    if (checkboxes['7']) {
        const source = [];
        if (checkboxes['7'].option1) source.push('интернет');
        if (checkboxes['7'].option2) source.push('рекомендации');
        if (checkboxes['7'].option3) source.push('прочее');
        if (source.length > 0) {
            telegramMessage += `Откуда узнали о компании: ${source.join(', ')}\n`;
        }
    }

    if (position) telegramMessage += `Должность: ${position}\n`;
    if (fullName) telegramMessage += `ФИО: ${fullName}\n`;
    if (phone) telegramMessage += `Телефон: ${phone}\n`;
    if (email) telegramMessage += `E-mail: ${email}\n`;
    if (city) telegramMessage += `Город: ${city}\n`;
    if (organization) telegramMessage += `Организация: ${organization}\n`;
    if (message) telegramMessage += `Сообщение: ${message}\n`;

    return telegramMessage;
}

// Если используете App Router (app/api/send-form/route.js), используйте этот код:

export async function POST(request) {
    try {
        const formData = await request.json();

        const message = formatFormDataForTelegram(formData);

        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            }),
        });

        if (!telegramResponse.ok) {
            throw new Error('Failed to send message to Telegram');
        }

        return Response.json({message: 'Form submitted successfully'});
    } catch (error) {
        console.error('Error sending form:', error);
        return Response.json({message: 'Internal server error'}, {status: 500});
    }
}
