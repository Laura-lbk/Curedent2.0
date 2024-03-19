import { AllowedPartial, MessageReaction, Partialize, PartialMessageReaction, PartialUser, User } from "discord.js";

export async function handleReactionPartials(reaction:PartialMessageReaction | MessageReaction) {
    // When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return null;
		}
	}
    return reaction as MessageReaction;
}

export async function handleUserPartials(user:PartialUser | User) {
    // When a reaction is received, check if the structure is partial
	if (user.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await user.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return null;
		}
	}
    return user as User;
}