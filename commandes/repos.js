"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🔎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Jashon254/DRJAY-MD;
  const img = '<a href="https://imgbb.com/"><img src="https://i.ibb.co/L9W165W/79670804779acc2953ce57204a1cf9fa.png" alt="79670804779acc2953ce57204a1cf9fa" border="0" /></a>';


  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*𝐇𝐞𝐲 𝐒𝐬𝐮𝐩 𝐏𝐚𝐥 🤗 𝐢𝐭𝐬 𝐬𝐞𝐞𝐦𝐬 𝐲𝐨𝐮 𝐥𝐢𝐤𝐞 DRJAY 𝐌𝐝,  *\n  
      *𝐀𝐥𝐥 𝐘𝐨𝐮 𝐍𝐞𝐞𝐝 𝐓𝐨 𝐊𝐧𝐨𝐰 𝐢𝐬 𝐇𝐞𝐫𝐞.*
╭─────────༻༻༻────────
││ *𝐒𝐞𝐬𝐬𝐢𝐨𝐧* https://dr.jay-md-session-generator-4f0646dea31d.herokuapp.com/
││ *𝐑𝐞𝐩𝐨:* ${data.html_url}
││ *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
││ *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
││ *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}
││ *𝐔𝐩𝐝𝐚𝐭𝐞𝐝: ${repoInfo.lastUpdate}
││ *𝐎𝐰𝐧𝐞𝐫:* DRJAY TECH
││ *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:*https://whatsapp.com/channel/0029VanNRQm6BIEfrDHM9V0F
││ *𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦:* https://Instagram.com/@Jashon254 
╰─────────༻༻༻────────
          *Dr.jay Md*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
