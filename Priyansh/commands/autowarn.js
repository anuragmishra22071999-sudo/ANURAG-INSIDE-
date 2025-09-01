module.exports.config = {
  name: "autowarn",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Anurag Mishra",
  description: "Auto gali detect karega, warning dega aur kick karega",
  commandCategory: "system",
  cooldowns: 0
};

let warnings = {};

module.exports.onStart = async function({ api, event, Users }) {
  const badwords = ["chutiya", "madarchod", "bhosdike", "randi", "gandu", "lund", "gaand", "behenchod"];
  const { threadID, messageID, senderID, body } = event;

  if (!body) return;

  const text = body.toLowerCase();
  if (badwords.some(word => text.includes(word))) {
    if (!warnings[senderID]) warnings[senderID] = 0;
    warnings[senderID]++;

    const name = await Users.getNameUser(senderID);

    if (warnings[senderID] < 3) {
      api.sendMessage(
        `⚠️ चेतावनी ${warnings[senderID]}/2\n👉 ${name}, गाली मत दो वरना ग्रुप से बाहर निकाल दिया जाएगा!`,
        threadID,
        messageID
      );
    } else {
      api.removeUserFromGroup(senderID, threadID, (err) => {
        if (err) return api.sendMessage("❌ यूज़र को निकालने में दिक्कत आ रही है, शायद मुझे एडमिन नहीं बनाया गया।", threadID);
        api.sendMessage(`🚫 ${name} ने बार-बार गाली दी, इसलिए उसे ग्रुप से बाहर निकाल दिया गया।`, threadID);
      });
      warnings[senderID] = 0; // reset
    }
  }
};
