module.exports.config = {
    name: "gfdefensepro",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "Anurag Mishra",
    description: "Anurag + Arohi defense system (auto roast with desi gaali)",
    commandCategory: "protection",
    cooldowns: 1,
};

module.exports.handleEvent = async function({ api, event }) {
    const text = event.body ? event.body.toLowerCase() : "";

    // Common gaali words
    const galiWords = [
        "chutiya", "mc", "bc", "bsdk", "madarchod", "bhosdike",
        "randi", "gaand", "lavde", "gandu", "chu", "rundi",
        "tatti", "kutte", "suvar", "harami", "kamina", "bewakoof"
    ];

    // Roast replies pool (random choose karega)
    const roasts = [
        g => `😡 अबे ${g}! अनुराग बॉस और आरोही क्वीन के बारे में ज़ुबान चलाई? तेरे बाप की औक़ात नहीं है!`,
        g => `👊 ${g}... देख, Anurag aur Arohi ka naam लेने की औक़ात तेरी औलादों में भी नहीं!`,
        g => `😂 ओ ${g}! Anurag aur Arohi ka naam गंदा करेगा? तेरी पूरी 7 पीढ़ियों पे लानत!`,
        g => `🔥 ${g}! सुन ले, Anurag aur Arohi husband-wife हैं, तू उनके बीच बोलेगा तो मुँह तोड़ जवाब मिलेगा!`,
        g => `😏 अबे ${g}, Anurag ko boss aur Arohi ko queen बोल, वरना तेरा नाम गली के नाली में लिख दूँगा!`,
        g => `🤬 ${g}! Anurag aur Arohi ke liye गाली? तेरे jesi औक़ात वाले को तो गली का कुत्ता भी serious नहीं लेता!`
    ];

    if ((text.includes("anurag") || text.includes("arohi")) && galiWords.some(g => text.includes(g))) {
        const matchedGali = galiWords.find(g => text.includes(g));
        const randomRoast = roasts[Math.floor(Math.random() * roasts.length)](matchedGali);

        api.sendMessage(randomRoast, event.threadID, event.messageID);
        api.setMessageReaction("👿", event.messageID, () => {}, true);
    }
};
