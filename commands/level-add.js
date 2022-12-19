const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "level-add",
  description: "Seviyenizi arttırın.",
  type: 1,
  options: [
    {
      type: 6,
      name: "kullanıcı",
      description: "Hangi kullanıcıyı etikileyecek?",
      required: true
    },
    {
      type: 10,
      name: "miktar",
      description: "Kaç level eklenecek?",
      required: true
    }
  ],

  
  run: async(client, interaction, db, Rank, AddRank, RemoveRank) => {

    await interaction.deferReply();
    
    const { user, guild, options } = interaction;
   
    const member = options.getUser("kullanıcı");
    
    if(!interaction.member.permissions.has(PermissionsBitField.ManageMessages)) {
      return interaction.followUp({ content: ":x: **|** Üzgünüm, gerekli izinler sende yok." })
    }
    
    db.add(`levelPos_${member.id}${guild.id}`, options.getNumber("miktar"))
    
    const level = db.fetch(`levelPos_${member.id}${guild.id}`) || 0;
    const xp = db.fetch(`xpPos_${member.id}${guild.id}`) || 0;
    
   AddRank(interaction, member, String(xp), String(level), "100");
  
    
  }
};
