/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "1.0.7",
    credits: "ProCoderMew",
    description: "Listen events",
    dependencies: {
        "path": ""
    }
};

module.exports.run = async function ({ api, event, Users }) {
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'meewmeew.json');
    const { antiout } = require(path);
    const { logMessageData, author, threadID } = event;
    const id = logMessageData.leftParticipantFbId;
  const moment = require("moment-timezone");
     var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  var fullYear = global.client.getTime("fullYear");
    if (author == id && id != api.getCurrentUserID()) {
        const name = await Users.getNameUser(id) || "Người dùng Facebook";
        if (antiout.hasOwnProperty(threadID) && antiout[threadID] == true) {
            try {
                await api.addUserToGroup(id, threadID);
                return api.sendMessage({body:`[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] - 𝐀𝐝𝐮𝐮𝐮 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐲𝐞̂𝐮 ${name} 𝐜𝐮̉𝐚 𝐭𝐚𝐨 𝐯𝐮̛̀𝐚 𝐭𝐡𝐨𝐚́𝐭 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐮̛𝐧𝐠 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐨𝐚́𝐭 𝐤𝐡𝐨̉𝐢 𝐭𝐚𝐲 𝐚𝐧𝐡 ! \n『 𝐓𝐡𝐨̛̀𝐢 𝐆𝐢𝐚𝐧 』➣ ${timeNow} `,attachment: (await axios.get((await axios.get(`https://apitoansex.toannguyen162.repl.co/love`)).data.data, {
                    responseType: 'stream'
                })).data},
  event.threadID, event.messageID);

            }
            catch (e) {
                return api.sendMessage({body:`[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] - 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐞̂𝐦 𝐥𝐚̣𝐢 𝐜𝐨𝐧 𝐚̂𝐦 𝐛𝐢𝐧𝐡 𝐧𝐚̀𝐲 ${name} 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 \n[ 𝐓𝐡𝐨̛̀𝐢 𝐆𝐢𝐚𝐧 ] ➣ ${timeNow} `,attachment: (await axios.get((await axios.get(`https://apitoansex.sadboyyeu.repl.co/love`)).data.data, {
                    responseType: 'stream'
                })).data},
  event.threadID, event.messageID); 
            }
        }
    }
    return;
}