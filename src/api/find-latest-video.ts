import { Env } from "../tools/environment";

export function FindLatestVideo() {
  const axios = require("axios");
  return new Promise((resolve) =>{
    axios
    .get(
      "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=date&maxResults=1&channelId=" +
        Env.CHANNEL_ID +
        "&key=" +
        Env.YT_API_KEY
    )
    .then((result: any) => {
      //console.log(result.data);
      resolve(result.data);
    })
    .catch((error : any) => {
      console.log(error);
    }); 
  })
}
