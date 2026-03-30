import styles from './BloggerDetails.module.scss'
import Panel from '@/shared/ui/Panel'
import PanelTitle from '@/shared/ui/PanelTitle'
import { getDomain } from '@/shared/utils/getDomain'

const BloggerDetails = (props) => {
  const { bloggersData, hoveredLinkUrl, isMenuOpen } = props

  const { selectedBlogger, categories, bloggerContent } = bloggersData

  const availableCategories = categories.filter(
    (category) => bloggerContent[category].length > 0
  )

  const availableCategoriesFormatted = availableCategories
    .map((category) => category.toLowerCase())
    .join(', ')

  const domain = getDomain(hoveredLinkUrl)

  return (
    <Panel>
      <PanelTitle title="profile" additionalDecor="--status" />
      <img
        className={styles.bloggerImage}
        src={selectedBlogger.link}
        alt=""
        width={400}
        height={400}
        loading="lazy"
      />
      <div
        className={`${styles.bloggerStatus} ${isMenuOpen ? styles.hidden : ''}`}
      >
        <h3 className={styles.bloggerName}>{selectedBlogger.name}</h3>
        <div className={styles.domain}>{domain || 'no_info'}</div>
        <div className={styles.status}>{availableCategoriesFormatted}</div>
      </div>
    </Panel>
  )
}

export default BloggerDetails
