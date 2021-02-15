const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮ 
┃❥─┯──● *AXE BOT* ────╝ 
┃⛨╭●○ *MAKER MENU*「𝚒𝚘𝚜」 
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
┃│➸ *${prefix}hartatahta*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}ninjalogo*
┃│➸ *${prefix}cloudtext*
┃│➸ *${prefix}gemboktext*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}silktext*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *YOHANDARA M.W* ]----- 🔰`
}
exports.maker = maker