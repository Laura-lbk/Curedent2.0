import { EmbedBuilder, TextChannel } from "discord.js";
import { BotCommand } from "./../command";
const { SlashCommandBuilder } = require("discord.js");

export const EmbedCommand: BotCommand = {
  builder: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Send an embed"),
  execute: async (interaction) => {
    const client = interaction.client;

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Unicornis a sorti une nouvelle vidéo",
        url: "https://www.youtube.com/channel/UCp0Thsvsbw4tiH8-yicoUyg",
        iconURL: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png",
      })
      .setTitle("TITRE DE LA VIDÉO")
      .setURL("https://www.youtube.com/watch?v=QmOEmT7tyno");

    const channel = client.channels.cache.get("1221094650425774172");
    if (channel instanceof TextChannel) {
      try {
        await channel.send({ content: "Message", embeds: [embed] });
        await interaction.reply('Notification envoyé avec succès !');
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'envoi du message :",
          error
        );
      }
    } else {
      console.error("Le canal n'est pas un TextChannel.");
    }
  },
};
