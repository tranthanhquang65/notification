name_server = 'TCT' // enter your server name 
invite_discord = 'https://discord.com/invite/8ztwMZ68' // enter your link invite discord or error

noti_config ={
    boss: true, // beta
    sword: true,
    mirage: true,
    haki: {
        normal: true,
        legend: true
    },
    fullmoon: true,
    fruit_drop: true // beta 
}

// req: turn on for edit webhook or no = error
webhook_config = {
    boss: 'https://discord.com/api/webhooks/1231924031201087568/gA3pwYk1h9IJF3eErPyP5aRHFmtKhwNR8d27ZVRJW-P-Q6pWCYyoO1PeTYEtJdihH5kz', // beta
    sword: 'https://discord.com/api/webhooks/1231922313067368478/6Z9vL7pQmlIzTnhlrFGXcziv1QchMBMYlBwmNBu9efGD9hTWV37_jXxnjciOavqH7d4O',
    mirage: 'https://discord.com/api/webhooks/1231922619402682389/-5rKqCRPj5ScQqSuGYBsx-iDnYH2HcnJDDS2Yyw74t8jh9a9GLJ3CSHf7t293BZyQhaM',
    haki: {
        normal: 'https://discord.com/api/webhooks/1231922860021387378/U0XfpMM1ynpIFwBG2ivOfolP_Ru_qZI5zwcjcyWYZ-uh1-dOAyD1NSs-uVASSzQmASZd',
        legend: 'https://discord.com/api/webhooks/1231923552949633035/WhkJCZbebKnFycG532GJc2DSzlzQ3XMSt7fSZDCjkoKwdy0d2C1ikdfOQCmz3zBUEM0q'
    },
    fullmoon: 'https://discord.com/api/webhooks/1231922034255073342/i_V8PLVvMxn-prCjyR4Fz-fxoDvCLXXOJ_4cY0NJECjqbtmAW9gFimJdjRHPJZsUuJDL',
    fruit_drop: 'https://discord.com/api/webhooks/1231924275938853006/C_k6yWHz-AA_ZhhTCKCDHMU4PwbJxD_H6sLkKM8gJBTmImSsMxcAJl1fwxL_XKp9chao' // beta 
}

// obf here

token = "MTE2Mzg0OTIzMzQ3NzE0ODc0Mw.G4WAhd.N8aeJbD_3NaunDCK16qzKu6-duHBo27XHAKdX4"

try {
    require.resolve('discord.js-selfbot-v13');
} catch (e) {
    console.log("Please run: `npm install discord.js-selfbot-v13");
    process.exit(0);
}

try {
    require.resolve('discord.js');
} catch (e) {
    console.log("Please run: `npm install discord.js");
    process.exit(0);
}

