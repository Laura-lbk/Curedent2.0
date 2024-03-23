import { EmbedBuilder} from "discord.js";

export function SendVideoNotificationEmbed(latestVideo: any){
    

    const VideoNotificationEmbed = new EmbedBuilder()
      .setAuthor({
        name: "Unicornis a sorti une nouvelle vidéo",
        url: "https://www.youtube.com/channel/UCp0Thsvsbw4tiH8-yicoUyg",
        iconURL: "https://cdn-icons-png.flaticon.com/256/1384/1384060.png",
      })
      .setTitle(latestVideo["items"][0].snippet.title)
      .setURL("https://www.youtube.com/watch?v=" + latestVideo["items"][0].id.videoId);

}