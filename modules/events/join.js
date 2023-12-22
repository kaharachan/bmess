module.exports.config = {
    name: "join",
    eventType: ['log:subscribe'],
    version: "1.0.0",
    credits: "Mirai-Team",//md thêm by tpk
    description: "GROUP UPDATE NOTIFICATION"
};
module.exports.run = async function({ api, event, Users }) {
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require('fs-extra')
   var fullYear = global.client.getTime("fullYear");
    var getHours = await global.client.getTime("hours");
      var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "𝐁𝐎𝐓 𝐓𝐩𝐤𓃲" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`► 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 ◄\n━━━━━━━━━━━━━━━━━\n➣ 𝐃𝐚̂́𝐮 𝐥𝐞̣̂𝐧𝐡 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐥𝐚̀ : ${global.config.PREFIX}\n𝐓𝐞̂𝐧 𝐁𝐨𝐭 : ${global.config.BOTNAME}\n➣ 𝐁𝐨𝐭 đ𝐮̛𝐨̛̣𝐜 đ𝐢𝐞̂̀𝐮 𝐡𝐚̀𝐧𝐡 𝐛𝐨̛̉𝐢 Linh\n➣ 𝐂𝐡𝐮́𝐜 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉ \n━━━━━━━━━━━━━━━━━`, attachment: fs.createReadStream(__dirname + "/cache/joinGif/toandz.mp4")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `hi.mp4`);
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      const axios = require('axios')
     // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for(o = 0; o < event.logMessageData.addedParticipants.length; o++){
        let path = __dirname + `/cache/${o}.mp4`;
        id.push(event.logMessageData.addedParticipants[o].userFbId)
        var baseUrl = `https://anime.mhieu14012008.repl.co/rdfile?type=mp4 id=${event.logMessageData.addedParticipants[o].userFbId}&name=${event.logMessageData.addedParticipants[o].fullName}&boxname=${threadName}&memberst=${participantIDs.length - o}`
        var resDL = (await axios.get( encodeURI(baseUrl),
             {responseType: "arraybuffer"}
          )).data
        fs.writeFileSync(path, Buffer.from(resDL, 'utf-8'));
        abx.push(fs.createReadStream(__dirname + `/cache/${o}.jpg`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "𝐂𝐡𝐚̀𝐨 𝐌𝐮̛̀𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐌𝐨̛́𝐢\n━━━━━━━━━━━━\n→ •[🎊]𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 {name} 𝐭𝐨̛́𝐢 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 {threadName}\n→ [🌐] 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :\nhttps://www.facebook.com/{iduser}\n→ {type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́ {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n→ [🌹]𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗯𝗼̛̉𝗶: {author}\n━━━━━━━━━━━━\n→ [⏰]𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: {time}" : msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
       var nameAuthor = typeof getData.name == "undefined" ? "link join" : getData.name
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'Bạn' : 'BẠn')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{author}/g, nameAuthor)
        .replace(/\{threadName}/g, threadName)
         .replace(/\{buoi}/g, session)
         .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{time}/g, time);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: abx, mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: abx, mentions }
      }
      else formPush = { body: msg, mentions }
for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.mp4`)
    }
     return api.sendMessage({body: msg,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://phai-lo.sensiquan.repl.co/image/animevd')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID); 
    } catch (e) { return console.log(e) };
  }
  }