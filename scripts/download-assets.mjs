import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const posts = [
  {
    filename: "post-01.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/671807303_1296585355961823_2937941024592322627_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=Io2NnyAWuOoQ7kNvwFTNByc&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af6XmHPMjQvjtaBTWWcQ7tbSPOjCfUJH-6cbLdml8r1wVA&oe=6A0EF33F&_nc_sid=8b3546",
  },
  {
    filename: "post-02.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/671178060_4380328152252560_6709887539777162250_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=8LtFDcjSm0UQ7kNvwESHFe2&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af7ERlT8LwuqLg8DGlEBswFqVg0Aq56Iq6RJS4iwZtlLxQ&oe=6A0F0537&_nc_sid=8b3546",
  },
  {
    filename: "post-03.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/670862394_933050096005711_75753713509189490_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=RrbogoWiqRQQ7kNvwFLFYzW&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af6L7He5sS_BMI0MgYmLthrGiCEdHO5P_bTqu0ay-ZSUzQ&oe=6A0ED74F&_nc_sid=8b3546",
  },
  {
    filename: "post-04.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/700252852_1312490861023414_956062762873818785_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=7ndBUfYdaAkQ7kNvwEJtp6K&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af5fqABq1stbHTHbVouSjFsqwZguNmdc8R0MdnEyWVIIOQ&oe=6A0EE99E&_nc_sid=8b3546",
  },
  {
    filename: "post-05.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/690361434_985032477450246_6262406462022645098_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=pmarH4aYHqkQ7kNvwFm_6KC&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af6-VJPp3eeg-MevQa0MX19dVRCMM8-DxO2v6KGjAOkA-A&oe=6A0EE87F&_nc_sid=8b3546",
  },
  {
    filename: "post-06.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/695795667_1300795908877724_3668996663420172308_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=aYQ5RyJyxhcQ7kNvwHENWQB&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af43O7QSvNxiFYrLNc9b62BaznoSWi0yWaIqu3Ab8F0nsA&oe=6A0EEA09&_nc_sid=8b3546",
  },
  {
    filename: "post-07.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.82787-15/690283618_18106528826512386_1762453339744770770_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=9dmn_0OnSxkQ7kNvwG2hW8G&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af7KeLY8FGve86wcU8rEtGDFjzhj0yDaikOUprAQEKBreA&oe=6A0EE010&_nc_sid=8b3546",
  },
  {
    filename: "post-08.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.82787-15/687503217_18106403357512386_8197162547071654280_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=KH1Vu1t3SnAQ7kNvwGwB06L&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af5oYmv_ZZN3eft43JHyeNoOxVaaMBLlc0u4S-yTU7HFqg&oe=6A0F0AD2&_nc_sid=8b3546",
  },
  {
    filename: "post-09.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.82787-15/700679166_18106311938512386_7877498815777835758_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gHzohhVJg0OFGJEymuhIlv-3cJ-buTDhxrSWRLKf3d9vIq1lwxVKd1vXz3A-Uc-SEVmVTV-DYzX_YT0c5QdJXob&_nc_ohc=Ojs-JDElDNwQ7kNvwES8bW7&_nc_gid=8Ano5uyBT5y0Ui_XUh4OvA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af6XvFgjaSk6mi6J4v1um3eiehX8X875SfUo34Q4tqhzKg&oe=6A0EF8E1&_nc_sid=8b3546",
  },
];

