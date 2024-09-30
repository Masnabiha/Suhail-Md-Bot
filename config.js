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

  sessionName:process.env.SESSION_ID || "SUHAIL_08_33_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldpUmNQNjVUYmRwY1ZSOW5rRk11NTZ5c2JyUjdITEo1WnF1NFJjbnNqcVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd2QndUU2dkU1Eya3BZVHpxS0RUWndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDAyYjZkZjUtYmI1NC00NTc4LTgwYWItMWQ5ODQxYmJkODZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDMsXG4gICAgICAxMTAsXG4gICAgICAxMDUsXG4gICAgICAxMyxcbiAgICAgIDIwMyxcbiAgICAgIDE3NyxcbiAgICAgIDEyNSxcbiAgICAgIDQxLFxuICAgICAgMTY4LFxuICAgICAgMTEzLFxuICAgICAgMTA0LFxuICAgICAgMTc3LFxuICAgICAgMjM1LFxuICAgICAgMjQyLFxuICAgICAgMjQ0LFxuICAgICAgMTQ4LFxuICAgICAgMjIsXG4gICAgICA0NixcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMCxcbiAgICAgIDU0LFxuICAgICAgMjQsXG4gICAgICAxMSxcbiAgICAgIDE5OSxcbiAgICAgIDEzMixcbiAgICAgIDEzOSxcbiAgICAgIDIzNixcbiAgICAgIDk4LFxuICAgICAgNDgsXG4gICAgICAyMDAsXG4gICAgICAxNixcbiAgICAgIDIyLFxuICAgICAgMjA3LFxuICAgICAgMTcwLFxuICAgICAgNzEsXG4gICAgICA3MSxcbiAgICAgIDE5LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRCMU1IWkdWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM0ODg5NzgzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXNuYWJpaGE5M1wiLFxuICAgIFwibGlkXCI6IFwiMTE5ODM0MzY5MDgxMzk0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnU0bjljRUVOWEU2YmNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwaTQxckdKSldFM296R0VOZXJlRHBSQjZxamtMUi9FYVVhYW44ajVvNHd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVvcDhYNFZIMjU5M1Mxem44NVVFNHJzM1ZZZ2F4SXFmRVI1b1ZBUWhUbXExV1FiOGhSTGd0d3pCNXhXTzc4U09jdUFDd0pOZjRBemlkU3dDYU9taENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtSaEt2a0hQR1J0K0lNNkJJQUgzZVBLakFhSUNHelV4emNIVVlzaERIM0dlbWZRWmw1U0J2bHduU3FlVDdBaVhrZTNpVm16bVpXSnhlM2M4YUFXUUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzQ4ODk3ODM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3Njg1MjA5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
