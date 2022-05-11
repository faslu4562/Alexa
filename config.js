/* Copyright (C) 2020 Yusuf Usta.
WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.ALEXA_CODE === undefined ? '' : process.env.ALEXA_CODE,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://www.linkpicture.com/q/millie-bobby-brown-pandora-me-collection-5k-jx-1280x1024.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    WELCOME: process.env.WELCOME === undefined ? 'pp' : process.env.WELCOME,
    OWNER: process.env.OWNER_NAME === undefined ? 'ғᴀsɪʟ' : process.env.OWNER_NAME,
    PHONE: process.env.ALL_NUMBER === undefined ? '919539613960' : process.env.ALL_NUMBER,   
    NUMBER: process.env.NUMBER === undefined ? 'wa.me/919539613960' : process.env.NUMBER, 
    OA_NAME: process.env.DEPLOYER === undefined ? 'ғᴀsɪʟ-ɴx' : process.env.DEPLOYER,
    ALL: process.env.ALL_CAPTION === undefined ? 'Mᴀᴅᴇ ʙʏ ɴx' : process.env.ALL_CAPTION,
    MENTION: process.env.TAG_REPLY === undefined ? '919539613960@s.whatsapp.net' : process.env.TAG_REPLY,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    AFPLK: process.env.YT_PASSWORD === undefined ? false : process.env.YT_PASSWORD,
    ABU_SER: process.env.ALIVE_BUTTON === undefined ? 'Bᴏʏ/ɢɪʀʟ' : process.env.ALIVE_BUTTON,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    INBO1: process.env.INBO_BLOCK === undefined ? 'true' : process.env.INBO_BLOCK,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOT: process.env.BOT_NAME === undefined ? '⊢‒‒‒ ⋈ ᴀʟᴇxᴀ ᴡᴀ ʙᴏᴛ ⋈ ‒‒‒⊣' : process.env.BOT_NAME,
    BOTSK: process.env.BOT_NAME === undefined ? 'ᴀʟᴇxᴀ ᴡᴀ ʙᴏᴛ' : process.env.BOT_NAME,
    LOGOSK: process.env.ALL_IMG === undefined ? 'https://www.linkpicture.com/q/millie-bobby-brown-pandora-me-collection-5k-jx-1280x1024.jpg' : process.env.ALL_IMG,
    SKDL: process.env.DIALOGUE === undefined ? 'girlsinte number undo nenba' : process.env.DIALOGUE,
    JID: process.env.VERIFIED === undefined ? '0@s.whatsapp.net' : process.env.VERIFIED,
    SKV: process.env.V_HEADER === undefined ? '*ғᴀsɪʟ-ɴx*' : process.env.V_HEADER,
    NOLOG: process.env.NO_LOG === undefined ? 'true' : process.env.NO_LOG,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? '```W8 cheyy nenba```' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? '```Uploading bruh..```' : process.env.SONGU,
    CHATBOT: process.env.CHAT_BOT === undefined ? 'false' : process.env.CHAT_BOT,
    SAID: process.env.BGM_DURATION === undefined ? '39999600' : process.env.BGM_DURATION,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BOT_PRESENCE: process.env.BOT_PRESENCE === undefined ? 'online' : process.env.BOT_PRESENCE,
    PLK: process.env.OWNER_NAME === undefined ? 'FASIL-NX' : process.env.OWNER_NAME,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    INSTA: process.env.INSTA_LINK === undefined ? 'https://instagram.com/linix_00' : process.env.INSTA_LINK,
    GROUP: process.env.GROUP_LINK === undefined ? 'https://chat.whatsapp.com/HafqIdLYMqIHlYYdumirxG' : process.env.GROUP_LINK,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    ALLEMOJI: process.env.CMD_LIST === undefined ? 'ғᴀsɪʟ🎗️/💝/✨/📝' : process.env.CMD_LIST,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'Note this' : process.env.TAG_HEADER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    YAK: process.env.YAK === undefined ? '919539613960,0' : process.env.YAK,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "919072790587-1635775355",
    SUPPORT2: "27634923280-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
