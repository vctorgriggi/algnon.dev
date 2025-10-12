import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'alg.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  href: 'https://algnon.dev',
  author: 'algnon',
  locale: 'pt-BR',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/work',
    label: 'work',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/vctorgriggi',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/algnon_',
    label: 'Twitter',
  },
  {
    href: 'mailto:victor@algnon.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
