import styles from './BloggersItem.module.scss'
import Checkbox from '@/shared/ui/Checkbox'
import { highlightCaseInsensitive } from '@/shared/utils/highlight'

const BloggersItem = (props) => {
  const {
    className = '',
    id,
    name,
    isFavorite,
    link,
    toggleFavoriteBlogger,
    searchQuery,
  } = props

  const highlightedName = highlightCaseInsensitive(name, searchQuery)

  return (
    <li
      className={`
        ${styles.bloggersItem}
        ${className}
      `}
    >
      <div className={styles.blogger}>
        <img
          className={styles.image}
          src={link}
          alt={`Фотография ${name}`}
          loading="lazy"
        />
        <h3 dangerouslySetInnerHTML={{ __html: highlightedName }} />
      </div>
      <Checkbox
        name={name}
        id={id}
        checked={isFavorite}
        toggleFavoriteBlogger={toggleFavoriteBlogger}
      />
    </li>
  )
}

export default BloggersItem