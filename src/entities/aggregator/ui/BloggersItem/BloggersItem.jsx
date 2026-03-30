import { useContext } from 'react'
import styles from './BloggersItem.module.scss'
import { BurgerMenuContext } from '@/app/providers/BurgerMenuProvider'
import Checkbox from '@/shared/ui/Checkbox'
import { highlightCaseInsensitive } from '@/shared/utils/highlight'

const BloggersItem = (props) => {
  const {
    id,
    name,
    isFavorite,
    link,
    toggleFavoriteBlogger,
    searchQuery,
    selectBlogger,
    selectedBloggerId,
  } = props

  const { setIsMenuOpen } = useContext(BurgerMenuContext)

  const highlightedName = highlightCaseInsensitive(name, searchQuery)

  const handleClick = () => {
    selectBlogger(id)
    setIsMenuOpen(false)
  }

  const handleToggleFavorite = (event) => {
    toggleFavoriteBlogger(id, event.target.checked)
  }

  const isSelected = selectedBloggerId === id

  return (
    <li
      className={`${styles.bloggersItem} ${isSelected ? styles.selected : ''}`}
      onClick={() => handleClick()}
    >
      <div className={styles.blogger}>
        <img
          className={styles.image}
          src={link}
          alt={`Фотография ${name}`}
          loading="lazy"
        />
        <h3
          className={styles.bloggerName}
          dangerouslySetInnerHTML={{ __html: highlightedName }}
        />
      </div>
      <Checkbox
        name={name}
        id={id}
        checked={isFavorite}
        onChange={handleToggleFavorite}
      />
    </li>
  )
}

export default BloggersItem
