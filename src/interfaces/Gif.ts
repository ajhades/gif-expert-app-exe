export interface IGif {
  id: string
  title: string
  url: string
}

export interface IGifItem {
  title: string
  url: string
}

export interface IGifGrid {
  category: string
}

export interface IGifAPI {
  id: string
  title: string
  images: {
    downsized_medium: { url: string }
  }
}
