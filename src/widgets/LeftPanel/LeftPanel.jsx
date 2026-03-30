import styles from './LeftPanel.module.scss'
import BloggersList from '@/entities/aggregator/ui/BloggersList'
import SearchBloggerForm from '@/features/search-blogger'
import FavoriteButton from '@/features/show-favorites'
import Panel from '@/shared/ui/Panel'
import PanelTitle from '@/shared/ui/PanelTitle'

const LeftPanel = (props) => {
  const { bloggersData } = props

  return (
    <Panel>
      <PanelTitle title="authors" />
      <div className={styles.searchControls}>
        <SearchBloggerForm bloggersData={bloggersData} />
        <FavoriteButton bloggersData={bloggersData} />
      </div>
      <BloggersList bloggersData={bloggersData} />
    </Panel>
  )
}

export default LeftPanel
