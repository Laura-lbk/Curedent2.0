import {Client, TextChannel} from "discord.js";

export function SendVideoNotificationMessage(latestVideo: any, readyClient: Client){
    

    const channel = readyClient.channels.cache.get("1221094650425774172");

    if (channel instanceof TextChannel) {
        channel.send({
          content:
            "## <:Youtube:1221384995612921866> Unicornis à publié une nouvelle vidéo",
        });
        channel.send({
          content:
            "<@&" +
            1221385507389309000 +
            "> https://www.youtube.com/watch?v=QmOEmT7tyno ",
        });
    }else{
        console.log ("Le canal n'est pas un TextChannel.");
    }
}