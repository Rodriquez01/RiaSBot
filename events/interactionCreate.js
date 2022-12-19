const { Collection, EmbedBuilder } = require("discord.js");
const db = require("croxydb");
const { readdirSync } = require("fs");

const Rank = require("../func/Rank.js");
const AddRank = require("../func/AddRank.js")
const RemoveRank = require("../func/RemoveRank.js")

module.exports = async(client, interaction) => {

  if(interaction.isButton()) {
    if(interaction.customId === `clear_${interaction.user.id}`) {
        interaction.message.delete();
    } 
  }   

  
  
  if(interaction.isChatInputCommand()) {

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db, Rank, AddRank, RemoveRank);


      }


    });
  }

};
