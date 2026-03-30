import { useState, useMemo, useCallback, useEffect } from 'react'
import initialBloggersData from './bloggers-data'
import { localAPI } from '@/shared/api/tasks'

const useBloggers = () => {
  const [bloggers, setBloggers] = useState(initialBloggersData)
  const [searchQuery, setSearchQuery] = useState('')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  const [selectedBloggerId, setSelectedBloggerId] = useState('1')

  useEffect(() => {
    localAPI.getAll().then(setBloggers)
  }, [])

  useEffect(() => {
    localAPI.getFavoriteMode().then(setShowOnlyFavorites)
  }, [])

  useEffect(() => {
    localAPI.getSelectedBloggerId().then(setSelectedBloggerId)
  }, [])

  const handleToggleMode = useCallback(() => {
    localAPI.toggleFavoriteMode().then(setShowOnlyFavorites)
    setSearchQuery('')
  }, [])

  const filteredBloggers = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
      ? bloggers.filter(({ name }) =>
          name.toLowerCase().includes(clearSearchQuery)
        )
      : bloggers
  }, [searchQuery, bloggers])

  const bloggersToShow = useMemo(() => {
    const filtered = searchQuery
      ? bloggers.filter(({ name }) =>
          name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : bloggers

    if (showOnlyFavorites) {
      return filtered.filter((blogger) => blogger.isFavorite)
    }

    return filtered
  }, [bloggers, searchQuery, showOnlyFavorites])

  const toggleFavoriteBlogger = useCallback((bloggerId) => {
    localAPI.toggleFavorite(bloggerId).then((updated) => {
      setBloggers(updated)
    })
  }, [])

  const selectBlogger = useCallback((id) => {
    setSelectedBloggerId(id)
    localAPI.setSelectedBloggerId(id)
  }, [])

  const categories = useMemo(() => {
    const allCategories = new Set()

    bloggers.forEach((blogger) => {
      if (blogger.content) {
        Object.keys(blogger.content).forEach((category) =>
          allCategories.add(category)
        )
      }
    })

    return Array.from(allCategories)
  }, [bloggers])

  const selectedBlogger = useMemo(() => {
    return bloggers.find((blogger) => blogger.id === selectedBloggerId)
  }, [bloggers, selectedBloggerId])

  const bloggerContent = useMemo(() => {
    return selectedBlogger.content || {}
  }, [selectedBlogger])

  return {
    bloggers,
    searchQuery,
    setSearchQuery,
    showOnlyFavorites,
    selectedBloggerId,
    selectBlogger,
    handleToggleMode,
    filteredBloggers,
    bloggersToShow,
    toggleFavoriteBlogger,
    categories,
    selectedBlogger,
    bloggerContent,
  }
}

export default useBloggers
