const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮ 
┃❥─┯──● *AXE BOT* ────╝ 
┃⛨╭●○ *GROUP MENU*「𝚒𝚘𝚜」 
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
┃│➸ *${prefix}welcome* ⟪ 1/0 ⟫
┃│➸ *${prefix}leveling* ⟪ 1/0 ⟫
┃│➸ *${prefix}event* ⟪ 1/0 ⟫
┃│➸ *${prefix}simih* ⟪ 1/0 ⟫
┃│➸ *${prefix}nsfw* ⟪ 1/0 ⟫
┃│➸ *${prefix}grup* ⟪ buka/tutup ⟫
┃│➸ *${prefix}add*
┃│➸ *${prefix}kick*
┃│➸ *${prefix}hedsot*
┃│➸ *${prefix}linkgrup*
┃│➸ *${prefix}promote*
┃│➸ *${prefix}demote*
┃│➸ *${prefix}setname*
┃│➸ *${prefix}setdesc*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}tagall*
┃│➸ *${prefix}admin*
┃│➸ *${prefix}level*
┃│➸ *${prefix}fitnah*
┃│➸ *${prefix}hidetag*
┃│➸ *${prefix}hidetag5*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *YOHANDARA M.W* ]----- 🔰`
}
exports.groupm = groupm