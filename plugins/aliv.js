const Alexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const {skbuffer} = require('../buffer');
var clh = { cd: 'L2pzbC9BbGV4YQ', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
var img = await skbuffer(Config.LOGOSK)
// send a buttons message!credit Abu
 var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
var wish = ''
if (hrs >= 00 && hrs <= 12) wish = '𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶⛅'
if (hrs >= 12 && hrs <= 15) wish = '𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝚁𝙽𝙾𝙾𝙽🌞'
if (hrs >= 15 && hrs <= 18) wish = '𝙶𝙾𝙾𝙳 𝙴𝚅𝙰𝙽𝙸𝙽𝙶🌥'
if (hrs >= 18 && hrs <= 23) wish = '𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝚃𝙷🌙'

    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.ALEXAALIVE_BUTTON }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: Config.BUTTON_TWO }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '\n ' + wish + '\n💠ᴛɪᴍᴇ : ' + plk_say + '\n💠ᴅᴀᴛᴇ : ' + plk_here + '\n💠ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOT+'\n\n'+Config.ALIVEMSG+'\n',
          footerText: '© '+Config.BOT+' ™',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 990,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});

}));