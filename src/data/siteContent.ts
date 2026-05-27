import type { PageId, PageTemplate, RosterClassSection, RosterMember } from '../types'

export const site = {
  name: 'Cal Sailing Team',
  heading: 'CAL SAILING TEAM',
  shortName: 'Cal Sailing Team',
} as const

export const navItems: { id: PageId; label: string }[] = [
  { id: 'roster', label: 'Roster' },
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'recruitment', label: 'Recruitment' },
  { id: 'donations', label: 'Donations' },
  { id: 'contact', label: 'Contact' },
  { id: 'merch', label: 'Merch' },
]

export const galleryImages = [
  { id: '1', alt: 'Team photo 1', caption: 'Add photo in public/gallery/' },
  { id: '2', alt: 'Team photo 2', caption: 'Regatta action shot' },
  { id: '3', alt: 'Team photo 3', caption: 'Practice at Richmond Yacht Club' },
  { id: '4', alt: 'Team photo 4', caption: 'Fleet on the water' },
  { id: '5', alt: 'Team photo 5', caption: 'Team celebration' },
  { id: '6', alt: 'Team photo 6', caption: 'Bay Area sailing' },
  { id: '7', alt: 'Team photo 7', caption: 'Golden Bears on the Bay' },
] as const

export const homeAbout = {
  heading: 'CAL SAILING TEAM',
  paragraphs: [
    'The California Golden Bears Sailing Team is a student-run, competitive racing team from the University of California at Berkeley. The team regularly competes in regattas throughout the San Francisco Bay and on the waters of Southern California and Hawaii.',
    'The Cal Sailing Team was started in 1922 and is the second oldest club sport at Cal. Our fleet of fifteen FJs is located at Richmond Yacht Club, where we practice three days a week. Only thirty minutes from campus by car, Richmond Yacht Club is an incredible sailing facility with beautiful views of the Bay Area.',
    'We are continually looking to expand our team’s skills and continue the Corinthian spirit at Cal.',
  ],
} as const

export const upcomingEvents = [
  '9/20-21 PCCSC Women’s Singlehandeds',
  '9/20-21 PCCSC Open Singlehanded Conference Championship',
  '10/4-5 Richard Sweet Match Race Championship @ SDYC',
  '10/11-12 UCSD Open @ UCSD',
  '10/11-12 Frosh Soph @ UCSD',
  '10/18-19 Stoney Burke Intersectional @ Berkeley',
  '10/25-26 Womens Fall PCCs @ Stanford',
  '11/1-2 Kiera Broudy Memorial @ UCSC',
  '11/15-16 Open Fall Conference Championship @ UCSB',
  '11/15-16 Fall PCC JV @ UCSB',
] as const

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/calsailing/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@calsailing' },
] as const

/**
 * 2026–27 roster from https://sailing.studentorg.berkeley.edu/roster/
 * Each member’s year was advanced one level; 2025–26 seniors are omitted.
 * Photos in public/roster/ (from https://sailing.studentorg.berkeley.edu/roster/).
 */
