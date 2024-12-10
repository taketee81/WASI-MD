const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+23274448130";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "+23274448130,+23234490871";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUwxV3lPUzIzVkRPeXpQMkk2S1BhczlRVW4rZ0E0ZFhZZnJUdnJrSk1rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVFTdnNNd3htYXIzVWZTK2g5cys0d1gyVmw2YkhJWm9GUHVsMTkrellWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT1hWRU9mekl2UW5xbi9vOEFtQXJXT0pUZ0RCSmUrRENKWDR3RUkvZEUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5MzdLME95WFhYdDBqdEwrREFNQzJuVitaNUJaR1JTOW51UGdPd2IrcnlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCMTc0dkdnTE5sL0xZbDlCYzRTdXRkdEFpZVZZSjRlY3IrQllhWDBPMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCZHVqZmJyMkNZeGkwa1A4QTI5M2ErMFdXUzdWa0QxUVBPZnhqQ0oxaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdXQ0QycG1wamp6S3NsczRBb3NDaXQ4TlV3MXVYeUpJRVlGbXFMQWIyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDB4cG4wWVJEM3lrVHg4cEsvbnNFYmc0aytsUXJSMDFiaWo0SUwzMzVUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk4MGNoa0FJQW93ekR1dDlvTllsd1U3RVNxenpKcVB6ZXhmemFLc0JhNXF3SHgrM2tsaGt5M3gwOEwzV2tySVNQZGdOOFhzdVNSYjZhQkpMMkVVZkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJJVFpaVUNOV1FGTmIwazQ1U1lxcE9xd1Q4WTFCbUdjKzhkdnpRdG8xbmNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfcGVwRTZpVVM0TzB4UTUwUGs2djl3IiwicGhvbmVJZCI6IjYyMWMzZGIyLWU3ZjktNGI1Yi05MGRhLWQ4ODM0OGM5OTIwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRUdIS1NNWFJ3Q21XV2RnZkxmOVVxYTRHM3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczB4WVVUS2k4T3d6VmtuVmE1K00xRHNqR1ljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpUV0tWQ1JTIiwibWUiOnsiaWQiOiIyMzI3NjYxOTczNDoyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQL1dnYWtDRU5ydTM3b0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCWTdzMVZLTy81alYyUkt2eXpUYU9raGlMN3lPV1Q1aHpEWTg2d1dTWkJ3PSIsImFjY291bnRTaWduYXR1cmUiOiJmOHVaZlZPNnBzUUoxY29lMDlFUEJGS21tSEZpOU8vQ2tNU1FmYzU3K0VGcHJIVXU4TnVTd0pqVEpPN3RCbEhwS1p1bDNvdGxIOEU4Z1RsOEU2aHpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZEt0aWxpL05tVUdjb1QrakY5djNmZmZaNFFYbjluUWk1cjIxTExMYmRNb3o0blRGbzlPTnV2dDBMeUFuZXhNZ3ZQSXZzL1NObUFjanhMZE5lNjZJREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3NjYxOTczNDoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFXTzdOVlNqditZMWRrU3I4czAyanBJWWkrOGpsaytZY3cyUE9zRmttUWMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM4MTgyMTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRldQIn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ＷＡＳＩ ＭＤ🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝗪𝗔𝗦𝗜 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "Mr Take Tee",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
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
 
