module.exports.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam",//mod lại by Toàn Chin 
    description: "Xem danh sách lệnh và info",
    commandCategory: "Tiện ích",
    usages: "[tên lệnh/all]",
    cooldowns: 5
};
module.exports.languages = {
    "vi": {},
    "en": {}
}
module.exports.run = async function({
    api,
    event,
    args,
  Currencies,
  __GLOBAL
}) {
const { events } = global.client;
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const { commands } = global.client;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event
    var type = !args[0] ? "" : args[0].toLowerCase()
    var msg = "",
        array = [],
        i = 0
    const cmds = global.client.commands
    const TIDdata = global.data.threadData.get(tid) || {}
    var prefix = TIDdata.PREFIX || global.config.PREFIX
    if (type == "all") {
        for (const cmd of cmds.values()) {
            msg += `${++i}. ${cmd.config.name}: ${cmd.config.description}\n`
        }
        return api.sendMessage(msg, tid, mid)
    }
    if (type == "all") return
    if (type) {
        for (const cmd of cmds.values()) {
            array.push(cmd.config.name.toString())
        }
        if (!array.find(n => n == args[0].toLowerCase())) {
            const stringSimilarity = require('string-similarity')
            commandName = args.shift().toLowerCase() || ""
            var allCommandName = [];
            const commandValues = cmds['keys']()
           let i = 1;
            for (const cmd of commandValues) allCommandName.push(cmd)
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
            if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
            msg = `Không tìm thấy lệnh '${type}' trong hệ thống.\n➝ Lệnh gần giống được tìm thấy '${checker.bestMatch.target}'`
            api.sendMessage(msg, tid, mid)
        }
        const cmd = cmds.get(type).config
        msg = `🧸 𝗧𝗲̂𝗻: ${cmd.name} ( ${cmd.version} )\n🔗 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${TextPr(cmd.hasPermssion)}\n👤 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${cmd.credits}\n💬 𝗠𝗼̂ 𝘁𝗮̉: ${cmd.description}\n🧩 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${cmd.commandCategory}\n🌟 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${cmd.usages}\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${cmd.cooldowns}s`
        api.sendMessage(msg, tid, mid)
    } else {
        CmdCategory()
        array.sort(S("nameModule"))
  var _0x5d7fba=_0x3bce;(function(_0x1e150b,_0x3fa2ac){var _0xae64f2=_0x3bce,_0x4dc00d=_0x1e150b();while(!![]){try{var _0x216805=-parseInt(_0xae64f2(0xc6))/0x1+parseInt(_0xae64f2(0xc5))/0x2+parseInt(_0xae64f2(0xca))/0x3+parseInt(_0xae64f2(0xd0))/0x4+-parseInt(_0xae64f2(0xcd))/0x5+-parseInt(_0xae64f2(0xd3))/0x6*(parseInt(_0xae64f2(0xcb))/0x7)+-parseInt(_0xae64f2(0xc7))/0x8*(-parseInt(_0xae64f2(0xd2))/0x9);if(_0x216805===_0x3fa2ac)break;else _0x4dc00d['push'](_0x4dc00d['shift']());}catch(_0x3b7c52){_0x4dc00d['push'](_0x4dc00d['shift']());}}}(_0x3a00,0x8a1b5));function _0x3a00(){var _0x5e343e=['749810ePthQy','\x20𝗹𝗲̣̂𝗻𝗵\x20𝗰𝗼́\x20𝘁𝗵𝗲̂̉\x20𝘀𝘂̛̉\x20𝗱𝘂̣𝗻𝗴\x0a🧸\x20𝗛𝗗𝗦𝗗:\x20?𝗵𝗲𝗹𝗽\x20+\x20𝘁𝗲̂𝗻\x20𝗹𝗲̣̂𝗻𝗵\x20𝗻𝗲̂́𝘂\x20𝗺𝘂𝗼̂́𝗻\x20𝘅𝗲𝗺\x20𝘁𝗵𝗼̂𝗻𝗴\x20𝘁𝗶𝗻\x20𝗰𝘂̉𝗮\x20𝗹𝗲̣̂𝗻𝗵\x20đ𝗼́\x0a🌸\x20𝗛𝗗𝗦𝗗:\x20?𝗵𝗲𝗹𝗽\x20+\x20𝗮𝗹𝗹\x20đ𝗲̂̉\x20𝘅𝗲𝗺\x20𝘁𝗮̂́𝘁\x20𝗰𝗮̉\x20𝗹𝗲̣̂𝗻𝗵\x20𝗰𝗼́\x20𝘁𝗿𝗲̂𝗻\x20𝗵𝗲̣̂\x20𝘁𝗵𝗼̂́𝗻𝗴\x20𝗯𝗼𝘁\x0a\x0a🪙\x20𝗧𝗵𝗮̉\x20𝗰𝗮̉𝗺\x20𝘅𝘂́𝗰\x20\x22👍\x22\x20𝘃𝗮̀𝗼\x20𝘁𝗶𝗻\x20𝗻𝗵𝗮̆́𝗻\x20𝗻𝗮̀𝘆\x20đ𝗲̂̉\x20𝘅𝗲𝗺\x20𝘁𝗵𝗼̂𝗻𝗴\x20𝘁𝗶𝗻\x20𝘃𝗲̂̀\x20𝗯𝗼𝘁\x20𝗺𝗮̀\x20𝗯𝗮̣𝗻\x20đ𝗮𝗻𝗴\x20𝘀𝘂̛̉\x20𝗱𝘂̣𝗻𝗴\x20𝗖𝗵𝘂́𝗰\x20𝗯𝗮̣𝗻\x20𝗰𝗼́\x20𝟭\x20𝗻𝗴𝗮̀𝘆\x20𝗺𝗼̛́𝗶\x20𝘃𝘂𝗶\x20𝘃𝗲̉','𝗛𝗶𝗲̣̂𝗻\x20𝗧𝗮̣𝗶\x20','4118136IyYpzf','get','9tYLaWN','18QhdmxY','====『\x20𝗛𝗘𝗟𝗣\x20𝗖𝗠𝗠𝗗\x20』====\x0a','floor','length','424296gvPGPx','358501TVHKNL','4289192gkgNkW','BOTNAME','data','1025478WXMCiS','2439521zTyfvj','https://anhgai.hoanghuy101.repl.co/anhgai'];_0x3a00=function(){return _0x5e343e;};return _0x3a00();}var image=[],stt=['2'],srd=stt[Math[_0x5d7fba(0xd5)](Math['random']()*stt[_0x5d7fba(0xc4)])];for(i=0x0;i<srd;i++){var stream=(await axios[_0x5d7fba(0xd1)]((await axios[_0x5d7fba(0xd1)](_0x5d7fba(0xcc)))[_0x5d7fba(0xc9)][_0x5d7fba(0xc9)],{'responseType':'stream'}))[_0x5d7fba(0xc9)];image['push'](stream);}for(const cmd of array){msg1=_0x5d7fba(0xd4),msg+='';}function _0x3bce(_0x80f23f,_0x23b43b){var _0x3a0057=_0x3a00();return _0x3bce=function(_0x3bce53,_0x45e298){_0x3bce53=_0x3bce53-0xc4;var _0x2533a1=_0x3a0057[_0x3bce53];return _0x2533a1;},_0x3bce(_0x80f23f,_0x23b43b);}msg+=_0x5d7fba(0xcf)+global['config'][_0x5d7fba(0xc8)]+'\x20\x20'+cmds['size']+_0x5d7fba(0xce);
        api.sendMessage({body: msg1 + msg, attachment:image},event.threadID,(error, info) => {
                  setTimeout(() => {api.unsendMessage(info.messageID) } , 10000)
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
    }
  module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
    api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁\n𝟮. 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗰𝗵𝗮̣𝘆 𝗹𝗮̣𝗶 𝗯𝗼𝘁\n𝟯. 𝗧𝗮̆́𝘁 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁 \n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage(msg,threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
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
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
            case "1": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       
              const urls = [
  'https://apilaiminhhien.apilord.repl.co/api/gaimaid.php',

  'https://apilaiminhhien.apilord.repl.co/api/gaimaid.php',

];

const array = await Promise.all(urls.map(async url => {
 const res = await axios.get(url);
 const data = res.data.data;
 const downloadfile = (await axios.get(data, { responseType: 'stream' })).data;
 return downloadfile;
}));
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵`,attachment:array},event.threadID, event.messageID)
            }
        case "2": {
          const axios = require('axios');
       
          var time = "1"
	var rstime = "1";
	if (!time) rstime = "1";
	else rstime = time;
	return setTimeout(() =>  { api.sendMessage("[𝗕𝗼𝘁] => 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝗹𝗼𝗮𝗱 𝗕𝗼𝘁 !",event.threadID,() => process.exit(1) )},	rstime * 1000);
        }
            case "3": {
const axios = require('axios');
 
 
    api.sendMessage("Done,Tiến hành tắt hệ thống bot!",event.threadID, () =>process.exit(0))
} 
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ Vui lòng nhập 1 con số", event.threadID, event.messageID);
            	if (choose > 3 || choose < 1) return api.sendMessage("→ Lựa chọn không nằm trong danh sánh.", event.threadID, event.messageID); 
    }
    }
}
  }
    function CmdCategory() {
        for (const cmd of cmds.values()) {
            const {
                commandCategory,
                hasPermssion,
                name: nameModule
            } = cmd.config
            if (!array.find(i => i.cmdCategory == commandCategory)) {
                array.push({
                    cmdCategory: commandCategory,
                    permission: hasPermssion,
                    nameModule: [nameModule]
                })
            } else {
                const find = array.find(i => i.cmdCategory == commandCategory)
                find.nameModule.push(nameModule)
            }
        }
    }
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k].length > b[k].length) {
            i = 1
        } else if (a[k].length < b[k].length) {
            i = -1
        }
        return i * -1
    }
}

function TextPr(permission) {
    p = permission
    return p == 0 ? "Thành Viên" : p == 1 ? "Admin Box" : p = 2 ? "Admin bot" : "Toàn Quyền"
                                                                                                                                                                                                                                                                                                   }