export const rosterMembers: RosterMember[] = [
  {
    id: 'gabriel-rousseau',
    name: 'Gabriel Rousseau',
    photo:
      '/roster/gabriel-rousseau.png',
    officerPosition: 'Social Chair',
    role: 'Skipper/Crew',
    major: 'Political Economy, City & Urban Planning Minor',
    hometown: 'Los Angeles, CA',
    graduatingClass: 2027,
  },
  {
    id: 'allison-dana',
    name: 'Allison Dana',
    photo: '',
    officerPosition: 'Apparel Chair',
    role: 'Crew',
    major:
      'Electrical Engineering & Computer Science, Creative Writing Minor, BDCI Certificate',
    hometown: 'Albany, CA',
    graduatingClass: 2027,
  },
  {
    id: 'nati-grinkrugc',
    name: 'Nati Grinkrugc',
    photo: '',
    officerPosition: '',
    role: 'Skipper',
    major: 'Physics',
    hometown: 'Palo Alto, CA',
    graduatingClass: 2027,
  },
  {
    id: 'paula-castillo-hi-espino',
    name: 'Paula Castillo Hi Espino',
    photo:
      '/roster/paula-castillo-hi-espino.png',
    officerPosition: '',
    role: 'Crew',
    major: 'Molecular and Cell Biology',
    hometown: 'Mill Valley, CA',
    graduatingClass: 2027,
  },
  {
    id: 'derek-phan',
    name: 'Derek Phan',
    photo:
      '/roster/derek-phan.png',
    officerPosition: '',
    role: 'Skipper/Crew',
    major: 'Molecular and Cell Biology',
    hometown: 'Granite Bay, CA',
    graduatingClass: 2027,
  },
  {
    id: 'aliyah-al-khafaji',
    name: 'Aliyah Al-Khafaji',
    photo:
      '/roster/aliyah-al-khafaji.png',
    officerPosition: '',
    role: 'Crew',
    major: 'Environmental Economics & Policy, Data Science',
    hometown: 'San Diego, CA',
    graduatingClass: 2027,
  },
  {
    id: 'mahika-behani',
    name: 'Mahika Behani',
    photo:
      '/roster/mahika-behani.jpg',
    officerPosition: '',
    role: 'Skipper',
    major: 'Environmental Engineering, Environmental Economics and Policy',
    hometown: 'Bangalore, India',
    graduatingClass: 2027,
  },
  {
    id: 'vivian-butler',
    name: 'Vivian Butler',
    photo:
      '/roster/vivian-butler.png',
    officerPosition: '',
    role: 'Crew',
    major: 'Business Administration, Data Science',
    hometown: 'Austin, TX',
    graduatingClass: 2027,
  },
  {
    id: 'annika-baumgartner',
    name: 'Annika Baumgartner',
    photo:
      '/roster/annika-baumgartner.png',
    officerPosition: 'Recruitment Chair & TIDE Representative',
    role: 'Crew',
    major: 'Molecular and Cell Biology, Economics',
    hometown: 'San Diego, CA',
    graduatingClass: 2028,
  },
  {
    id: 'carsten-zieger',
    name: 'Carsten Zieger',
    photo:
      '/roster/carsten-zieger.png',
    officerPosition: 'Education Chair',
    role: 'Skipper',
    major: 'Chemical Engineering',
    hometown: 'Manhattan Beach, CA',
    graduatingClass: 2028,
  },
  {
    id: 'amelia-gassner',
    name: 'Amelia Gassner',
    photo: '/roster/amelia-gassner.png',
    officerPosition: 'Secretary & Gala Co-Chair',
    role: 'Crew',
    major: 'Society and Environment, Public Health',
    hometown: 'Los Angeles, CA',
    graduatingClass: 2028,
  },
  {
    id: 'celia-clark',
    name: 'Celia Clark',
    photo: '',
    officerPosition: 'Social Chair & Social Media Chair',
    role: 'Crew',
    major: 'Urban Studies, English',
    hometown: 'San Francisco, CA',
    graduatingClass: 2028,
  },
  {
    id: 'john-mayfield',
    name: 'John Mayfield',
    photo:
      '/roster/john-mayfield.png',
    officerPosition: '',
    role: 'Skipper/Crew',
    major: 'Philosophy',
    hometown: 'Santa Barbara, CA',
    graduatingClass: 2028,
  },
  {
    id: 'max-umminger',
    name: 'Max Umminger',
    photo:
      '/roster/max-umminger.png',
    officerPosition: '',
    role: 'Crew',
    major: 'Physics',
    hometown: 'Oakland, CA',
    graduatingClass: 2028,
  },
  {
    id: 'nikolas-krause',
    name: 'Nikolas Krause',
    photo:
      '/roster/nikolas-krause.png',
    officerPosition: '',
    role: 'Skipper/Crew',
    major: 'Molecular and Cellular Biology',
    hometown: 'San Jose, CA',
    graduatingClass: 2028,
  },
  {
    id: 'andre-lintner-calvo',
    name: 'Andre Lintner-Calvo',
    photo: '',
    officerPosition: 'Treasurer',
    role: 'Skipper/Crew',
    major: 'Geophysics',
    hometown: 'Piedmont, CA',
    graduatingClass: 2029,
  },
  {
    id: 'selah-dorn',
    name: 'Selah Dorn',
    photo:
      '/roster/selah-dorn.png',
    officerPosition: 'Fleetmaster',
    role: 'Skipper',
    major: 'Molecular and Cellular Biology',
    hometown: 'Mountain View, CA',
    graduatingClass: 2029,
  },
  {
    id: 'jack-hughes',
    name: 'Jack Hughes',
    photo: '/roster/jack-hughes.png',
    officerPosition: '',
    role: 'Skipper/Crew',
    major: 'Computer Science',
    hometown: 'Chicago, IL',
    graduatingClass: 2029,
  },
  {
    id: 'eloise-white',
    name: 'Eloise White',
    photo: '',
    officerPosition: '',
    role: 'Crew',
    major: 'Earth & Planetary Science',
    hometown: 'Brooklyn, NY',
    graduatingClass: 2029,
  },
  {
    id: 'magnus-grigsby',
    name: 'Magnus Grigsby',
    photo:
      '/roster/magnus-grigsby.png',
    officerPosition: '',
    role: 'Crew',
    major: 'Aerospace Engineering',
    hometown: 'Aptos, CA',
    graduatingClass: 2029,
  },
  {
    id: 'alvina-lin',
    name: 'Alvina Lin',
    photo: '/roster/alvina-lin.png',
    officerPosition: '',
    role: 'Skipper',
    major: 'Economics, Legal Studies',
    hometown: 'Irvine, CA',
    graduatingClass: 2029,
  },
]

