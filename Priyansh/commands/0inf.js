module.exports.config = {
  name: "info",
  version: "1.0.2",
  role: 0,
  credits: "Anurag Mishra",
  description: "Shows stylish bot and owner information",
  usages: "/info",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const juswa = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();

  const imageLink = "https://i.imgur.com/p8TqZ2X.jpg";

  const message = `
🌸✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧🌸
╔══• ೋ•✧๑♡๑✧•ೋ •══╗
      𝐀𝐃𝐌𝐈𝐍 & 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎
╚══• ೋ•✧๑♡๑✧•ೋ •══╝

✨ Bot Name: ${global.config?.BOTNAME || "Unknown"}  
👑 Bot Owner: 𝐀𝐍𝐔𝐑𝐀𝐆 𝐌𝐈𝐒𝐇𝐑𝐀  
🌐 Facebook: https://www.facebook.com/Anu.Anchal  
📩 Telegram: @Anuragmishra  

💠 Bot Prefix: ${global.config?.PREFIX || "/"}  
⏰ UPTIME: ${juswa} | ${hours}:${minutes}:${seconds}  

✧══════•❁❀❁•══════✧
💖 Thanks for using ${global.config?.BOTNAME || "this bot"} 💖
✧══════•❁❀❁•══════✧
🌸✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧🌸
`;

  // Send message with image
  api.sendMessage(
    {
      body: message,
      attachment: await global.utils.getStream(imageLink),
    },
    event.threadID
  );
};
