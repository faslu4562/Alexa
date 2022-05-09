const Alexa = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const {skbuffer} = require('../buffer');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Alexa.addCommand({pattern: 'git', fromMe: false, desc: 'command help menu'}, (async (message, match) => {
var img = await skbuffer(Config.LOGOSK)
   if (message.reply_message === false);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
let id = match[1];
    ffmpeg(location)
        .format('mp3')
        .save('output.mp3')
        .on('end', async () => {
   
    var r_text = new Array ();
    
    r_text[0] = Config.LOGOSK
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
           
             await message.client.sendMessage(id, fs.readFileSync('output.mp3'), MessageType.image.audio, {mimetype: Mimetype.png.mp4Audio, {qouted: message.data, thumbnail: img, contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: 'Abu ser', body: 'simple wa bot', previewType:"text",thumbnail: img,sourceUrl:`https:/github.com/Afx-Abu/Abu_ser`}}})
});}));
