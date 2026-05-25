import type { PageId } from '../types'

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

export const homeAboutShort =
  'The California Golden Bears Sailing Team is a student-run, competitive racing team from UC Berkeley. We compete across the Bay, Southern California, and Hawaii — continuing a Corinthian tradition since 1922.'

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
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
] as const

export const pageTemplates: Record<
  Exclude<PageId, 'home'>,
  { title: string; intro: string; sections: { heading: string; body: string }[] }
> = {
  roster: {
    title: 'Roster',
    intro: 'Add team members, roles, and class years for the current season.',
    sections: [
      {
        heading: 'Varsity',
        body: 'List skippers and crew with names and graduation years.',
      },
      {
        heading: 'Junior Varsity',
        body: 'List JV sailors and alternates.',
      },
      {
        heading: 'Coaches & Leadership',
        body: 'Add coaching staff and officer board contacts.',
      },
    ],
  },
  about: {
    title: 'About',
    intro: 'Extended team history, mission, and facility information.',
    sections: [
      {
        heading: 'Our History',
        body: 'Founded in 1922 — expand on milestones and alumni highlights.',
      },
      {
        heading: 'Richmond Yacht Club',
        body: 'Practice schedule, fleet details, and directions from campus.',
      },
      {
        heading: 'Competition',
        body: 'Describe PCCSC, intersectionals, and travel regattas.',
      },
    ],
  },
  news: {
    title: 'News',
    intro: 'Post regatta results, announcements, and team updates.',
    sections: [
      {
        heading: 'Latest Results',
        body: 'Summarize recent regatta finishes and standout performances.',
      },
      {
        heading: 'Announcements',
        body: 'Share practice changes, social events, and deadlines.',
      },
      {
        heading: 'Archive',
        body: 'Link to past seasons or external news posts.',
      },
    ],
  },
  recruitment: {
    title: 'Recruitment',
    intro: 'How prospective sailors can try out and join the team.',
    sections: [
      {
        heading: 'Who We’re Looking For',
        body: 'Describe experience levels welcome — no prior sailing required.',
      },
      {
        heading: 'Tryouts & Timeline',
        body: 'Add fall recruitment dates, info sessions, and sign-up links.',
      },
      {
        heading: 'FAQ',
        body: 'Time commitment, dues, travel, and academic balance.',
      },
    ],
  },
  donations: {
    title: 'Donations',
    intro: 'Support the team’s equipment, travel, and regatta costs.',
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
    intro: 'Reach the team for recruitment, media, or alumni inquiries.',
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
    intro: 'Team apparel and gear for members and supporters.',
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