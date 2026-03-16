import styles from './Sidebar.module.scss'
import BloggersList from '@/entities/aggregator/ui/BloggersList'
import SearchBloggerForm from '@/features/search-blogger'
import useBloggers from '@/entities/aggregator/model/useBloggers'
import FavoriteButton from '@/features/show-favorites'

const Sidebar = (props) => {
  const {
    className,
  } = props

  const bloggersData = useBloggers()

  // сделать favorite
  // добавить куда нибудь > либо в название либо в поисковую строку

  return (
    <div
      className={styles.sidebar}
    >
      <h2>Bloggers</h2>
      <SearchBloggerForm bloggersData={bloggersData}/>
      <FavoriteButton/>
      <BloggersList bloggersData={bloggersData}/>
    </div>
  )
}

export default Sidebar