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
  const juswa = new Date().toLocaleDateString("en-GB");
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();

  // Image link
  var link = ["https://i.imgur.com/p8TqZ2X.jpg"];

  // Ensure cache folder exists
  if (!fs.existsSync(__dirname + "/cache")) fs.mkdirSync(__dirname + "/cache");

  var callback = () =>
    api.sendMessage(
      {
        body: `╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿) 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎
🔥Bot Name: ${global.config?.BOTNAME || "Unknown"}
🔥Bot Owner: Anurag Mishra
🌸Prefix: ${global.config?.PREFIX || "/"}
🥳UPTIME: ${juswa} ${hours}:${minutes}:${seconds}`,
        attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg"),
      },
      event.threadID,
      () => {
        if (fs.existsSync(__dirname + "/cache/juswa.jpg")) fs.unlinkSync(__dirname + "/cache/juswa.jpg");
      }
    );

  request(encodeURI(link[Math.floor(Math.random() * link.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg"))
    .on("close", () => callback())
    .on("error", (err) => console.log("Image download error:", err));
};
