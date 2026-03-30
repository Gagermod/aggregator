import { useEffect, useState } from 'react'
import styles from './MainPanel.module.scss'

const MainPanel = (props) => {
  const { bloggersData, onLinkHover, isMenuOpen } = props

  const { categories, bloggerContent, selectedBloggerId } = bloggersData

  const [selectedCategory, setSelectedCategory] = useState('MOVIES')

  const currentLinks = bloggerContent[selectedCategory] || []
  const hasContent = (category) => {
    return bloggerContent[category]?.length > 0
  }

  useEffect(() => {
    const firstAvailable = categories.find((category) => hasContent(category))
    if (firstAvailable && selectedCategory !== firstAvailable) {
      setSelectedCategory(firstAvailable)
    }
  }, [selectedBloggerId, categories])

  const handleMouseEnter = (url) => {
    onLinkHover(url)
  }

  const handleMouseLeave = () => {
    onLinkHover(null)
  }

  return (
    <div className={styles.mainPanel}>
      <ul
        className={`${styles.categories} ${isMenuOpen ? styles['categories--hidden'] : ''}`}
      >
        {categories.map((category) => {
          const isAvailable = hasContent(category)
          return (
            <li key={category}>
              <button
                className={`
                ${styles.categoryButton}
                ${selectedCategory === category ? styles.selected : ''}
                ${!isAvailable ? styles.disabled : ''}
              `}
                onClick={() => setSelectedCategory(category)}
                disabled={!isAvailable}
              >
                {category}
              </button>
            </li>
          )
        })}
      </ul>
      <ul className={styles.linkList}>
        {currentLinks.map((link) => (
          <li
            className={styles.item}
            key={link.id}
            onMouseEnter={() => handleMouseEnter(link.url)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              className={styles.linkContainer}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.link}>{link.title}</span>
              <div className={styles.linkMeta}>
                <span className={styles.linkSign}>CLICK TO OPEN</span>
                <span className={styles.linkType}>FORMAT: {link.type}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainPanel
