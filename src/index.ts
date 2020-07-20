import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from './config';

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()