const db = require("croxydb");
const { PermissionFlagsBits  } = require("discord.js");

module.exports = async(client, message) => {
  if(message.author.bot) return;
  
  const xp = db.fetch(`xpPos_${message.author.id}${message.guild.id}`);
  
  if(xp >= 100) {
    db.subtract(`xpPos_${message.author.id}${message.guild.id}`, xp);
    db.add(`levelPos_${message.author.id}${message.guild.id}`, 1)
    
    return message.reply({ content: `GG! ${message.author}, artık yeni seviyene ulaştın, tebrikler!` })
  } else {
   return db.add(`xpPos_${message.author.id}${message.guild.id}`, 0.5); 
  }
  
  
}