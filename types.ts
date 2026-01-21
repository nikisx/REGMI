export interface NavItem {
  label: string;
  href: string;
}

export interface BoardMember {
  name: string;
  role: string;
  title: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
}
