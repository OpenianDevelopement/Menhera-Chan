const {addGuildSetting, initWarn, initXP, initModeration, initXPBlacklist} = require('../function/dbfunctions')
const { initWelcomeRole, initNews, initWelcome, initAntispam } = require('../function/dbfunctions(2)')
const discordwh = require("discord-webhook-messages");
const webhookURL = ""; /*the discord webhook url*/
if(webhookURL) {
    const webhook = new discordwh.Webhook(webhookURL);
}

module.exports = (client,guild) => {
    addGuildSetting(guild.id);
    initWarn(guild.id);
    initXP(guild.id);
    initModeration(guild.id);
    initXPBlacklist(guild.id);
    initWelcomeRole(guild.id);
    initWelcome(guild.id);
    initNews(guild.id);
    initAntispam(guild.id);
    webhookURL ? webhook.sendMessage(`**[ADD]** ${guild.name}`) : null;
}
