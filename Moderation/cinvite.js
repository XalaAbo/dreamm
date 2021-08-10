const { MessageEmbed, Discord } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "cinvite",
  category: "admin",
  permissions: "MANAGE_CHANNELS",
  bot: ["MANAGE_CHANNELS"],
  async execute(message, args, client) {
    message.delete();
    const channels =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(`${args[0]}`) ||
      message.guild.channels.cache.find(x => x.name === `${args.join(" ")}`) ||
      message.channel;
    let check;

    if (args[0] === "temp") {
      check = "true";
    } else if (args[1] === "temp") {
      check = "true";
    } else {
      check = "false";
    }

    let check2;

    if (args[0] === "temp") {
      check2 = "86400";
    } else if (args[1] === "temp") {
      check2 = "86400";
    } else {
      check2 = "0";
    }

    channels

      .createInvite({
        temporary: `${check}`,

        maxAge: `${check2}`,

        maxUses: 0,

        reason: `Requested By : ${message.author.username}`
      })

      .then(InviteCode =>
        message.lineReplyNoMention(
          new MessageEmbed()

            .setColor(`#116d56`)

            .setTitle(`${channels.name} Invite`)

            .addField(`Link`, `https://discord.gg/${InviteCode.code}`)

            .setFooter(`Requested By : ${message.author.username}`)

            .setTimestamp()
        )
      );
  }
};