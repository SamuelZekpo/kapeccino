module.exports = {
  config: {
    name: "help",
    aliases: ["help"],
    version: 1.0,
    author: "LiANE&Coffee",
    shortDescription: { en: "View all commands" },
    category: "members",
  },
  onStart: async function({ message, args }) {
    if (args[0]) {
      const command = args[0].toLowerCase();
      if (commandInfoMap[command]) {
        const { name, description, guide } = commandInfoMap[command];
        const response = `━━━━━━━━━━━━━━━━\n𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙽𝚊𝚖𝚎: ${name}\n𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${description}\n𝙶𝚞𝚒𝚍𝚎: ${guide}\n━━━━━━━━━━━━━━━━`;
        return message.reply(response);
      } else {
        return message.reply("Command not found.");
      }
    } else {
      const commandsList = `━━━━━━━━━━━━━━━━
𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 🐥 :
─╼━━━━━━━━╾─╮
│ - `adduser`
│ - `adminonly`
│ - `ai`
│ - `alldl`
│ - `all`
│ - `ban`
│ - `callad`
│ - `cmd`
│ - `count`
│ - `dalle`
│ - `filteruser`
│ - `guessnumber`
│ - `help`
│ - `kick`
│ - `lyrics`
│ - `notification`
│ - `onlyadminbox`
│ - `pinterest`
│ - `prefix`
│ - `remini`
│ - `removebg`
│ - `restart`
│ - `spotify`
│ - `tempmail`
│ - `tid`
│ - `translate`
│ - `uid`
│ - `unsend`
│ - `uptime`
╰─━━━━━━━━━╾─╯
	      

-𝚑𝚎𝚕𝚙 <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚗𝚊𝚖𝚎>
𝚃𝚘 𝚜𝚎𝚎 𝚑𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎
available 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜.

Example: -help ai
━━━━━━━━━━━━━━━━`;

      return message.reply(commandsList);
    }
  }
};
