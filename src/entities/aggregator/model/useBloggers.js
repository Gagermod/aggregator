import { useState, useMemo, useCallback } from 'react'
import initialBloggersData from './bloggers-data'
import { localAPI } from '@/shared/api/tasks'


const useBloggers = () => {
  const [bloggers, setBloggers] = useState(initialBloggersData)
  const [searchQuery, setSearchQuery] = useState('')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const filteredBloggers = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
      ? bloggers.filter(({ name }) => name.toLowerCase().includes(clearSearchQuery))
      : null
  }, [searchQuery, bloggers])

  const bloggersToShow = filteredBloggers ?? bloggers

  const toggleFavoriteBlogger = useCallback((bloggerId, isFavorite) => {
    localAPI.toggleFavorite(bloggerId, isFavorite)
      .then(() => {
        setBloggers((prevBloggers) =>
          prevBloggers.map((blogger) =>
            blogger.id === bloggerId ? { ...blogger, isFavorite } : blogger
          )
        )
      })
  }, [setBloggers])


  return {
    searchQuery,
    setSearchQuery,
    filteredBloggers,
    bloggersToShow,
    toggleFavoriteBlogger,
  }
}

export default useBloggers