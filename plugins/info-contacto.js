/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['contacto', 'contact']  
export default handler*/

import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

//const sentMsg = await conn.sendContactArray(m.chat, [
//[`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💖 Creadora `, `Solo temas de GataBot`, `centergatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 https://github.com/GataNina-Li', `🐱 GataNina-Li`],
//[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🐈 Bot de WhatsApp`, `📵 No hacer Spam por favor`, `gatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 ' + md, packname]
//], fkontak)
//await m.reply(`ʜᴇʟʟᴏ @${m.sender.split(`@`)[0]} Contactos disponibles`)

let contacts = global.owner.filter(c => c[2] === true) //filtrar info del array 
let numero = contacts.map(c => c[0]) 
let nombre = await conn.getName(numero)

const sentMsg = await conn.sendContactArray(m.chat, [
[`${numero[0]}`, `${nombre[0].notify}`, `💖 Creadora `, `Solo temas de GataBot`, `centergatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 https://github.com/GataNina-Li', `🐱 GataNina-Li`],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🐈 Bot de WhatsApp`, `📵 No hacer Spam por favor`, `gatabot@gmail.com`, `🇪🇨 Ecuador`, '🎁 ' + md, packname]
], fkontak)

  await m.reply(`Hola @${m.sender.split(`@`)[0]} Contactos disponibles`)
} 
handler.command = ['contacto', 'contact']  
export default handler
