const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮ 
┃❥─┯──● *AXE BOT* ────╝ 
┃⛨╭●○ *SIMPLE MENU* ●○「𝚒𝚘𝚜」 
┃⛨┊◜◜ 
┃⛨┊ུ*Username*  : ${pushname}* 
┃⛨┊ 
┃⛨┊ུ*USER AxeBot* : ${_registered.length}*
┃⛨┊ 
┃⛨┊ུ*User Level*: ${getLevelingLevel(sender)}*
┃⛨┊ 
╰▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}sticker*
┃│➸ *${prefix}ttp*
┃│➸ *${prefix}tts*
┃│➸ *${prefix}toimg*
┃│➸ *${prefix}nulis*
┃│➸ *${prefix}stalkig*
┃│➸ *${prefix}quotes*
┃│➸ *${prefix}bikinquote*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *YOHANDARA M.W* ]----- 🔰`
}
exports.simple = simple