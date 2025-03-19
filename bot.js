require('dotenv').config();
const { log } = require('console');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const photoPath = path.join(__dirname, 'banner.jpg');

    const text = `Simple Swap — это децентрализованное приложение, предлагающее обмен жетонов в паре с TON на основной платформе DeDust. Оно предлагает пользователям небольшое преимущество в виде сниженных комиссий, что делает процесс обмена более выгодным.`;
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Simple Swap', url: 'https://t.me/SwapSCBot/Swap' },
                ],
                [
                    { text: 'Simple Coin Channel', url: 'https://t.me/just_a_simple_coin' },
                ]
            ]
        }
    };

    bot.sendPhoto(chatId, photoPath, { caption: text, ...options });
});