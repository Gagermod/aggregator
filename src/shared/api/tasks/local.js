import initialBloggersData from '@/entities/aggregator/model/bloggers-data'

const STORAGE_KEY = 'favorite-bloggers'
const STORAGE_MODE_KEY = 'favorite-mode'
const SELECTED_KEY = 'selected-blogger-id'
const FAVORITES_KEY = 'favorites'
const VERSION_KEY = 'bloggers-version'
const CURRENT_VERSION = 1 // смена версии LS

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch (error) {
    return []
  }
}

const write = (bloggers) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bloggers))
}

const delay = (ms = 150) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const getVersion = () => {
  try {
    return parseInt(localStorage.getItem(VERSION_KEY)) || 0
  } catch {
    return 0
  }
}

const setVersion = () => {
  localStorage.setItem(VERSION_KEY, CURRENT_VERSION)
}

const saveFavorites = (bloggers) => {
  const favorites = bloggers
    .filter((blogger) => blogger.isFavorite)
    .map((blogger) => blogger.id)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

const restoreFavorites = (bloggers) => {
  const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
  return bloggers.map((blogger) => ({
    ...blogger,
    isFavorite: saved.includes(blogger.id),
  }))
}

const localAPI = {
  getAll: async () => {
    await delay()

    const savedVersion = getVersion()
    const data = read()

    if (savedVersion !== CURRENT_VERSION || data.length === 0) {
      const newBloggers = restoreFavorites(initialBloggersData)
      write(newBloggers)
      setVersion()
      saveFavorites(newBloggers)
      return newBloggers
    }

    const restored = restoreFavorites(data)

    if (JSON.stringify(restored) !== JSON.stringify(data)) {
      write(restored)
      saveFavorites(restored)
    }

    return restored
  },

  toggleFavorite: async (id) => {
    await delay()

    const bloggers = read()
    const updated = bloggers.map((blogger) =>
      blogger.id === id
        ? { ...blogger, isFavorite: !blogger.isFavorite }
        : blogger
    )

    write(updated)
    saveFavorites(updated)
    return updated
  },

  getFavoriteMode: async () => {
    const saved = localStorage.getItem(STORAGE_MODE_KEY)
    return saved ? JSON.parse(saved) : false
  },

  setFavoriteMode: async (mode) => {
    localStorage.setItem(STORAGE_MODE_KEY, JSON.stringify(mode))
    return mode
  },

  toggleFavoriteMode: async () => {
    const current = await localAPI.getFavoriteMode()
    return localAPI.setFavoriteMode(!current)
  },

  getSelectedBloggerId: async () => {
    await delay()
    const saved = localStorage.getItem(SELECTED_KEY)
    return saved ? JSON.parse(saved) : '1'
  },

  setSelectedBloggerId: async (id) => {
    await delay()
    localStorage.setItem(SELECTED_KEY, JSON.stringify(id))
    return id
  },
}

export default localAPI
