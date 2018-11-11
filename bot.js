const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame(` INCR Server l-link $help `,'https://www.twitch.tv/gamestop13');
    console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بك في سرفرنا ');
  }
});

client.on('message', msg => {
  if (msg.content === 'INCR > All') {
    msg.reply('ايه غصب عنك INCR > All ');
  }
});

client.on('message', msg => {
  if (msg.content === 'احبك') {
    msg.reply('احنا نموت فيك');
  }
});

client.on('message', msg => {
  if (msg.content === 'كيف اخش الكلان') {
    msg.reply(' روح على روم #announcements وبتلاقي الطريقه');
  }
});

client.on('message', msg => {
  if (msg.content === 'الكلان منوب') {
    msg.reply('انت النوب يا حلو');
  }
});

client.on('message', msg => {
  if (msg.content === 'How to join INCR') {
    msg.reply('ادخل عل رابط https://docs.google.com/forms/d/e/1FAIpQLSeQFPc5JjhzxLshHNjIuNgeHjM-i5EReJDME18FWV0SKlzxSg/viewform ');
  }
});

client.on('message', msg => {
  if (msg.content === 'i want to join incr') {
    msg.reply('ادخل عل رابط https://docs.google.com/forms/d/e/1FAIpQLSeQFPc5JjhzxLshHNjIuNgeHjM-i5EReJDME18FWV0SKlzxSg/viewform ');
  }
});



