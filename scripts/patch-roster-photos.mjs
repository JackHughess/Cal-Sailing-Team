import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, 'public/roster/manifest.json'), 'utf8'),
)
let content = fs.readFileSync(path.join(root, 'src/data/siteContent.ts'), 'utf8')

for (const { id, photo } of manifest) {
  const re = new RegExp(
    `(id: '${id}',[\\s\\S]*?photo:\\s*)(?:'[^']+'|(?:\\n\\s+)'[^']+')`,
    'm',
  )
  const updated = content.replace(re, `$1'${photo}'`)
  if (updated === content) {
    console.error(`No match for ${id}`)
    process.exitCode = 1
  }
  content = updated
}

content = content.replace(
  /Photos from https:\/\/sailing\.studentorg\.berkeley\.edu\/roster\/ \(WordPress media URLs\)\./,
  'Photos in public/roster/ (from https://sailing.studentorg.berkeley.edu/roster/).',
)

fs.writeFileSync(path.join(root, 'src/data/siteContent.ts'), content)
console.log('Updated siteContent.ts')
