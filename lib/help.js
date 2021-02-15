const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `Hai👋User, ${sender.split("@")[0]}
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮ 
┃❥─┯─● *${botName}* ────╝ 
┃⛨╭╯   *INFO USER*「𝚒𝚘𝚜」 
┃⛨┊◜◜ 
┃⛨┊✧ུ*Username*  : ${pushname}* 
┃⛨┊✧ུ*Nomor* : wa.me/${sender.split("@")[0]}* 
┃⛨┊✧ུ*Uang* : Rp${uangku}* 
┃⛨┊✧ུ*Level* : ${getLevelingLevel(sender)}* 
┃⛨┊✧*ུPrefix* : ❪ ${prefix} ❫* 
╰▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 
 ░▒▓▓▒░░▒▓▓▒░░▒▓▓▒░░▒▓▓▒ 
 *_╭┅─┅─┅DAFTAR MENU_* ┅─┅─┅ 
 *_╰╯© Developer By Yohandara M.W_* 
╔░▒▓▓▒░░▒▓▓▒░░▒▓▓▒░░▒▓▓▒ 
║ 
╠➥ *${prefix}atm
╠➥ *${prefix}owner
╠➥ *${prefix}donasi
║  
║ *BINGUNG? KETIK* *${prefix}bingungcok*
║░▒▓▓▒░░▒▓▓▒░░▒▓▓▒░░▒▓▓▒
║
╠➥ *${prefix}simplemenu* 
╠➥ *${prefix}makermenu* 
╠➥ *${prefix}gabutmenu* 
╠➥ *${prefix}downloadmenu* 
╠➥ *${prefix}randommenu* 
╠➥ *${prefix}othermenu* 
╠➥ *${prefix}groupmenu* 
╠➥ *${prefix}dompetmenu* 
╠➥ *${prefix}ownermenu* 
║ 
║     ▉║█▐▉▉▐▐▍█║▍▉▏▍▍ 
║     ▉║█▐▉▉▐▐▍█║▍▉▏▍▍ 
║      ©️ *Yohandara M.W* 
║ 
╚░▒▓▓▒░░▒▓▓▒░░▒▓▓▒░░▒▓▓▒` 
}

exports.help = help
