import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const downloads = [
  {
    url: 'https://sailing.studentorg.berkeley.edu/wp-content/uploads/2025/01/Screenshot-2025-01-10-at-8.28.28-PM.png',
    dest: path.join(root, 'public', 'about', 'hero.png'),
  },
  {
    url: 'https://sailing.studentorg.berkeley.edu/wp-content/uploads/2025/10/IMG_4290.jpg',
    dest: path.join(root, 'public', 'recruitment', 'hero.jpg'),
  },
]

async function download(url, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`${url} → HTTP ${res.status}`)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(dest, buf)
  console.log(`Saved ${dest} (${buf.length} bytes)`)
}

for (const { url, dest } of downloads) {
  await download(url, dest)
}

console.log('Done.')
