// Importing environment variable before starting the app
// DO NOT REMOVE
// DO NOT USE ENV VARIABLE BEFORE THOSE TWO LINES
import path from "path";
require('dotenv').config({ path: path.resolve(".env") })

import { commands } from '../command';
import { REST, Routes } from 'discord.js';
import { Env } from "./environment";

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(Env.DISCORD_TOKEN);

// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(Env.CLIENT_ID, Env.GUILD_ID),
            { body: commands.map(command => (command.builder.toJSON())) },
        );

        console.log(`Successfully reloaded ${(data as any)?.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();