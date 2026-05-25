export const site = {
  name: 'Cal Sailing',
  tagline: 'Sail the Bay. Build the crew.',
  description:
    'UC Berkeley’s student sailing club — lessons, regattas, and community on the water.',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Join', href: '#join' },
  { label: 'Contact', href: '#contact' },
] as const

export const about = {
  heading: 'About the club',
  paragraphs: [
    'Cal Sailing brings together students who love wind, water, and teamwork. Whether you’re brand new or racing competitively, there’s a place on our dock.',
    'We run beginner clinics, practice sessions, and social sails throughout the semester. Members learn rigging, navigation, and race tactics from experienced skippers.',
  ],
  highlights: [
    { title: 'Learn to sail', detail: 'Structured clinics for all skill levels' },
    { title: 'Race team', detail: 'Collegiate regattas across California' },
    { title: 'Community', detail: 'Weekly sails and end-of-semester trips' },
  ],
} as const

export const events = [
  {
    date: 'Sep 5',
    title: 'Fall interest meeting',
    location: 'Sproul Plaza',
    description: 'Meet the officers, see the fleet, and sign up for your first sail.',
  },
  {
    date: 'Sep 12',
    title: 'Beginner clinic — Session 1',
    location: 'Berkeley Marina',
    description: 'Introduction to parts of the boat, points of sail, and capsize recovery.',
  },
  {
    date: 'Oct 3',
    title: 'Bay day social sail',
    location: 'Berkeley Marina',
    description: 'Relaxed afternoon on the water. Bring a friend — no experience required.',
  },
] as const

export const join = {
  heading: 'Join the crew',
  steps: [
    'Attend an interest meeting or reach out via email.',
    'Complete a safety briefing and sign the club waiver.',
    'Pay semester dues and reserve your spot on practice sails.',
  ],
  cta: {
    label: 'Email us to join',
    href: 'mailto:sailing@berkeley.edu',
  },
} as const

export const contact = {
  email: 'sailing@berkeley.edu',
  instagram: 'https://instagram.com',
  linktree: 'https://linktr.ee',
} as const
