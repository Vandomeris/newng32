export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export interface fetchProducts {
    products: Product[]
    total: number
    skip: number
    limit: number
}

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}