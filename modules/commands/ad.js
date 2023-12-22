module.exports.config = {
	name: "ad",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Võ Nhật Hoàng",
	description: "xem thông tin ad",
	commandCategory: "THÀNH VIÊN",
    cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ad.gif")) request("https://i.imgur.com/h03Z8AY.gif").pipe(fs.createWriteStream(dirMaterial + "ad.gif"));
}
module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;
    
    if (!args[0]) {
     var msg = `==== [ 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠𝗜𝗡 ] ====
━━━━━━━━━━━━━━━━━━\n\n𝟭. Nguyễn Toàn🐣 ( 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗶́𝗻𝗵 ) \n𝟮. chưa có🧸\n𝟯. chưa có 🦨\n𝟰. chưa có 🐢\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        
        return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/ad.gif`)}, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
}
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`𝗫𝗶𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 đ𝗼̛̣𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘅𝘂̛̉ 𝗹𝘆́ !`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "ad nhhoang" :
          case "nhhoang":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ====\n━━━━━━━━━━━━━━━━━━\n\n
🙈 𝐓𝐞̂𝐧: Nguyễn Toàn
💮 𝐁𝐢𝐞̣̂𝐭 𝐃𝐚𝐧𝐡: Toàn chill 
🛸 𝐓𝐮𝐨̂̉𝐢: 𝟏𝟕 𝐓𝐮𝐨̂̉𝐢
👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝐍𝐚𝐦
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠:  𝟏𝐦𝟕3 𝐱 60𝐊𝐠
💘 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: 𝐇𝐞̣𝐧 𝐇𝐨̀
🌎 𝐐𝐮𝐞̂ 𝐐𝐮𝐚́𝐧:Thái Bình 
👫 𝐆𝐮: dễ thương
🌸 𝐓𝐢́𝐧𝐡 𝐂𝐚́𝐜𝐡: 𝐍𝐡𝐚̂𝐲 , 𝐕𝐮𝐢 𝐓𝐢́𝐧𝐡 , 𝐇𝐨̀𝐚 Đ𝐨̂̀𝐧𝐠
🌀 𝐒𝐨̛̉ 𝐓𝐡𝐢́𝐜𝐡: 𝐁𝐨́𝐧𝐠 Đ𝐚́ , 𝐂𝐡𝐨̛𝐢 𝐆𝐚𝐦𝐞 , 𝐈𝐛 𝐕𝐨̛́𝐢 𝐍𝐢
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
☎ 𝐒đ𝐭&𝐙𝐚𝐥𝐨: 0965113021
🌐𝐅𝐛:https://www.facebook.com/toanchill2005
✉️ 𝐄𝐦𝐚𝐢𝐥:
------------
🛸𝐃𝐨𝐧𝐚𝐭𝐞:
💳𝐕𝐂𝐁: 𝐂𝐡𝐮̛𝐚 𝐋𝐚̀𝐦:(
💳𝐌𝐁: 0965113021
📲𝐌𝐎𝐌𝐎: 0965113021`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://toan-culi.tutoan205.repl.co/images/girl ')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "ad" :
            case "LVH" :
          case "admin 2":
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━

👤 𝗧𝗲̂𝗻:
🎟️  𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵:
🌹 𝗧𝘂𝗼̂̉𝗶:
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 
📅 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆:
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼
💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂:
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 
🏠 𝗡𝗼̛𝗶 𝗼̛̉: 
💞 𝗖𝘂𝗻𝗴:
💐 𝗚𝘂: ......
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: .....
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/

━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://No1-19Fc-1.manh10.repl.co/api/gai3.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "ad toàn" :
            case "ttoan" :
          case "admin 3":
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻:
🎟️  𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵:
🌹 𝗧𝘂𝗼̂̉𝗶:
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 
📅 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆:
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼
💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂:
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 
🏠 𝗡𝗼̛𝗶 𝗼̛̉: 
💞 𝗖𝘂𝗻𝗴:
💐 𝗚𝘂: ......
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: .....
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://No1-19Fc-1.manh10.repl.co/api/chill.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "ad chuột" :
            case "vkien" :
          case "admin 4":
        case "4": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻:
🎟️  𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵:
🌹 𝗧𝘂𝗼̂̉𝗶: ...
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 
🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆:
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼
💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂:
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻:
🏠 𝗡𝗼̛𝗶 𝗼̛̉:
💞 𝗖𝘂𝗻𝗴: 
💐 𝗚𝘂: ......
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: .....
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://No1-19Fc-1.manh10.repl.co/api/chill.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 3 || choose < 1) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
    }