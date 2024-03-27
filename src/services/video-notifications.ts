import { SendVideoNotificationEmbed } from "~/embeds/video-notification-embed";
import { FindLatestVideo } from "../api/find-latest-video";
import { SendVideoNotificationMessage } from "../messages/video-notification-message";
import { Client } from "discord.js";

export async function VideoNotifications(readyClient: Client) {
  let latestID: string;

  // Toutes les 5 minutes on vérifie la dernière vidéo
  setInterval(() => {}, 300000);

  // le temps de mettre l'algo au point je l'ai sorti de la boucle
  FindLatestVideo().then((latestVideo: any) => {
    //on vérifie qu'il y'a bien une vidéo récupérée dans la requête
    if (latestVideo !== null && latestVideo !==undefined) {
      let currentID: string = latestVideo["items"][0].id.videoId;
      if (currentID !== latestID){
        latestID = currentID;
        console.log("nouvelle vidéo en ligne");
        // envoyer nouvelle notification de vidéo
        SendVideoNotificationMessage(latestVideo, readyClient)
      }
    }
  });
}
