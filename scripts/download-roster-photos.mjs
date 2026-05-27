import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const rosterDir = path.join(root, 'public', 'roster')
const htmlPath = process.env.ROSTER_HTML ?? path.join(process.env.TEMP ?? '/tmp', 'roster.html')

const members = [
  { id: 'gabriel-rousseau', name: 'Gabriel Rousseau' },
  { id: 'allison-dana', name: 'Allison Dana' },
  { id: 'nati-grinkrugc', name: 'Nati Grinkrugc' },
  { id: 'paula-castillo-hi-espino', name: 'Paula Castillo Hi Espino' },
  { id: 'derek-phan', name: 'Derek Phan' },
  { id: 'aliyah-al-khafaji', name: 'Aliyah Al-Khafaji' },
  { id: 'mahika-behani', name: 'Mahika Behani' },
  { id: 'vivian-butler', name: 'Vivian Butler' },
  { id: 'annika-baumgartner', name: 'Annika Baumgartner' },
  { id: 'carsten-zieger', name: 'Carsten Zieger' },
  { id: 'amelia-gassner', name: 'Amelia Gassner' },
  { id: 'celia-clark', name: 'Celia Clark' },
  { id: 'john-mayfield', name: 'John Mayfield' },
  { id: 'max-umminger', name: 'Max Umminger' },
  { id: 'nikolas-krause', name: 'Nikolas Krause' },
  { id: 'andre-lintner-calvo', name: 'Andre Lintner-Calvo' },
  { id: 'selah-dorn', name: 'Selah Dorn' },
  { id: 'jack-hughes', name: 'Jack Hughes' },
  { id: 'eloise-white', name: 'Eloise White' },
  { id: 'magnus-grigsby', name: 'Magnus Grigsby' },
  { id: 'alvina-lin', name: 'Alvina Lin' },
]

function normalizeName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, ' ')
}

/** Image immediately before each h4 is the photo shown above that member on the live roster. */
function parsePhotoAboveInfo(html) {
  const events = []
  const h4Regex = /<h4[^>]*>([^<]+)<\/h4>/g
  const imgRegex = /<img[^>]+src="([^"]+)"/g
  let match

  while ((match = h4Regex.exec(html))) {
    events.push({ pos: match.index, type: 'h4', name: match[1].trim() })
  }
  while ((match = imgRegex.exec(html))) {
    events.push({ pos: match.index, type: 'img', url: match[1] })
  }

  events.sort((a, b) => a.pos - b.pos)

  const byName = new Map()
  let lastImg = null
  for (const event of events) {
    if (event.type === 'img') lastImg = event.url
    else if (event.type === 'h4' && lastImg) {
      byName.set(normalizeName(event.name), lastImg)
    }
  }
  return byName
}

function extensionFromUrl(url) {
  const pathname = new URL(url).pathname
  const ext = path.extname(pathname).toLowerCase()
  if (ext === '.jpeg' || ext === '.jpg' || ext === '.png' || ext === '.webp') return ext
  return '.jpg'
}

async function download(url, dest) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`)
  }
  const buffer = Buffer.from(await response.arrayBuffer())
  fs.writeFileSync(dest, buffer)
}

async function main() {
  if (!fs.existsSync(htmlPath)) {
    console.error(`Missing roster HTML at ${htmlPath}`)
    process.exit(1)
  }

  const html = fs.readFileSync(htmlPath, 'utf8')
  const photoByName = parsePhotoAboveInfo(html)

  fs.mkdirSync(rosterDir, { recursive: true })

  const results = []

  for (const member of members) {
    const key = normalizeName(member.name)
    const url = photoByName.get(key)

    if (!url) {
      console.warn(`No photo found for ${member.name}`)
      continue
    }

    const ext = extensionFromUrl(url)
    const filename = `${member.id}${ext}`
    const dest = path.join(rosterDir, filename)
    const localPath = `/roster/${filename}`

    console.log(`Downloading ${member.name}…`)
    await download(url, dest)
    results.push({ id: member.id, photo: localPath })
  }

  const manifestPath = path.join(rosterDir, 'manifest.json')
  fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2))
  console.log(`\nDownloaded ${results.length} photos to public/roster/`)
  console.log(`Manifest: ${manifestPath}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
