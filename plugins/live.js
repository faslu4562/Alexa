/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
re-edited by afnan jsl
re-edited by Amalser
*/

const Alexa = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('system_stats');
const request = require('request');
const os = require('os');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })
const {skbuffer} = require('../buffer');
var clh = { cd: 'L2pzbC9BbGV4YQ', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
var split = Config.ABU_SER.split('/');
         sk2 = split[1];
         sk1 = split[0];


let whb = Config.WORKTYPE == 'public' ? false : true

   Alexa.addCommand({pattern: 'live', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
       	
        var jsl_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var jsl_here = new Date().toLocaleDateString(get_localized_date)
	var afnjsl = '```⏱ Time :' + jsl_say + '```\n\n ```📅 Date :' + jsl_here + '```'
	   
	   	     var r_text = new Array ();    
r_text[0] = "The greatest glory in living lies not in never falling, but in rising every time we fall.\n           -Nelson Mandela";
r_text[1] = "The way to get started is to quit talking and begin doing.\n           -Walt Disney";
r_text[2] = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\n        -Steve Jobs";
r_text[3] = "If life were predictable it would cease to be life, and be without flavor.\n        -Eleanor Roosevelt";
r_text[4] = "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\n        -Oprah Winfrey";
r_text[5] = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\n        -James Cameron";
r_text[6] = "Spread love everywhere you go. Let no one ever come to you without leaving happier.\n        -Mother Teresa";
r_text[7] = "When you reach the end of your rope, tie a knot in it and hang on.\n        -Franklin D. Roosevelt";
r_text[8] = "Always remember that you are absolutely unique. Just like everyone else.\n        -Margaret Mead";
r_text[9] = "Don't judge each day by the harvest you reap but by the seeds that you plant.\n        -Robert Louis Stevenson";
r_text[10] = "The future belongs to those who believe in the beauty of their dreams.\n        -Eleanor Roosevelt";
r_text[11] = "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.\n        -Helen Keller";
r_text[12] = "It is during our darkest moments that we must focus to see the light.\n        -Aristotle";
r_text[13] = "Do not go where the path may lead, go instead where there is no path and leave a trail.\n          -Ralph Waldo Emerson";
r_text[14] = "You will face many defeats in life, but never let yourself be defeated.\n        -Maya Angelou";
r_text[15] = "The greatest glory in living lies not in never falling, but in rising every time we fall.\n        -Nelson Mandela";
r_text[16] = "In the end, it's not the years in your life that count. It's the life in your years.\n        -Abraham Lincoln";
r_text[17] = "Never let the fear of striking out keep you from playing the game.\n        -Babe Ruth";
r_text[18] = "Life is either a daring adventure or nothing at all.\n        -Helen Keller";
r_text[19] = "Many of life's failures are people who did not realize how close they were to success when they gave up.\n        -Thomas A. Edison";
r_text[20] = "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.";
r_text[21] = "Keep smiling, because life is a beautiful thing and there's so much to smile about.\n           -Marilyn Monroe";
r_text[22] = "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.\n         -Dr. Seuss";
r_text[23] = "Life is made of ever so many partings welded together.\n        -Charles Dickens";
r_text[24] = "Success is not final; failure is not fatal: It is the courage to continue that counts.\n         -Winston S. Churchill";
r_text[25] = "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.\n        -Barack Obama";
r_text[26] = "The only person you are destined to become is the person you decide to be.\n        -Ralph Waldo Emerson";
r_text[27] = "When we strive to become better than we are, everything around us becomes better too.\n       -Paulo Coelho";
r_text[28] = "There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.\n       -Rick Warren";
r_text[29] = "You only pass through this life once, you don't come back for an encore.\n       -Elvis Presley";
r_text[30] = "motivate cheyaan aarkum kayyum ath cheyth kaanikkaaana paad.\n       -Pinky";    
var i = Math.floor(31*Math.random())
       
    if (Config.ALIVEMSG.includes('{pp}')) {
        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: Config.ALIVEMSG.replace('{pp}', '').replace('{qt}', r_text[i])}); });
	}    
	   else {
		   
		   var a_jsl = new Array ();

        a_jsl[0] = Config.LOGO_SK
	 var p = Math.floor(1*Math.random())

        var jsl_alive = await axios.get(`${a_jsl[p]}`, { responseType: 'arraybuffer' })
        
        var img = await skbuffer(Config.LOGOSK)
// send a buttons message!credit Abu
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: sk1 }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: sk2 }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '\n ' + wish + '\n💠ᴛɪᴍᴇ : ' + plk_say + '\n💠ᴅᴀᴛᴇ : ' + plk_here + '\n💠ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOT+'\n\n'+Config.ALIVEMSG+'\n',
          footerText: '© '+Config.BOT+' ™',
          buttons: buttons,
          headerType: 1
      }

        await message.client.sendMessage(message.jid, Buffer(jsl_alive.data), MessageType.image,button, {mimetype: Mimetype.png,button, caption: Config.ALIVEMSG.replace('{qt}', r_text[i])})
	   }
    }));
