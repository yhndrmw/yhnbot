const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮ 
┃❥─┯──● *AXE BOT* ────╝ 
┃⛨╭●○ *RANDOM MENU*「𝚒𝚘𝚜」 
┃⛨┊◜◜ 
┃⛨┊ུ*Username*  : ${pushname}* 
┃⛨┊ 
┃⛨┊ུ*USER AxeBot* : ${_registered.length}*
┃⛨┊ 
┃⛨┊ུ*User Level*: ${getLevelingLevel(sender)}*
┃⛨┊ 
╰▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}randomhentong*
┃│➸ *${prefix}nekonime*
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}loli*
┃│➸ *${prefix}neko*
┃│➸ *${prefix}blowjob*
┃│➸ *${prefix}husbu*
┃│➸ *${prefix}kpop*
┃│➸ *${prefix}bucin*
┃│➸ *${prefix}covid*
┃│➸ *${prefix}anjing*
┃│➸ *${prefix}pokemon*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *YOHANDARA M.W* ]----- 🔰`
}
exports.random = random