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

  sessionName:process.env.SESSION_ID || "SUHAIL_19_55_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRoMnRtSXhQMGlqa2hxeGdSemRiSzZVWVdmeTRZRHdOaVBnVDFjQmZ0a2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEzNDg4OTc4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjY5MTUyNjcwRENEQUVEMTE5Q0NEMzAzNEVDODBCQkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NzYyOTQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkE0UzR3UENNVFoyZDcxUVUzeElNT0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFlN2E0YTQtNGQ2MC00OWE1LTgwMGUtMWFmMDhiZTcyNmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDc2LFxuICAgICAgODMsXG4gICAgICAyMDQsXG4gICAgICAxMTksXG4gICAgICAxMzcsXG4gICAgICAxMTIsXG4gICAgICAyMzksXG4gICAgICAxOSxcbiAgICAgIDEwNixcbiAgICAgIDkxLFxuICAgICAgMTgsXG4gICAgICA2MyxcbiAgICAgIDEyNyxcbiAgICAgIDE3NyxcbiAgICAgIDE2MyxcbiAgICAgIDI1NCxcbiAgICAgIDE2OSxcbiAgICAgIDE5MixcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDIyOCxcbiAgICAgIDE2OCxcbiAgICAgIDE1LFxuICAgICAgMTk1LFxuICAgICAgNyxcbiAgICAgIDEwLFxuICAgICAgOTIsXG4gICAgICAzMyxcbiAgICAgIDM3LFxuICAgICAgMzAsXG4gICAgICAxNyxcbiAgICAgIDE2MCxcbiAgICAgIDE2MixcbiAgICAgIDI0NixcbiAgICAgIDg5LFxuICAgICAgMjEzLFxuICAgICAgMzAsXG4gICAgICAxNzQsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMTDY5VzYzQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNDg4OTc4MzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hc25hYmloYTkzXCIsXG4gICAgXCJsaWRcIjogXCIxMTk4MzQzNjkwODEzOTQ6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS080bjljRUVMS29xN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwaTQxckdKSldFM296R0VOZXJlRHBSQjZxamtMUi9FYVVhYW44ajVvNHd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImd1eWRVS1BCcnhlbDhSRkRucmlWdUlUYmgyUHZNMDRvbVFiOVNGM1BLQWFoeUoxcVFBUDhEbjdnSHd1ekpVU1F0SjliZTd1c1hIZ2gvTUJVL1FsZEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE4Y2h4UThNWnZHdUE0MXNvTXR4S1pvVHlzTmN1Y0UxYXR1YWNEVElFSzl3QThWZjAwOHljMGdhOC9BQW4zQlBQTDlhTDY4KzBPQjdFaUVzdEp3Yml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzQ4ODk3ODM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODc2MjkzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB6c1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHpzLmpzb24iOiAie1wia2V5RGF0YVwiOlwia09pUW5BTjR0MmdHdGRVM3VSWnUwT3RWRVJKSGVjRnFyb3dabm5jbU5hUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjU2NzA5MTUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI4NzU5OTQ3MTcwXCJ9Igp9",  // PUT SESSION ID HERE 
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
 
