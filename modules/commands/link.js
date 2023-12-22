module.exports.config = {
  name: "link",
  version: "1.0.0",
  hasPermssion: 2,
  credit: "kahara",
  description: "Ăn link toptop",
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 0,
  denpendencies: {}
};

module.exports.handleEvent = async ({ event, api, Users, Threads }) => {
  var { threadID, messageID, body, senderID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");

    var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["fixspam"] !== "undefined" && thread["fixspam"] == false) return;


  if (senderID == global.data.botID) return;
  let name = await Users.getNameUser(event.senderID);
  var idbox = event.threadID;
  var threadInfo = (await Threads.getData(threadID)).threadInfo;
  //trả lời
  var msg = {
    body: `𝗗𝗮̣̂𝘆 𝗮̆𝗻 𝗹𝗶𝗻𝗸 𝗻𝗮̀𝗼 :𝘃`
  }
  // Gọi bot
  const arr = ["https//vt.tiktok.com/ZSN", ""];

  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
      const uidUser = event.senderID;
      modules = "link toptop:"
      console.log(name, modules, i);
      const data = Users.getData(uidUser).data || {};


      api.sendMessage(msg, threadID, () => {
        var listAdmin = global.config.ADMINBOT;
        for (var idad of listAdmin) {
          let namethread = threadInfo.threadName;
          api.sendMessage(``, idad);
        }
      });
    }
  });

};
module.exports.languages = {
  "vi": {
    "on": "𝐁𝐚̣̂𝐭",
    "off": "𝐓𝐚̆́𝐭",
    "successText": "𝗟𝗶𝗻𝗸 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐲 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "𝗟𝗶𝗻𝗸 success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["fixspam"] == "undefined" || data["fixspam"] == true) data["fixspam"] = false;
  else data["fixspam"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["fixspam"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}

