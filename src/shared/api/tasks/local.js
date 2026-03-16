const STORAGE_KEY = 'favorite-bloggers'

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

const localAPI = {
  toggleFavorite: async (id, isFavorite) => {
    await delay()

    const bloggers = read()
      .map((blogger) => {
        return blogger.id === id ? {...blogger,  isFavorite } : blogger
      })

    write(bloggers)
  //   разобраться с toggle
  }
}

export default localAPI