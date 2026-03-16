import { memo } from 'react'
import styles from './BloggersList.module.scss'
import { BloggersItem } from '@/entities/aggregator'

const BloggersList = (props) => {
  const { bloggersData } = props

  const {
    bloggersToShow,
    filteredBloggers,
    toggleFavoriteBlogger,
    searchQuery,
  } = bloggersData

  const isEmptyFilteredBloggers = filteredBloggers?.length === 0

  if (isEmptyFilteredBloggers) {
    return (<div className={styles.emptyMessage}>Не найден</div>)
  }


  return (
    <ul className={styles.bloggersList}>
      {bloggersToShow.map((blogger) => (
        <BloggersItem
          searchQuery={searchQuery}
          key={blogger.id}
          toggleFavoriteBlogger={toggleFavoriteBlogger}
          {...blogger}
        />
      ))}
    </ul>
  )
}

export default memo(BloggersList)