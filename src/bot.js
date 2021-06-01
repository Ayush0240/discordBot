require('dotenv').config();
global.fetch = require("node-fetch");

const { Client, MessageAttachment } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', ()=> {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content === 'pratik')
    {
     
        message.channel.send('hello nunuless!');
    }
    else if(message.content === 'saish')
    {
        
        message.channel.send('hello dhol!');
    }
    else if(message.content === 'ayush')
    {
       
        message.channel.send('hello Eren!');
    }
    else if(message.content.startsWith(PREFIX))
    {
        const [CMD_NAME, FN, LS] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(" ")
            if (CMD_NAME === 'sup') {
        
                const attachment = new MessageAttachment('https://i.pinimg.com/originals/1a/92/ea/1a92ea54c4247fd1aafa6243cf86dcef.png');
                message.reply(attachment);
              }
              if (CMD_NAME === 'animequote') {
                fetch('https://animechan.vercel.app/api/random')
                    .then(response => response.json())
                    .then(quote => message.channel.send(`Anime: ${quote.anime} \nCharacter: ${quote.character} \nQuote: ${quote.quote}`))
              }
              if (CMD_NAME === 'randomjoke') {
                fetch('http://api.icndb.com/jokes/random')
                    .then(response => response.json())
                    .then(data => message.channel.send(data.value.joke))
              }
              if (CMD_NAME === 'joke') {
                if(LS&&FN){
                fetch(`http://api.icndb.com/jokes/random?firstName=${FN}&lastName=${LS}`)
                    .then(response => response.json())
                    .then(data => message.channel.send(data.value.joke))}
                    else
                    message.channel.send("Type the name properly Noob!")
              }

              if (CMD_NAME === 'help') {
               
                    message.channel.send("Hallo bois.\n\nThese are the commands:\n[$ is the prefix]\n\ncorona - For corona stats(india,maharashtra)\nrandomjoke - hehe for random joke\njoke firstname lastname - for a custom joke ;)\nsup - to know what the bot is upto\nanimequote - To get a dope ass anime quote\n\niamnotabot credits : Yashasin7\nCreators Message: I'll be adding stuff frequently to the bot!")
              }

              if (CMD_NAME === 'corona') {
                fetch('https://covid-api.mmediagroup.fr/v1/cases')
                    .then(response => response.json())
                    .then(data => message.channel.send(`
                    Confirmed cases(INDIA): ${data.India.All.confirmed}\nRecovered cases(INDIA): ${data.India.All.recovered}\nDeaths(INDIA): ${data.India.All.deaths}
                    \nConfirmed cases(Maharashtra): ${data.India.Maharashtra.confirmed}\nRecovered cases(Maharashtra): ${data.India.Maharashtra.recovered}\nDeaths(Maharashtra: ${data.India.Maharashtra.deaths}`
                 ))
              }

              
    }

});

client.login(process.env.discord_bot_token);