const highlights = [
  {
    filename: "hl-01.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/610977082_4169398813303758_6129651550979297696_n.jpg?stp=c0.248.640.640a_dst-jpg_e15_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=bxIc3ttcAuwQ7kNvwGw-wAG&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af7sOK9sae2zbn0gAz218cxpY8xCI86y4a2UkwBm4pCdew&oe=6A0ED523&_nc_sid=94fea1",
  },
  {
    filename: "hl-02.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/520540587_710759161728711_8768748477456873175_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=N5EuFpQfbt0Q7kNvwHb5VYQ&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af68PBNP_9QyFPtzVxzXkSEgGUKsFadlt4qM1Zvt20t0CQ&oe=6A0F0545&_nc_sid=94fea1",
  },
  {
    filename: "hl-03.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/520540587_1235082224776537_2241270478610298967_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=Cpa9Spwg57AQ7kNvwFx_lAQ&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af7yGPadrqIppY86Hq1jdfpVKPLDa9zJLys0WFOCoIgtMw&oe=6A0EE047&_nc_sid=94fea1",
  },
  {
    filename: "hl-04.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.82787-15/542486607_18076991918512386_4345594019695441611_n.jpg?stp=c0.501.1290.1290a_dst-jpg_e15_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=Y7JTyEydzicQ7kNvwFcIbOc&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af4MIWRA2LlzA3ldQnRZHmLH-KfvugwpJctmRANZm6p9vw&oe=6A0EE99E&_nc_sid=94fea1",
  },
  {
    filename: "hl-05.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/503031628_1261311581998813_4419464784271981951_n.jpg?stp=c0.248.640.640a_dst-jpg_e15_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=65hxHzoAEgEQ7kNvwHmDfjU&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af5AQQKxFyA0P2N37kphnFIO8ZWZ-hv7PNmfDM4XVbXuGg&oe=6A0F04CC&_nc_sid=94fea1",
  },
  {
    filename: "hl-06.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/521721664_2479013892476783_8662605520461043805_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=8NYX7c6oxuAQ7kNvwFzGfDq&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af4ZdDizRqy6WdWe8WsZjNs5gGd20DZiZAqp1nUH7A7McA&oe=6A0ED4C3&_nc_sid=94fea1",
  },
  {
    filename: "hl-07.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/522677504_1781772935800942_3007157280531955708_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=NRDzVGr_uocQ7kNvwFPwJ2a&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af5ScZFHiFWb8NaHcfMRBx0nHCYvdKIJlqS6fQBJraJPvw&oe=6A0F00F1&_nc_sid=94fea1",
  },
  {
    filename: "hl-08.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/522677504_1470424810759141_8283131169609524936_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=hMZqrJ_HvIEQ7kNvwH6-QHW&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af5iB6Sg0XaSg8i_u1zMnVhi-ffo_2ezpYxFZJwjPEYA2A&oe=6A0EFB32&_nc_sid=94fea1",
  },
  {
    filename: "hl-09.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/522429806_1420877272567963_7589635482576673036_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=daNfI1eHgc4Q7kNvwF0UBmY&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af5XMSqFGtJCqfl29J4GNrHivnT6OdvZyfkhS7aP-gHRsA&oe=6A0EF5DE&_nc_sid=94fea1",
  },
  {
    filename: "hl-10.jpg",
    url: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.71878-15/522290860_1254749826188865_5004042148417997923_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2gFuYslXRg4XtsN9x48rtI3-TBDUFG5jwns-Ccy3JhGOq-2PAIU6vwWW_QyQ9txwWFdjET8GG0eGbbnITgWKQNKI&_nc_ohc=mavPDFCA1tkQ7kNvwFrgdSe&_nc_gid=48zWqsP7eaEohKUPE9ZYCg&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_Af7hztPu5yKTWSQKnRcTkForPKyD4H1AP5o-JJPiSlpjmw&oe=6A0EF73E&_nc_sid=94fea1",
  },
];

function downloadFile(url, destPath, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 10) {
      reject(new Error("Too many redirects"));
      return;
    }

    const protocol = url.startsWith("https") ? https : http;

    const req = protocol.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://www.instagram.com/",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          req.destroy();
          downloadFile(res.headers.location, destPath, redirectCount + 1)
            .then(resolve)
            .catch(reject);
          return;
        }

        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }

        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close();
          resolve();
        });
        fileStream.on("error", reject);
      }
    );

    req.on("error", reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function downloadAll() {
  const postsDir = path.join(publicDir, "images", "posts");
  const highlightsDir = path.join(publicDir, "images", "highlights");

  console.log("Starting downloads...\n");

  // Download posts
  console.log("Downloading post images:");
  for (const post of posts) {
    const dest = path.join(postsDir, post.filename);
    try {
      await downloadFile(post.url, dest);
      const stats = fs.statSync(dest);
      console.log(`  [OK] ${post.filename} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.log(`  [FAIL] ${post.filename}: ${err.message}`);
    }
  }

  console.log("\nDownloading highlight images:");
  for (const hl of highlights) {
    const dest = path.join(highlightsDir, hl.filename);
    try {
      await downloadFile(hl.url, dest);
      const stats = fs.statSync(dest);
      console.log(`  [OK] ${hl.filename} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.log(`  [FAIL] ${hl.filename}: ${err.message}`);
    }
  }

  console.log("\nDone!");
}

downloadAll().catch(console.error);
