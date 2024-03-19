import { BotCommand } from './../command';
const { SlashCommandBuilder } = require('discord.js');

export const PingCommand: BotCommand = {
    builder: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    execute: async (interaction) => {
        console.log('pong');
        await interaction.reply('Pong!');
    }
}