const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮ 
┃❥─┯──● *AXE BOT* ────╝ 
┃⛨╭●○ *SOUND MENU*「𝚒𝚘𝚜」 
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
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}sound*
┃│➸ *${prefix}ngentod*
┃│➸ *${prefix}gtw*
┃│➸ *${prefix}sound3*
┃│➸ *${prefix}sound4*
┃│➸ *${prefix}sound5*
┃│➸ *${prefix}sound6*
┃│➸ *${prefix}sound7*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *YOHANDARA M.W* ]----- 🔰`
}
exports.sound = sound