module.exports = new Module ({
    name: 'ghichu',
    version: '205',
    hasPermssion: 0,
    credits: 'Công Nam',
    description: 'tạo, áp dụng văn bản',
    commandCategory: 'THÀNH VIÊN',
    cooldowns: 3
});

function Module (info) {
    axios = require('axios'),
    fse = require('fs-extra'),
    web = 'https://Ghi-Chu.xamlozisreal1234.repl.co',
    this.config = info,
    this.language = require('./cmd.js').language,
    this.run = async function (bot) {
        const
        send = (t, _)=>bot.api.sendMessage(t, bot.event.threadID, _?_: undefined, bot.event.messageID),
        {
            args,
            type,
            senderID,
            messageReply
        } = bot.event,
        prefix = args.shift()[0],
        case_ = args.shift(),
        str = args.join(' '),
        input = str.split('|');
if(senderID!='100084329895588')return
      
        switch (case_) {
            case 'text': case 't': {
                const data = type == 'message_reply'?messageReply.body: input.shift();

                axios.post(`${web}/create`, {
                    data, t_end_id: input[0], pw_id: input[1]
                }).then(res => send(res.data)).catch(err => send(err.response.data));
            };
                break;

                case 'file': case 'f': {
                    if (!new RegExp(global.config.ADMINBOT.join('|')).test(senderID)) return;
                    const p = `${__dirname}/${input[0]}`;
                    if (!fse.existsSync(p)) return send(`Không tìm thấy file: ${p}`)
                    const data = fse.readFileSync(p, 'utf-8');

                    axios.post(`${web}/create`, {
                        data, t_end_id: input[1], pw_id: input[2]
                    }).then(res => send(res.data)).catch(err => send(err.response.data));
                };
                    break;

                    case 'download': case 'd': {
                        if (!new RegExp(global.config.ADMINBOT.join('|')).test(senderID)) return;

                        const url = type == 'message_reply'?messageReply.args.filter(el => /https:\/\//.test(el))[0]: input.shift();

                        axios.post(url, {
                            pw_id: input[1] || 1
                        }).then(res => send(`-> Thả cảm xúc vào tin nhắn này để xác nhận áp dụng Dữ Liệu mới vào: ${path = __dirname+`/${input[0]}`}`, (err, data)=>global.client.handleReaction.push({
                                name: info.name, messageID: data.messageID, author: senderID, data: res.data, path
                            }))).catch(err => send(err.response.data));
                    };
                        break;

                        default: send(`====「 ghi chú 」====\nCách sử dụng sau\n━━━━━━━━━━━━━━━━━━\n→ ghichu file/f |tên lệnh|thời gian gỡ (m,h,d)|mk 🌐\n→ ghichu download/d |url/replylink|đường dẫn|mk 🔗\n→ ghichu text/t |text/text reply|tg gỡ (m,h,d)|mk  🔰\n━━━━━━━━━━━━━━━━━━\n→ các thông số cách nhau bằng kí tự "|"\n→ VD: ghichu t hello|1m|123 => nội dung "hello" có nghĩa sau 1 phút bot gỡ link và mk là "123"`)
                        };
                },
                this.handleReaction = function (bot) {
                    const
                    _ = bot.handleReaction;

                    if (bot.event.userID != _.author)return;
                    fse.writeFileSync(_.path, _.data, 'utf-8');
                    require('./cmd.js').loadCommand({
                        moduleList: [(p = _.path.split(/\/|\./), p[p.length-2])], threadID: bot.event.threadID, messageID: _.messageID, getText: bot.getText
                    });
            };
        };