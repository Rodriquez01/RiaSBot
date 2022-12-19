const { AttachmentBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "level",
  description: "Seviyenizi görüntüleyin.",
  type: 1,
  options: [],

  
  run: async(client, interaction, db, Rank, AddRank, RemoveRank) => {

    await interaction.deferReply();
    
    const { user, guild, options } = interaction;
    
    const level = db.fetch(`levelPos_${user.id}${guild.id}`) || 0;
    const xp = db.fetch(`xpPos_${user.id}${guild.id}`) || 0;
    
     var avatar1 = user.displayAvatarURL().split(".")[3]
  
  var avatar11 = avatar1+".png"
  
  console.log(avatar11)
    
    return Rank(interaction, String(xp), String(level), "100")
    
  }
};
