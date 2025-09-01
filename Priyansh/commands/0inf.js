const fs = require("fs");
const request = require("request");

module.exports.config = {
  name: "info",
  version: "1.0.0",
  role: 0,
  credits: "Anurag Mishra",
  description: "Shows bot and owner information",
  usages: "/info",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const juswa = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY format
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();

  // Yahan apna image link daal
  var link = ["https://i.imgur.com/p8TqZ2X.jpg"];

  var callback = () =>
    api.sendMessage(
      {
        body: ` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇮🇳 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️Bot Name︎︎︎☄️  ${global.config.BOTNAME}

🔥Bot Admin🔥☞︎︎︎☜︎︎︎✰ 𝐀𝐍𝐔𝐑𝐀𝐆 𝐌𝐈𝐒𝐇𝐑𝐀💔🥀

🙈Bot Admin Owner Facebook ID🙈 ➪ https://www.facebook.com/Anu.Anchal 💞🕊️

👋For Any Kind Of Help Contact On Telegram 👉 @Anuragmishra😇

✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸 ☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

♥️Bot Owner♥️ ☞︎︎︎☜︎︎︎✰ 𝐀𝐍𝐔𝐑𝐀𝐆 𝐌𝐈𝐒𝐇𝐑𝐀

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using ${global.config.BOTNAME} Bot🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒𝐀𝐍𝐔𝐑𝐀𝐆 𝐌𝐈𝐒𝐇𝐑𝐀🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛
`,
        attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg"),
      },
      event.threadID,
      () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")
    );

  return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg"))
    .on("close", () => callback());
};