client.on('message', message => {
    if (message.content.startsWith("-link")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});



var prefix = "$"
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on('message', message => {
  if (message.content.startsWith("!readyserver")) {
   if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
   message.guild.createRole({
name: 'King',
color: 'RANDOM',
position: (1),
permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
  name: 'Prince',
  color: 'RANDOM',
  position: (2),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
      'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
       'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({
  name: 'Commander',
  color: 'RANDOM',
   position: (3),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({
  name: 'Admin',
  color: 'RANDOM',
  postion: (4),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Vip',
  color: 'RANDOM',
  postion: (5),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Active',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**Roles Was Succsesfluy Created**')
.catch(console.error);
  }
});
client.on('message', message => {
  if (message.content.startsWith("!readyserver")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Dont Have ``MANAGE_CHANNELS`` **Premission**`);
   message.guild.createChannel('rules', 'text')
   message.guild.createChannel('welcome', 'text')
   message.guild.createChannel('chat', 'text')
   message.guild.createChannel('youtubers', 'text')
   message.guild.createChannel('giveaway', 'text')
   message.guild.createChannel('shop', 'text')
   message.guild.createChannel('bot', 'text')
   


   

message.channel.sendMessage('**Channels Was Succsesfluy Created**')
}
});

client.on('message', message => {
  if (message.content.startsWith("!readyserver")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
  }
});

var math = require('mathjs') // npm i mathjs
client.on("message", async msg => {

    if (msg.channel.type !== "teat") return undefined;

    //if (msg.auhtor.bot) return undefined;

    var args = msg.content.split(" ")

    var prefix = "!"

  if (msg.content.toLowerCase().startsWith(prefix + "math")) {

    if (!args[1]) return msg.channel.send("DiscordAPI Err : Missing args.")

    if (args[1].length == 1) return msg.channel.send("JUST ONE NUMBER?????");

    var count = parseInt(args[1]);

    if (isNaN(count)) return msg.channel.send('No nigga');

    try {
      idk = await math.eval(args[1])
    } catch (e) {
      return msg.channel.send("ERRRRRRRRRRRRRRRRRRRRRRRR")
    }
    await msg.channel.send(idk)
  }
});

client.on("message", async message => {
  if(!message.channel.guild) return;
var prefix= "$";
  if(message.content.startsWith(prefix + 'server')) {
  let guild = message.guild
  let channel = message.channel
  let guildicon = guild.icon_url
  let members = guild.memberCount
  let bots = guild.members.filter(m => m.user.bot).size
  let humans = members - bots
  let allchannels = guild.channels.size
  let textchannels = guild.channels.filter(e => e.type === "text")
  let voicechannels = guild.channels.filter(e => e.type === "voice")
    var embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle(`معلومات عن السيرفر`)
    .setDescription(`معلومات عن : ${guild.name}`)
    .addField("صاحب السيرفر :", `${guild.owner}`, true)
    .addField("أيدي السيرفر :", `${guild.id}`, true)
    .addField("موقع السيرفر :", `${guild.region}`, true)
    .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
    .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
    .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
    .addField("عدد اعضاء السيرفر :", `${members}`, true)
    .addField("عدد البوتات :", `${bots}`, true)
    .addField("عدد الاشخاص :", `${humans}`, true)
    .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
    .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
    .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)

 message.channel.send({ embed: embed });

}
});

const adkar = [
  '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**‏اذكار  |  **أستغفر الله .',     
  '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
  '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
  '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
  '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
  '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
  '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
]
client.on('message', message => {
    var prefix = "$"
if (message.author.bot) return;
if (message.content.startsWith(prefix + 'اذكار')) {
  if(!message.channel.guild) return;
var client= new Discord.RichEmbed()
.setTitle("INCR GANG .")
.setThumbnail(message.author.avatarURL)
.setColor('RANDOM')
.setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
               .setTimestamp()
message.channel.sendEmbed(client);
message.react("??")
}
});



  client.on('message', message => {
    var prefix = "$";
    var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
            var args = message.content.split(" ").slice(1);
        if(message.content.startsWith(prefix + 'نكت')) {
             var cat = new Discord.RichEmbed()
    .setImage(cats[Math.floor(Math.random() * cats.length)])
    message.channel.sendEmbed(cat);
        }
    });


    var prefix = "$";
    client.on('message', message => {
      if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('-link هذا الرابط صالح ل 100 مستخدم فقط لمده 24 ساعه فقط   ')
.addField('$t فتح تيكيت اذا عندك مشكله')
.addField('!math اله حاسبه  ') 
.addField('$server معلومات عن سيرفر ') 
.addField('$اذكار ')
.addField('$نكت')
.addField('$skin minecraft')
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});


var prefix = "$";
client.on('message', message => {
  if (message.content.startsWith("kick")) {
      var mention = message.mentions.members.first();
      if(!mention) return message.channel.send("يجب منشن العضو");
  
      mention.kick("By: " + message.author.tag);
      
      message.channel.send("تم أعطاء كيك الى : " + mention.tag);
  };
  });

  client.on('message',function(message) {
    let prefix = "$"; //بريفيكسك
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
  if (message.author.id !== '259239733769666560') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  if(!message.author.id === '481581550488780802') return;
if(!args) return;
message.channel.send(`**${args}**`);
}
});


client.on('message',message =>{
  var prefix = "$";
if(message.content.split(' ')[0].toLowerCase() == prefix + 'inv') {
let guild = message.guild
var codes = [""]
var nul = 0
  
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}

})
if (nul > 0) {
  const e = new Discord.RichEmbed()
  .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
  .setColor('#36393e')
  message.channel.send(e)
}else {
                   var embed = new Discord.RichEmbed()
                    .setColor("#000000")
                    .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                   message.channel.send({ embed: embed });
                    return;
                }
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `Invites :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});

client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});

var prefix = "$";
client.on('message', (message) => {
  if (message.content == prefix+'sad') {     ///تقدر تغير الامر
  var rand2 = Math.round(Math.random()*3)
  switch (rand2) {

      case 0: rand2=("https://i.imgur.com/FoHPk21.gif");    ///تقدر تغير روابط الصور
      
      break;

      case 1:
                     rand2=("https://i.imgur.com/ZcSy6qT.gif");
                     
       break;
                  
      case 2:
                     rand2=("https://i.imgur.com/9qDl6iv.gif");
                     
       break;
          
      case 3:
                     rand2=("https://i.imgur.com/WUkVXoU.gif");
                     
       break;
          }
  message.channel.send(rand2);
  }
});

client.on('message', message =>{
  if(message.content === '$ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});

client.on('guildMemberAdd', member=> {
  member.addRole(member.guild.roles.find("name","! :heavy_check_mark:『Member』"));
  });

  client.on("guildMemberAdd", msg => {
    var AlphaE = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(msg.user.username, msg.user.avatarURL)
  .setThumbnail(msg.user.avatarURL)
  .setTitle(`
  مرحبا بك في السيرفر
  نتمى ان تدخل الي السيرفر
  `)
  .addField("هذي الرساله خاصه بك يا حبيبي", `${msg.user.tag}`, true)
  .addField(`هذا الرابط خاصه بك`,`Link`, true)
   .setFooter(msg.user.tag, msg.user.avatarURL, true)
  msg.user.sendMessage(AlphaE);
  });

client.on('ready', () => {
var x = client.channels.get("483330311749632000");
if (x) x.join();
});

client.on("message", message => {
  var prefix = "$"
  if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
      if(command === "skin") {
              const args = message.content.split(" ").slice(1).join(" ")
      if (!args) return message.channel.send("** اكتب اسم اسكنك **");
      const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
  message.channel.send(image)
      }
  });

  client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);
