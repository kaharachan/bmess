module.exports.config = {
  name: "ghep",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "mod TNT", 
  description: "𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 có chọn giới tính",
  commandCategory: "Tình yêu", 
  usages: "ghép Nam/Nữ", 
  cooldowns: 10
};
module.exports.run = async ({ api, event, handleReply, Users, Currencies }) => {
const { threadID, messageID, senderID } = event;
   var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const getHours = await global.client.getTime("hours");
	  var session = `${getHours < 3 ? "đê𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮ổ𝐢 𝐬á𝐧𝐠" : getHours < 12 ? "𝐛𝐮ổ𝐢 𝐭𝐫ư𝐚" : getHours < 17 ? "𝐛𝐮ổ𝐢 𝐜𝐡𝐢ề𝐮" : getHours < 23 ? "𝐛𝐮ổ𝐢 𝐭ố𝐢" : "đê𝐦 𝐤𝐡𝐮𝐲𝐚"}`
  const getHours1 = await global.client.getTime("hours");
			var session1 = `${getHours1 < 3 ? "🌌" : getHours1 < 8 ? "🏙" : getHours1 < 12 ? "🌁" : getHours1 < 17 ? "🌇" : getHours1 < 23 ? "🌃" : "🎑"}`
/*var data = await Currencies.getData(event.senderID);
var money = data.money
if( money = 0) api.sendMessage(`Bạn muốn 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 à kiếm đủ 1000$ mị mới ghép cho nhé\nSố tiền bạn hiện có: ${money}$`,threadID,messageID)
  else {
  Currencies.setData(event.senderID, options = {money: money - 1000})*/
	return api.sendMessage(`💜====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 PKC ]====💜\n━━━━━━━━━━━━━━━━━━━\n 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n⚠️ 𝗖𝗵𝘂𝗮̂̉𝗻 𝗯𝗶̣ 𝗴𝗵𝗲́𝗽 \n🌐 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝗵𝗼̣𝗻 𝗴𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵 \n🍑⚌⚌[ 𝗠𝗘𝗡𝗨 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 ]⚌⚌🍑\n𝟭. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝟮 𝘁𝗿𝗮́𝗶 𝘁𝗶𝗺💗(𝗕𝗼𝘆) \n𝟮. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝟮 𝘁𝗿𝗮́𝗶 𝘁𝗶𝗺💗(𝗚𝗶𝗿𝗹) \n𝟯. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝟭 𝘁𝗿𝗮́𝗶 𝘁𝗶𝗺 𝗺𝗮̀𝘂 𝗵𝗼̂̀𝗻𝗴 💓(𝗕𝗼𝘆) \n𝟰. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝟭 𝘁𝗿𝗮́𝗶 𝘁𝗶𝗺 𝗺𝗮̀𝘂 𝗵𝗼̂̀𝗻𝗴 💓(𝗚𝗶𝗿𝗹) \n𝟱. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝗰𝗵𝘂̛̃ 𝗟𝗢𝗩𝗘 𝗺𝗮̀𝘂 𝗵𝗼̂̀𝗻𝗴💕(𝗕𝗼𝘆) \n𝟲. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝗰𝗵𝘂̛̃ 𝗟𝗢𝗩𝗘 𝗺𝗮̀𝘂 𝗵𝗼̂̀𝗻𝗴💕(𝗚𝗶𝗿𝗹) \n𝟳. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝗰𝗵𝘂̛̃ 𝗟𝗢𝗩𝗘 𝘀𝗮̆́𝗰 𝗺𝗮̀𝘂(𝗕𝗼𝘆)🌈 \n𝟴. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝗰𝗵𝘂̛̃ 𝗟𝗢𝗩𝗘 𝘀𝗮̆́𝗰 𝗺𝗮̀𝘂(𝗚𝗶𝗿𝗹)🌈 \n𝟵. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝘁𝗿𝗮́𝗶 𝘁𝗶𝗺 𝗰𝗵𝘂̛̃ 𝗟𝗢𝗩𝗘 ❤(𝗕𝗼𝘆) \n𝟭𝟬. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝘁𝗿𝗮́𝗶 𝘁𝗶𝗺 𝗰𝗵𝘂̛̃ 𝗟𝗢𝗩𝗘 ❤(𝗚𝗶𝗿𝗹) \n𝟭𝟭. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝗴𝗮̂́𝘂 𝗰𝘂𝘁𝗶(𝗕𝗼𝘆)🐻‍❄️ \n𝟭𝟮. 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗵𝗶̀𝗻𝗵 𝗴𝗮̂́𝘂 𝗰𝘂𝘁𝗶(𝗚𝗶𝗿𝗹)🐻‍❄️ \n━━━━━━━━━━━━━━━━━━━\n⚠️ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n🍀 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́ 𝟲 𝗸𝗶𝗲̂̉𝘂 𝘁𝗶𝗻𝗱𝗲𝗿 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n📌 𝗨𝗽𝗱𝗮𝘁𝗲 𝘀𝗼𝗼𝗻...`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "tinder",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const tile = (Math.random() * 50)+50; 
const emoji = ["♥️","❤️","💛","💚","💙","💜","💞","💖","💝","💓","💘","💍"];
const random = ["𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝘁𝗿𝗮̆𝗺 𝗻𝗮̆𝗺 𝗵𝗮̣𝗻𝗵 𝗽𝗵𝘂́𝗰", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗻𝗵𝗮𝘂 𝘁𝗼̛́𝗶 𝗴𝗶𝗮̀", "𝗖𝗵𝘂́𝗰 𝗰𝗵𝗼 𝟮 𝗯𝗮̣𝗻 𝘀𝗼̛́𝗺 𝗰𝗵𝗶𝗮 𝘁𝗮𝘆", "𝗠𝗮̃𝗶 𝗯𝗲̂𝗻 𝗻𝗵𝗮𝘂 𝟮 𝗯𝗮̣𝗻 𝗻𝗵𝗲́", "𝗦𝗼̛́𝗺 𝘀𝗶𝗻𝗵 𝗾𝘂𝘆́ 𝘁𝘂̛̉ 𝗻𝗵𝗲𝗮𝗮𝗮", "𝗦𝗼̛́𝗺 𝘀𝗶𝗻𝗵 𝗾𝘂𝘆́ 𝘁𝘂̛̉ 𝗻𝗵𝗮𝗮𝗮", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝗰𝗼́ 𝟭 𝘁𝗶̀𝗻𝗵 𝘆𝗲̂𝘂 𝗯𝗲̂̀𝗻 𝘃𝘂̛̃𝗻𝗴", "𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝗺𝗮̃𝗶 𝗺𝗮̃𝗶 𝟭 𝘁𝗶̀𝗻𝗵 𝘆𝗲̂𝘂"];
  const getHours = await global.client.getTime("hours");
	  var session = `${getHours < 3 ? "đê𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮ổ𝐢 𝐬á𝐧𝐠" : getHours < 12 ? "𝐛𝐮ổ𝐢 𝐭𝐫ư𝐚" : getHours < 17 ? "𝐛𝐮ổ𝐢 𝐜𝐡𝐢ề𝐮" : getHours < 23 ? "𝐛𝐮ổ𝐢 𝐭ố𝐢" : "đê𝐦 𝐤𝐡𝐮𝐲𝐚"}`
  const getHours1 = await global.client.getTime("hours");
			var session1 = `${getHours1 < 3 ? "🌌" : getHours1 < 8 ? "🏙" : getHours1 < 12 ? "🌁" : getHours1 < 17 ? "🌇" : getHours1 < 23 ? "🌃" : "🎑"}`
    switch(handleReply.type) {
        case "tinder": {
          switch(event.body) {
					case "1": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💙 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/8hc4uzL.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💜\n━━━━━━━━━━━━━━━━━━\n💖 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n ❄𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
          case "2": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💝 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/8hc4uzL.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
         var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💙\n━━━━━━━━━━━━━━━━━━━\n❤ 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n❄ 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "3": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💙 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Dmnn6fR.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💜\n━━━━━━━━━━━━━━━━━━\n💖 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n ❄𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
        case "4": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💝 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/Dmnn6fR.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💙\n━━━━━━━━━━━━━━━━━━━\n❤ 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n️💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n❄ 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "5": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💙 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/9FaZgbt.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💜\n━━━━━━━━━━━━━━━━━━━\n💖 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n ❄𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
              case "6": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💝 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/9FaZgbt.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💙\n━━━━━━━━━━━━━━━━━━\n❤ 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n❄ 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
         case "7": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💙 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/s0QwjWj.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
            var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💜\n━━━━━━━━━━━━━━━━━━\n💖 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n 🌐  𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
        case "8": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💝 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/s0QwjWj.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💙\n━━━━━━━━━━━━━━━━━\n❤ 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n❄ 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "9": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💙 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/stOFHg4.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💜\n━━━━━━━━━━━━━━━━━━\n💖 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n ❄𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break; 
              case "10": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💝 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/stOFHg4.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💙\n━━━━━━━━━━━━━━━━━━\n❤ 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n❄ 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "11": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💙 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/eFrT3jV.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💜====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💜\n━━━━━━━━━━━━━━━━━━━\n💖 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n💓 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💝 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n ❄𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
              case "12": {
						api.unsendMessage(handleReply.messageID);
						api.sendMessage(` 💝 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝘁𝗶̀𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘅𝗲𝗺 𝗺𝗮̆́𝘁 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻....`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
          let gifLove = (await axios.get( `https://i.imgur.com/eFrT3jV.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
                 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
           var msg = {body: `💙====[ 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 𝗧𝗡𝗧 ]====💙\n━━━━━━━━━━━━━━━━━\n❤ 𝗠𝗮𝗶 𝗺𝗼̂́𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💮\n️💞 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗰𝘂̉𝗮 𝟮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${tile.toFixed(2)}%\n💖 ${random[Math.floor(Math.random() * random.length)]}\n`+n+" "+emoji[Math.floor(Math.random() * random.length)]+" "+name+`\n𝗧𝗵𝗼̛̀𝗶 đ𝗶𝗲̂̉𝗺 𝘁𝗿𝗼𝗻𝗴 𝗻𝗴𝗮̀𝘆: ${session1} | ${session}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n💞 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗮̣𝗶 𝗯𝗼𝘅: ${threadname}\n❄ 𝗧𝗶𝗻𝗱𝗲𝗿 𝗕𝘆 ${global.config.BOTNAME} `, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
      }
    }
                }