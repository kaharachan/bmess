const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk1 = require('chalk');
const chalk = require('chalkercli');
const chalkAnimation = require('chalkercli');
var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});
console.log(chalk1.bold.hex("#ffccff").bold('━━━━━━━━━━━━━━━ [ INFO FILE ] ━━━━━━━━━━━━━━'));
app.listen(3000, function () {
  console.log(chalk1.hex("#" + random)(`[ Bắt đầu ] → Máy chủ đang khởi động...`), "");
});  
function startBot(message) {
    (message) ? logger(message, "[ Bắt đầu ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Tiến hành khởi động lại...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("Đã xảy ra lỗi: " + JSON.stringify(error), "[ Bắt đầu ]");
    });
};
axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2/main/package.json").then((res) => {
  function _0x331a(_0x3cf084,_0x1b5afe){const _0x444b31=_0x444b();return _0x331a=function(_0x331aa1,_0x215c1d){_0x331aa1=_0x331aa1-0x1af;let _0x45d4da=_0x444b31[_0x331aa1];return _0x45d4da;},_0x331a(_0x3cf084,_0x1b5afe);}function _0x444b(){const _0x48bd34=['33376656KvwuYI','6790128ykbHeH','514201YHCGIp','7uYDOik','stop','\x0a◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆\x0a*\x20\x20\x20\x20\x20\x20███╗░░██╗███╗░░░███╗████████╗\x0a\x20\x20*\x20\x20\x20\x20████╗░██║████╗░████║╚══██╔══╝\x0a*\x20\x20\x20\x20\x20\x20██╔██╗██║██╔████╔██║░░░██║░░░\x0a\x20\x20*\x20\x20\x20\x20██║╚████║██║╚██╔╝██║░░░██║░░░\x0a*\x20\x20\x20\x20\x20\x20██║░╚███║██║░╚═╝░██║░░░██║░░░\x0a\x20\x20*\x20\x20\x20\x20╚═╝░░╚══╝╚═╝░░░░░╚═╝░░░╚═╝░░░\x0a◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆','rainbow','2778918piiaHp','6000056IvjULP','5494230HsOsDi','3797229sgrBUz'];_0x444b=function(){return _0x48bd34;};return _0x444b();}const _0x40d6b0=_0x331a;(function(_0x4218c3,_0x21338e){const _0x52c496=_0x331a,_0x154490=_0x4218c3();while(!![]){try{const _0x59c192=parseInt(_0x52c496(0x1b4))/0x1+-parseInt(_0x52c496(0x1b9))/0x2+parseInt(_0x52c496(0x1b1))/0x3+-parseInt(_0x52c496(0x1af))/0x4+-parseInt(_0x52c496(0x1b0))/0x5+parseInt(_0x52c496(0x1b3))/0x6*(-parseInt(_0x52c496(0x1b5))/0x7)+parseInt(_0x52c496(0x1b2))/0x8;if(_0x59c192===_0x21338e)break;else _0x154490['push'](_0x154490['shift']());}catch(_0xfeda6b){_0x154490['push'](_0x154490['shift']());}}}(_0x444b,0xcb213));const rainbow=chalk[_0x40d6b0(0x1b8)](_0x40d6b0(0x1b7))[_0x40d6b0(0x1b6)]();
rainbow.render();
const frame = rainbow.frame();
console.log(frame);
});
const _0x59e78b=_0x38bc;function _0x1996(){const _0x4e5ef2=['4966110QiSzWj','3729zXoesz','online','┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛','2679924CvUplC','537622vrgVnh','8345216LCZRta','┣➤\x20Tiến\x20hành\x20uptime\x20link:\x20https://','360gocvME','┣➤\x20Tiến\x20hành\x20khởi\x20động\x20server\x20uptime','log','2736QdZFxr','2WVdTBt','Toàn','┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓','640MKYgnw','11942KXFNcS','68481Nepisc','REPL_SLUG','table'];_0x1996=function(){return _0x4e5ef2;};return _0x1996();}(function(_0x54f50b,_0x18fa80){const _0x59db94=_0x38bc,_0x2e3067=_0x54f50b();while(!![]){try{const _0x14e182=-parseInt(_0x59db94(0x189))/0x1*(parseInt(_0x59db94(0x196))/0x2)+parseInt(_0x59db94(0x192))/0x3*(parseInt(_0x59db94(0x188))/0x4)+parseInt(_0x59db94(0x191))/0x5+-parseInt(_0x59db94(0x195))/0x6+parseInt(_0x59db94(0x18d))/0x7*(parseInt(_0x59db94(0x18c))/0x8)+-parseInt(_0x59db94(0x18e))/0x9*(-parseInt(_0x59db94(0x185))/0xa)+-parseInt(_0x59db94(0x183))/0xb;if(_0x14e182===_0x18fa80)break;else _0x2e3067['push'](_0x2e3067['shift']());}catch(_0x341890){_0x2e3067['push'](_0x2e3067['shift']());}}}(_0x1996,0x7cbba),console[_0x59e78b(0x187)]('\x0a◆━━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━━◆\x0a-===============\x20[\x20UPTIME\x20]\x20===============-\x0a◆━━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━━◆'),console[_0x59e78b(0x187)](_0x59e78b(0x18b)),console['log'](_0x59e78b(0x186)),console['log']('┣➤\x20Khởi\x20động\x20không\x20thành\x20công\x20server\x20uptime'),console[_0x59e78b(0x187)](_0x59e78b(0x184)+process['env'][_0x59e78b(0x18f)]+'.'+process['env']['REPL_OWNER']+'.repl.co'),console[_0x59e78b(0x187)](_0x59e78b(0x194)));function _0x38bc(_0x4687b8,_0x3ccb53){const _0x1996c4=_0x1996();return _0x38bc=function(_0x38bc7e,_0xdf877e){_0x38bc7e=_0x38bc7e-0x183;let _0x35359e=_0x1996c4[_0x38bc7e];return _0x35359e;},_0x38bc(_0x4687b8,_0x3ccb53);}const item=[{'name':_0x59e78b(0x18a),'trạng\x20thái':_0x59e78b(0x193),'tốc\x20độ':0x64},{'name':'Toàn','trạng\x20thái':'online','tốc\x20độ':0x64},{'name':_0x59e78b(0x18a),'trạng\x20thái':_0x59e78b(0x193),'tốc\x20độ':0x64}];console[_0x59e78b(0x190)](item),startBot();