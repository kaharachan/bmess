const axios = require('axios');
const fs = require('fs');

const isURL = u => /^http(|s):\/\//.test(u);

exports.handleEvent = async function(o) {
  try {
    const str = o.event.body;
    const send = msg => o.api.sendMessage(msg, o.event.threadID);
    const head = app => `${app.toUpperCase()} title:\n\n`;

    if (isURL(str)) {
      if (/fb|facebook/.test(str)) {
        const json = await infoPostFb(str);
        const body = `=====Facebook=====\nTitle: ${json.message}`;
        const fil = type => json.attachment.filter($=>$.__typename == type);
        const photo = fil('Photo');
        const video = fil('Video');

        const attachment = [];
        for (const i of photo) {
          try {
            const img = i.photo_image || i.image || {};
            attachment.push(await streamURL(img.uri, 'jpg'));
          } catch {
            continue;
          }
        }
        if (attachment.length > 0) {
          await send({
            body, attachment
          });
        }

        for (const i of video) {
          try {
            send({
              body, attachment: await streamURL(i.playable_url_quality_hd || i.playable_url, 'mp4'),
            });
          } catch {
            continue;
          }
        }
      }
    }
  } catch(e) {
    console.log('Error', e);
  }
};

exports.run = () => {};

exports.config = {
  name: 'test',
  version: '1',
  hasPermssion: 0,
  credits: 'Sơnkb',
  description: '',
  commandCategory: 'Tiện ích',
  usages: [],
  cooldowns: 3
};

async function streamURL(url, type) {
  const res = await axios.get(url, {
    responseType: 'arraybuffer'
  });
  const path = __dirname + `/cache/${Date.now()}.${type}`;
  fs.writeFileSync(path, res.data);
  setTimeout(p => fs.unlinkSync(p), 1000 * 60, path);
  return fs.createReadStream(path);
}

async function infoPostFb(url) {
  const res = await axios.get(`https://tools-fb.miraiprofile2005.repl.co/?url=${url}`);
  return res.data;
}