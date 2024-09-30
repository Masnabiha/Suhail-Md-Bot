const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348134889783";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_15_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTnYvdTh4MWlnZ3N1d0ZKZHluWEVSQjlCNWhDWnhOcVRsTUpldmdsa1Q5MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM0ODg5NzgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRDVGMDRBM0Y0MUVCRTAxQjlBRDY0QTJDOEM4NEZGOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc2OTEyOTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUXJ2SVdzeWtSdjJwVW5DZlhVci1jZ1wiLFxuICBcInBob25lSWRcIjogXCI4OTEzZDNiNy0zYTEzLTQ0NTYtYWYyNy1jOWQ1YzZjMzJhOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTU1LFxuICAgICAgMTE4LFxuICAgICAgMzksXG4gICAgICA5MCxcbiAgICAgIDE4NCxcbiAgICAgIDIzNixcbiAgICAgIDI1MyxcbiAgICAgIDEzMCxcbiAgICAgIDI0NSxcbiAgICAgIDMzLFxuICAgICAgMTEzLFxuICAgICAgNTEsXG4gICAgICAxOTksXG4gICAgICA4MCxcbiAgICAgIDk3LFxuICAgICAgNDUsXG4gICAgICAxLFxuICAgICAgMjQsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgNTQsXG4gICAgICA3NSxcbiAgICAgIDEyMCxcbiAgICAgIDE0NCxcbiAgICAgIDIzMSxcbiAgICAgIDc0LFxuICAgICAgMCxcbiAgICAgIDExMCxcbiAgICAgIDE0NixcbiAgICAgIDUxLFxuICAgICAgMjQwLFxuICAgICAgMTA5LFxuICAgICAgMTg0LFxuICAgICAgMTE0LFxuICAgICAgMjksXG4gICAgICA5MyxcbiAgICAgIDc2LFxuICAgICAgMzUsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGNTdFOUxBQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNDg4OTc4Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFzbmFiaWhhOTNcIixcbiAgICBcImxpZFwiOiBcIjExOTgzNDM2OTA4MTM5NDo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0oyNG45Y0VFSnYwNmJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicGk0MXJHSkpXRTNvekdFTmVyZURwUkI2cWprTFIvRWFVYWFuOGo1bzR3dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEenZyQllpL2xpb1lXSDF3V0FoYkRBKy9yZUR6Q0JKcU95d1kxR0hrSkc3SnRjbXNVYWdEQzhOaWlKY0tCR29OVHBHdkZzUXk4cHpjZzFtWTlHUEtDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiM3ZMUUx3cEFaRUFoOG5Fb2F6NDFQZkRDcWN0TnVKNGNicDl0Vit3VjhUaVNINWZydzdiMEVLTXhFK1IwQ0M0WndXS0JENXlLaDlPQWFWVmJkSDZoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM0ODg5NzgzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzY5MTI5NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
