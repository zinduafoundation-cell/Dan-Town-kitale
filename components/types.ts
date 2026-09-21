export type Product = {
  id: string
  name: string
  category: string
  brand: string
  description: string
  image: string
  images?: [string, string, string]
  price?: number
  priceLabel?: string
  featured?: boolean
}

export type Service = {
  id: string
  title: string
  description: string
  image: string
  icon?: string
  number?: string
  items?: string[]
}

export type Brand = {
  id: string
  name: string
  logo: string
  color: string
  background: string
}

export type GalleryItem = {
  id: string
  title: string
  category: string
  image: string
  images?: [string, string, string]
  description?: string
}

export type BlogPost = {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  slug: string
}