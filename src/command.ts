import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { PingCommand } from "./commands/ping";

// Définition d'une commande
export type BotCommand = {
  builder: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>
}

// liste des commandes dispo
export const commands: BotCommand[] = [
  PingCommand,
];

// execute la commande si elle existe
export const handleCommand = async (interaction: ChatInputCommandInteraction) => {
  for (const command of commands) {
    if (command.builder.name !== interaction.commandName) continue;
    await command.execute(interaction);
  }
}

// ?
export const getParameterName = (command: BotCommand, index: number) => {
  return command.builder.options.at(index)?.toJSON().name ?? "";
}