export const rosterPage = {
  title: 'Roster',
  intro: '2026–2027 Cal Sailing Team',
} as const

export function getRosterByClass(): RosterClassSection[] {
  const byClass = new Map<number, RosterMember[]>()

  for (const member of rosterMembers) {
    const group = byClass.get(member.graduatingClass) ?? []
    group.push(member)
    byClass.set(member.graduatingClass, group)
  }

  return [...byClass.entries()]
    .sort(([a], [b]) => a - b)
    .map(([graduatingClass, members]) => ({
      graduatingClass,
      members: [...members].sort((a, b) => a.name.localeCompare(b.name)),
    }))
}

export const pageTemplates: Record<Exclude<PageId, 'home' | 'roster'>, PageTemplate> = {
  about: {
    title: 'About',
    sections: [
      {
        heading: 'About Us',
        paragraphs: [
          'The Cal Sailing Team competes in the PCCSC (Pacific Coast College Sailing Conference), which sanctions collegiate racing on the Pacific Coast and is part of the larger ICSA (Intercollegiate Sailing Association). Cal races against schools such as Stanford, USC, University of Hawaii, UC Santa Barbara, and California Maritime Academy. The team is entirely student-run. We sail FJs at Richmond Yacht Club in the San Francisco Bay. Each year, we host our annual Stoney Burke regatta.',
          'Practices are held Tuesday, Wednesday, and Friday afternoons at Richmond Yacht Club and go from 3pm until dark. Each practice generally follows the practice plan outlined below. The team holds weekly meetings on Mondays at 7pm to discuss team logistics and updates. The team uses Slack as a main form of communication.',
          'Cal Sailing is open to any UC Berkeley students interested in competitive collegiate sailing. To get involved, email us at calsailing@gmail.com.',
        ],
      },
    ],
  },
  news: {
    title: 'News',
    sections: [
      {
        heading: 'Cascadia Cup, October 2025 — Washington',
        body: 'As the rest of the team was heading down to San Diego for Frosh-Soph and UCSD Open earlier this month, four of us flew up to Washington for the Cascadia Cup women\'s regatta. When we touched down Friday evening, we were greeted with cold, rainy conditions...',
      },
      {
        heading: 'Frosh-Soph x UCSD Open, October 2025 — San Diego, CA',
        body: 'Over the weekend of October 11th and 12th, twenty of our beloved Cal sailors headed down to San Diego for the UCSD Open and Frosh Soph. It was my first time in SD (and my first regatta!) so needless to say, I was excited for the weekend...',
      },
      {
        heading: 'Cal Hosts Spring PCCs 2025 — Richmond, CA',
        body: 'We are excited to share that the Cal Sailing Team has been selected to host the Spring 2025 PCCSC Carter Ford Open Fleet race Championships!',
      },
      {
        heading: 'Stoney Burke 2024 — Richmond, CA',
        body: 'Last weekend, the Cal Sailing Team was thrilled to host our home regatta, Stoney Burke, at the (previously unbeknownst to much of the team) Safe Harbor Marina Bay Yacht Club. Set just south of Richmond Yacht Club, the team\'s new practice location...',
      },
      {
        heading: 'Hewitt Trophy Coed Interconference 2024 — Brunswick, ME',
        body: 'The Cal Sailing Team started the year off with a bang by jumping on a plane and heading for the East Coast. Breaking away from the norm, we felt inspired to take on the challenges of an interconference regatta right off the bat! After battling...',
      },
      {
        heading: 'Frosh Soph 2024 — San Diego, CA',
        body: 'Frosh Soph 2024 was yet another beautiful weekend in San Diego hosted by UCSD at Mission Bay Yacht Club. The classic mix of competitive and new sailors were more on fire than ever before, with chaotic moments that always ended with...',
      },
      {
        heading: 'Top 9 Invitational / Women PCCs 2024 — Stanford, CA',
        body: 'On October 26 and 27, Cal Sailing made the 45 minute drive down to Redwood City to compete at the Top 9 Invitational and Women\'s PCCs hosted by Stanford. The format of this regatta was different from most college sailing regattas. Only the top...',
      },
      {
        heading: 'Big Sail 2024 — Saint Francis Yacht Club',
        body: 'The team competed against Stanford in the annual Big Sail...',
      },
      {
        heading: 'Gala 2024 — Fort Mason in SF',
        body: 'The team raised money through a live auction at our annual Cal Sailing gala...',
      },
      {
        heading: 'Rainbow Invite 2024 — Honolulu, Hawaii',
        body: 'Over winter break, team members had a taste of Hawaii as they competed at the Rainbow Invite...',
      },
    ],
  },
  recruitment: {
    title: 'Recruitment',
    sections: [
      {
        heading: 'Recruitment & Joining the Team',
        paragraphs: [
          'We are a competitive racing team, and members are expected to start competing almost immediately. People without prior experience may still join if they can attend at least two practices a week and are dedicated to learning racing. Absolute beginners can start with Cal Adventures or the Cal Sailing Club for introductory lessons.',
          'Prospective members should reach out to the recruitment chair and email calsailing@gmail.com.',
        ],
      },
      {
        heading: 'FAQ',
        bullets: [
          'Competitions are open to undergraduates. Graduate students may practice with the team if they are not competition-eligible.',
          'Dues are $310 per semester, covering travel, fleet maintenance, and a $55 collegiate membership to Richmond Yacht Club. Talk to the team if cost is a barrier — we are flexible.',
          'High school students interested in sailing for Cal should contact calsailing@gmail.com during fall of senior year. We recommend visiting campus and practicing with the team in September or October before applying to Berkeley.',
        ],
      },
    ],
  },
  donations: {
    title: 'Donations',
    sections: [
      {
        heading: 'Give Today',
        body: 'Link to Cal Giving, GoFundMe, or your preferred donation platform.',
      },
      {
        heading: 'Where Funds Go',
        body: 'Explain how donations support boats, sails, and travel.',
      },
      {
        heading: 'Sponsors',
        body: 'Recognize local businesses and alumni supporters.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    sections: [
      {
        heading: 'General Inquiries',
        body: 'Add team email — e.g. sailing@berkeley.edu',
      },
      {
        heading: 'Officers',
        body: 'List President, VP, Treasurer, and Recruitment chair emails.',
      },
      {
        heading: 'Location',
        body: 'Richmond Yacht Club — include address and parking notes.',
      },
    ],
  },
  merch: {
    title: 'Merch',
    sections: [
      {
        heading: 'Current Drop',
        body: 'Link to an order form or storefront for this season’s gear.',
      },
      {
        heading: 'Sizing & Pickup',
        body: 'Explain how and when orders are distributed.',
      },
      {
        heading: 'Past Designs',
        body: 'Show photos of hoodies, tees, and hats from previous years.',
      },
    ],
  },
}