import { Guild, GuildMember, User } from "discord.js";

export async function getMemberFromUser(user:User, guild: Guild): Promise<GuildMember | null> {
    let member: GuildMember | null = null;
    try{
        member = await guild.members.fetch(user.id);
    }
    catch{
        return null;
    }
    return member;
}