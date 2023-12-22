module.exports.config = {
  name: "autorep",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "dtai",
  description: "Tiến hành tự động tin nhắn nếu phát hiện có người nhắn",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const { senderID } = event;
  const moment = require("moment-timezone");
  moment.tz.setDefault("Asia/Ho_Chi_Minh");
  const currentTime = moment();

  if (!event.isGroup) {
    console.log(`[ AUTO - REP ] » Tiến hành tự động trả lời tin nhắn`);

    if (currentTime.hour() >= 7 && currentTime.hour() <= 22) {

      const threads = await api.getThreadList(20);
      for (const thread of threads) {
        const threadID = thread.threadID;
        const messages = await api.getThreadHistory(threadID, 1);

        if (messages.length > 0) {
          const lastMessage = messages[0];

          const message = `Xin chào bạn 👋\nCảm ơn bạn đã liên hệ đến tôi\nĐây là tin nhắn tự động\nNếu bạn có nhu cầu mua file bot, thuê bot, mua các file bot tầm trung giá rẻ\nXin hãy vui lòng liên hệ đến\nZalo:\nFacebook: m.me/Ng.dtai2006\nĐội ngũ của chúng tôi sẽ hỗ trợ bạn mọi lúc vào khung giờ từ 7h sáng đến 10h tối\nChúc bạn 1 ngày vui vẻ`;
          await api.sendMessage(message, senderID, threadID);
        }
      }
    } else {
      const message = `Xin chào bạn 👋\nCảm ơn bạn đã liên hệ đến tôi\nĐây là tin nhắn tự động\nHiện tại do đã hết giờ làm việc vui lòng quay lại vào 7h sáng đến 10h tối hôm sau để được hỗ trợ\nChúc bạn có 1 giấc ngủ ngon\nTạm biệt và hẹn gặp lại vào lần sau 👋`;
      await api.sendMessage(message, senderID);
    }
  }
};

function isMessageInSpamOrPending(messageID) {
  const isPending = await api.isMessageInPendingFolder(messageID);
  const isSpam = await api.isMessageInSpamFolder(messageID);
  return isPending || isSpam;
                                                    }