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
    selectBlogger,
    selectedBloggerId,
  } = bloggersData

  const isEmptyFilteredBloggers = filteredBloggers?.length === 0

  if (isEmptyFilteredBloggers) {
    return <div className={styles.notFoundBlogger}>not_found</div>
  }

  return (
    <ul className={styles.bloggersList}>
      {bloggersToShow.map((blogger) => (
        <BloggersItem
          searchQuery={searchQuery}
          key={blogger.id}
          toggleFavoriteBlogger={toggleFavoriteBlogger}
          selectBlogger={selectBlogger}
          selectedBloggerId={selectedBloggerId}
          {...blogger}
        />
      ))}
    </ul>
  )
}

export default memo(BloggersList)