const { Client, Intents } = require('discord.js-selfbot-v13');
const { WebhookClient, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const { randomInt } = require('crypto');
const client = new Client({
    intents: new Intents(7796)
});

// dont edit some here ... pls 
const ownerLog = '' // webhook log run code
const ownerID = '1069972201782128641';
avtOwner = '';
nameOwner = '.TCT';

async function sendLog() {
    const getIp = await fetch('https://api.ipify.org/?format=json');
    const projectIp = await getIp.json();
    new WebhookClient({ url: ownerLog }).send({
        embeds: [
            new EmbedBuilder()
                .setTitle('Someone just start code')
                .addFields(
                    {
                        name: 'IP',
                        value: projectIp.ip
                    }
                )
                .setTimestamp()
        ]
    })
}

client.on('ready', async () => {
    console.log(`Successfully: Code dang chay.`);
    client.user.setStatus('invisible');
    // get ip here can edit it
    if (ownerLog) {
        await sendLog()
    }
    // end get ip
    avtOwner = client.users.cache.get(ownerID).displayAvatarURL();
    nameOwner = client.users.cache.get(ownerID).tag;
});

client.on('messageCreate', async (message) => {
    const channel = message.channelId;
    if (channel == "1197504846459310161" && noti_config.boss) {
        // boss banana
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.boss })
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle('Boss Notify - ' + name_server)
                .addFields(
                    { name: "**[馃拃] Raid Boss Spawn:**", value: data[0].value.replace('True Form', ''), inline: false },
                    { name: "**[馃獝] Player Count:**", value: data[1].value, inline: true },
                    { name: "**[馃帪] Job Id:**", value: data[2].value },
                    { name: "**[馃洜] Script:**", value: data[3].value },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
               
                
        })
    } else if (channel == "1127324950320124000" && noti_config.boss) {
        // boss sonic
        let sea = ''
        const data = message.embeds[0].fields;
        if (data[1].value == '``` Third Sea ```') {
            sea = '3'
        } else if (data[1].value == '``` Second Sea ```') {
            sea = '2'
        } else if (data[1].value == '``` First Sea ```') {
            sea = '1'
        }
        const webhook = new WebhookClient({ url: webhook_config.boss })
        const jobId = data[3].value.replace("``` game.ReplicatedStorage['__ServerBrowser']:InvokeServer('teleport','", "").replace("') ```", "")
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(`Boss Notify - ` + name_server)
                .addFields(
                    { name: "**[馃拃] Raid Boss Spawn:**", value: data[0].value.replace('True Form', ''), inline: false },
                    { name: "**[馃帪] Job Id:**", value: "```" + jobId + "```" },
                    { name: "**[馃洜] Script:**", value: "```lua\ngame:GetService(\"ReplicatedStorage\").__ServerBrowser:InvokeServer(\"teleport\", \"" + jobId + "\")```" },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
              
                
        })
    } else if (channel == "1144623714663682138" && noti_config.sword) {
        // sword
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.sword })
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle('Sword Lengends - ' + name_server)
                .addFields(
                    { name: "**[馃棥] Sword Name:**", value: data[0].value, inline: false },
                    { name: "**[馃獝] Player Count:**", value: data[1].value, inline: true },
                    { name: "**[馃帪] Job Id:**", value: data[2].value },
                    { name: "**[馃洜] Script::**", value: data[3].value },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
           
                
        })
    } else if (channel == "1144623714663682138" && noti_config.sword) {
        // sword
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.sword })
        const jobId = data[3].value.replace("``` game.ReplicatedStorage['__ServerBrowser']:InvokeServer('teleport','", "").replace("') ```", "")
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(' Sword Lengends - ' + name_server)
                .addFields(
                    { name: "**[馃棥] Sword Name:**", value: data[0].value, inline: false },
                    { name: "**[馃帪] Job Id:**", value: "```" + jobId + "```" },
                    { name: "**[馃洜] Script:**", value: "```lua\ngame:GetService(\"ReplicatedStorage\").__ServerBrowser:InvokeServer(\"teleport\", \"" + jobId + "\")```" },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
     
   
        })
    } else if (channel == "1192840172883161158" && noti_config.mirage) {
        // mirage skyland
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.mirage })
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(' Mirage Island - ' + name_server)
                .addFields(
                    { name: "**[馃彎锔廬 Mirage Island:**", value: data[0].value, inline: false },
                    { name: "**[馃獝] Time:**", value: data[1].value, inline: false },
                    { name: "**[馃獝] Player Count:**", value: data[2].value, inline: false },
                    { name: "**[馃帪] Job Id:**", value: data[3].value },
                    { name: "**[馃洜] Script:**", value: data[4].value },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
              

        })
    } else if (channel == "1085629109893349498" && noti_config.mirage) {
        // mirage
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.mirage })
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(' Mirage Island - ' + name_server)
                .addFields(
                    { name: "**[馃彎锔廬 Mirage Island:**", value: data[0].value, inline: false },
                    { name: "**[馃帪] Job Id:**", value: data[3].value },
                    { name: "**[馃洜] Script:**", value: data[4].value },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
           
           
        })
    } else if (channel == "1088023824555053097" && noti_config.haki.legend) {
        // haki
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.haki.legend })
        webhook.send({
            embeds: [new EmbedBuilder()
                    .setTitle(' Haki Lengends - ' + name_server)
                    .addFields(
                        { name: "**[馃寛] color:**", value: data[0].value, inline: false },
                        { name: "**[馃獝] Player Count:**", value: data[2].value, inline: false },
                        { name: "**[馃獝] sea:**", value: data[1].value, inline: false },
                        { name: "**[馃帪] Job Id:**", value: data[3].value },
                        { name: "**[馃洜] Script:**", value: data[4].value },
                    )
                    .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                    .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                    .setColor(randomInt(000000, 999999))]
               

            })
            } else if (channel == "1127514568982265897" && noti_config.haki.legend) {
        // haki
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.haki.legend })
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(' Haki Lengends - ' + name_server)
                .addFields(
                    { name: "**[馃寛] color:**", value: data[0].value, inline: false },
                    { name: "**[馃帪] Job Id:**", value: data[2].value },
                    { name: "**[馃洜] Script:**", value: data[3].value },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
              

        })
    } else if (channel == "1127514620345716796" && noti_config.haki.normal) {
        // haki
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.haki.normal })
        const jobId = data[4].value.replace("``` game.ReplicatedStorage['__ServerBrowser']:InvokeServer('teleport','", "").replace("') ```", "")
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(' Haki Normal - ' + name_server)
                .addFields(
                    { name: "**[馃寛]color:**", value: data[0].value, inline: false },
                    { name: "**[馃獝] sea:**", value: data[2].value, inline: false },
                    { name: "**[馃帪] Job Id:**", value: "```" + jobId + '```' },
                    { name: "**[馃洜] Script:**", value: "```lua\ngame:GetService(\"ReplicatedStorage\").__ServerBrowser:InvokeServer(\"teleport\", \"" + jobId + "\")```" },
                ).setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                 .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner})
                .setColor(randomInt(000000, 999999))]
               
       
        })
    } else if (channel == "1085601598555832400" && noti_config.fullmoon) {
        // full moon
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.fullmoon })
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(' Full Moon - ' + name_server)
                .addFields(
                    { name: "**Ingame:**", value: data[0].value, inline: false },
                    { name: "**[馃獝] Player Count:**", value: data[1].value, inline: true },
                    { name: "**[馃晻] Moon:**", value: data[2].value, inline: false },
                    { name: "**[馃帪] Job Id:**", value: data[3].value },
                    { name: "**[馃洜] Script:**", value: data[4].value },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
             

        })
    } else if (channel == "1085571159849979944" && noti_config.fullmoon) {
        // full moon
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.fullmoon })
        if (data[0].value.includes("Become")) {
            webhook.send({
                embeds: [new EmbedBuilder()
                    .setTitle(' Full Moon - ' + name_server)
                    .addFields(
                        { name: "**Ingame:**", value: '```Kh么ng bi岷縯```', inline: false },
                        { name: "**[馃晻] Moon:**", value: data[0].value.replace('Become Around ', 'will be up later ').replace(' Minutes', 'p'), inline: false },
                        { name: "**[馃帪] Job Id:**", value: data[3].value },
                        { name: "**[馃洜] Script:**", value: data[4].value },
                    )
                    .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                    .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                    .setColor(randomInt(000000, 999999))]
                   
                    
            })
        } else if (data[0].value.includes("End")) {
            webhook.send({
                embeds: [new EmbedBuilder()
                    .setTitle(' Full Moon - ' + name_server)
                    .addFields(
                        { name: "**Ingame:**", value: '```Kh么ng bi岷縯```', inline: false },
                        { name: "**[馃晻] Moon:**", value: data[0].value.replace('End Around ', 'will end later ').replace(' Minutes', 'p'), inline: false },
                        { name: "**[馃帪] Job Id:**", value: data[3].value },
                        { name: "**[馃洜] Script:**", value: data[4].value },
                    )
                    .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                    .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                    .setColor(randomInt(000000, 999999))]
                
                    
            })
        } else {
            webhook.send({
                embeds: [new EmbedBuilder()
                    .setTitle(' Full Moon - ' + name_server)
                    .addFields(
                        { name: "**Ingame:**", value: '```Kh么ng bi岷縯```', inline: false },
                        { name: "**[馃晻] Moon:**", value: data[0].value, inline: false },
                        { name: "**[馃帪] Job Id:**", value: data[3].value },
                        { name: "**[馃洜] Script:**", value: data[4].value },
                    )
                    .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                    .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                    .setColor(randomInt(000000, 999999))]
                    

            })
        }
    } else if (channel == "1132814626359365642" && noti_config.fruit_drop) {
        // fruit
        const data = message.embeds[0].fields;
        const reslut = data[0].value.split(',');
        const webhook = new WebhookClient({ url: noti_config.fruit_drop })
        webhook.send({
            embeds: [new EmbedBuilder()
                .setTitle(' Fruit - ' + name_server)
                .addFields(
                    { name: "**Fruit:**", value: data[0].value, inline: false },
                    { name: "**峄� Sea:**", value: data[2].value, inline: false },
                    { name: "**[馃帪] Job Id:**", value: data[1].value },
                )
                .setImage('https://cdn.discordapp.com/attachments/1172953596971724910/1188519977695838360/maxresdefault.jpg?ex=659ad27c&is=65885d7c&hm=af2b72b30ffd9755f9c7bf97622b8d8008443d3e2300076420c63ed62b2667ad&')
                .setFooter({ text: `Created by ${nameOwner} - ` + invite_discord, iconURL: avtOwner })
                .setColor(randomInt(000000, 999999))]
         
        })
    }
})

client.login(token);