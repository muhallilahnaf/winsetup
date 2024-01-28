import { readable, writable } from "svelte/store";

const appsDict = {
    "sevenzip": {
        "name": "7zip",
        "link": "https://www.7-zip.org",
        "winget": "7zip.7zip",
        "chocolatey": "7zip"
    },
    "advanced-renamer": {
        "name": "Advanced Renamer",
        "link": "https://www.advancedrenamer.com",
        "winget": "",
        "chocolatey": "advanced-renamer"
    },
    "brave": {
        "name": "Brave",
        "link": "https://brave.com",
        "winget": "BraveSoftware.BraveBrowser",
        "chocolatey": "brave"
    },
    "crystal-disk-info": {
        "name": "Crystal Disk Info",
        "link": "https://crystalmark.info/en/software/crystaldiskinfo",
        "winget": "",
        "chocolatey": "crystaldiskinfo"
    },
    "crystal-disk-mark": {
        "name": "Crystal Disk Mark",
        "link": "https://crystalmark.info/en/software/crystaldiskmark",
        "winget": "",
        "chocolatey": "crystaldiskmark"
    },
    "discord": {
        "name": "Discord",
        "link": "https://discord.com",
        "winget": "Discord.Discord",
        "chocolatey": "discord"
    },
    "ditto": {
        "name": "Ditto",
        "link": "https://ditto-cp.sourceforge.io",
        "winget": "Ditto.Ditto",
        "chocolatey": "ditto"
    },
    "droidcam": {
        "name": "Droidcam",
        "link": "https://www.dev47apps.com",
        "winget": "dev47apps.DroidCam",
        "chocolatey": "droidcamclient"
    },
    "everything": {
        "name": "Everything",
        "link": "https://www.voidtools.com",
        "winget": "voidtools.Everything",
        "chocolatey": "everything"
    },
    "faststone-image-viewer": {
        "name": "FastStone Image Viewer",
        "link": "https://www.faststone.org/FSViewerDetail.htm",
        "winget": "FastStone.Viewer",
        "chocolatey": "fsviewer"
    },
    "ffmpeg": {
        "name": "ffmpeg",
        "link": "https://www.ffmpeg.org",
        "winget": "",
        "chocolatey": "ffmpeg"
    },
    "free-download-manager": {
        "name": "Free Download Manager",
        "link": "https://www.freedownloadmanager.org",
        "winget": "SoftDeluxe.FreeDownloadManager",
        "chocolatey": "freedownloadmanager"
    },
    "git": {
        "name": "Git",
        "link": "https://git-scm.com",
        "winget": "Git.Git",
        "chocolatey": "git"
    },
    "google-chrome": {
        "name": "Google Chrome",
        "link": "https://www.google.com/chrome",
        "winget": "Google.Chrome",
        "chocolatey": "googlechrome"
    },
    "google-drive": {
        "name": "Google Drive",
        "link": "https://www.google.com/drive/download",
        "winget": "Google.Drive",
        "chocolatey": "googledrive"
    },
    "hwinfo": {
        "name": "HWiNFO",
        "link": "https://www.hwinfo.com",
        "winget": "REALiX.HWiNFO",
        "chocolatey": "hwinfo"
    },
    "keepassxc": {
        "name": "KeePassXC",
        "link": "https://keepassxc.org",
        "winget": "KeePassXCTeam.KeePassXC",
        "chocolatey": "keepassxc"
    },
    "libreoffice": {
        "name": "LibreOffice",
        "link": "https://www.libreoffice.org",
        "winget": "TheDocumentFoundation.LibreOffice",
        "chocolatey": "libreoffice-fresh"
    },
    "lightshot": {
        "name": "Lightshot",
        "link": "https://app.prntscr.com",
        "winget": "",
        "chocolatey": "lightshot"
    },
    "microsoft-visual-studio-code": {
        "name": "Microsoft Visual Studio Code",
        "link": "https://code.visualstudio.com",
        "winget": "Microsoft.VisualStudioCode",
        "chocolatey": "vscode"
    },
    "mozilla-firefox": {
        "name": "Mozilla Firefox",
        "link": "https://www.mozilla.org/en-US/firefox/new",
        "winget": "Mozilla.Firefox",
        "chocolatey": "firefox"
    },
    "mozilla-thunderbird": {
        "name": "Mozilla Thunderbird",
        "link": "https://www.thunderbird.net",
        "winget": "Mozilla.Thunderbird",
        "chocolatey": "thunderbird"
    },
    "musicbee": {
        "name": "MusicBee",
        "link": "https://www.getmusicbee.com",
        "winget": "",
        "chocolatey": "musicbee"
    },
    "nodejs": {
        "name": "Node.js (LTS)",
        "link": "https://nodejs.org",
        "winget": "OpenJS.NodeJS.LTS",
        "chocolatey": "nodejs-lts"
    },
    "notepadplusplus": {
        "name": "Notepad++",
        "link": "https://notepad-plus-plus.org",
        "winget": "Notepad++.Notepad++",
        "chocolatey": "notepadplusplus"
    },
    "obs-studio": {
        "name": "OBS Studio",
        "link": "https://obsproject.com",
        "winget": "OBSProject.OBSStudio",
        "chocolatey": "obs-studio"
    },
    "proton-vpn": {
        "name": "ProtonVPN",
        "link": "https://protonvpn.com",
        "winget": "ProtonTechnologies.ProtonVPN",
        "chocolatey": "protonvpn"
    },
    "putty": {
        "name": "Putty",
        "link": "https://www.putty.org",
        "winget": "PuTTY.PuTTY",
        "chocolatey": "putty"
    },
    "python": {
        "name": "Python",
        "link": "https://www.python.org",
        "winget": "Python.Python.3",
        "chocolatey": "python"
    },
    "qbittorrent": {
        "name": "qBittorrent",
        "link": "https://www.qbittorrent.org",
        "winget": "qBittorrent.qBittorrent",
        "chocolatey": "qbittorrent"
    },
    "revo-uninstaller": {
        "name": "Revo Uninstaller",
        "link": "https://www.revouninstaller.com",
        "winget": "RevoUninstaller.RevoUninstaller",
        "chocolatey": "revo-uninstaller"
    },
    "rufus": {
        "name": "Rufus",
        "link": "https://rufus.ie",
        "winget": "Rufus.Rufus",
        "chocolatey": "rufus"
    },
    "shotcut": {
        "name": "Shotcut",
        "link": "https://shotcut.org",
        "winget": "Meltytech.Shotcut",
        "chocolatey": "shotcut"
    },
    "sumatrapdf": {
        "name": "SumatraPDF",
        "link": "https://www.sumatrapdfreader.org/free-pdf-reader",
        "winget": "SumatraPDF.SumatraPDF",
        "chocolatey": "sumatrapdf"
    },
    "telegram": {
        "name": "Telegram",
        "link": "https://telegram.org",
        "winget": "Telegram.TelegramDesktop",
        "chocolatey": "telegram"
    },
    "treesize-free": {
        "name": "Treesize Free",
        "link": "https://www.jam-software.com/treesize_free",
        "winget": "JAMSoftware.TreeSize.Free",
        "chocolatey": "treesizefree"
    },
    "unified-remote": {
        "name": "Unified Remote",
        "link": "https://www.unifiedremote.com",
        "winget": "",
        "chocolatey": "unifiedremote"
    },
    "universal-usb-installer": {
        "name": "Universal USB Installer",
        "link": "https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3",
        "winget": "",
        "chocolatey": "universal-usb-installer"
    },
    "vlc-media-player": {
        "name": "VLC media player",
        "link": "https://www.videolan.org/vlc",
        "winget": "VideoLAN.VLC",
        "chocolatey": "vlc"
    },
    "virtualbox": {
        "name": "Virtualbox",
        "link": "https://www.virtualbox.org",
        "winget": "Oracle.VirtualBox",
        "chocolatey": "virtualbox"
    },
    "windscribe": {
        "name": "Windscribe",
        "link": "https://windscribe.com",
        "winget": "WindscribeLimited.Windscribe",
        "chocolatey": "windscribe"
    },
    "youtube-dl": {
        "name": "youtube-dl",
        "link": "https://youtube-dl.org",
        "winget": "",
        "chocolatey": "youtube-dl"
    },
    "zoom": {
        "name": "Zoom",
        "link": "https://zoom.us",
        "winget": "Zoom.Zoom",
        "chocolatey": "zoom"
    }
}

export const apps = readable(appsDict);

const pacmanDict = {
    winget: {
        name: 'Winget',
        heading: 'uses Windows Package Manager a.k.a.',
        link: 'https://docs.microsoft.com/en-us/windows/package-manager/winget'
    },
    chocolatey: {
        name: 'Chocolatey',
        heading: 'uses',
        link: 'https://chocolatey.org'
    },
}

export const pacman = readable(pacmanDict);

export const showScript = writable(false);
export const script = writable('');
