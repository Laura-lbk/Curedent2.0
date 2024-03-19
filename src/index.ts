import { Client, Events, GatewayIntentBits, Partials } from "discord.js";
import { Env } from "./tools/environment";
import { handleCommand } from "./command";

// Chargement de l'environnement
console.log(`Starting app with [${Env.NODE_ENV}] mode`);

(async () => {
    //permet de souscrire aux services de discord
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
      ],
      partials: [
        Partials.Message,
        Partials.Reaction,
        Partials.Channel,
        Partials.User,
      ],
    });
  
    client.on(Events.MessageCreate, async (message) => {
      if (message.content === "désolé du ping") {
        //envoie avec ping
        message.reply("pas de souci");
      }
    });
  
    // Gestion des commandes slash
    client.on(Events.InteractionCreate, async (interaction) => {
      if (!interaction.isChatInputCommand()) return;
  
      try {
        await handleCommand(interaction);
      } catch (error) {
        if (Env.DEBUG) {
          console.error(error);
        }
  
        await interaction.reply({
          content: "J'ai rencontré une erreure, désolé :(",
          ephemeral: true,
        });
      }
    });
  
    await client.login(Env.DISCORD_TOKEN);
    console.log("Bot connected");
  })();
  