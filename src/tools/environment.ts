import { z } from "zod";

const AppEnvironment = z.object({
    NODE_ENV: z.union([z.literal("development"), z.literal("production")]),
    DEBUG: z
      .string()
      .optional()
      .transform((debug) => {
        return debug === "true";
      }),
  });

const DiscordEnvironment = z.object({
    DISCORD_TOKEN: z.string(),
    CLIENT_ID: z.string(),
    GUILD_ID: z.string(),
  });

const Environment =
    AppEnvironment.and(DiscordEnvironment);

type Environment = z.infer<typeof Environment>;

function getEnv() {
  const { env } = process;

  try {
    return Environment.parse(env);
  } catch (e) {
    throw `Environement do not match model`;
  }
}

export const Env = getEnv();
