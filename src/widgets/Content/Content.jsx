import { useContext, useState } from 'react'
import styles from './Content.module.scss'
import { BurgerMenuContext } from '@/app/providers/BurgerMenuProvider'
import useBloggers from '@/entities/aggregator/model/useBloggers'
import BloggerDetails from '@/entities/aggregator/ui/BloggerDetails'
import LeftPanel from '@/widgets/LeftPanel'
import MainPanel from '@/widgets/MainPanel'

const Content = () => {
  const { isMenuOpen } = useContext(BurgerMenuContext)

  const bloggersData = useBloggers()

  const [hoveredLinkUrl, setHoveredLinkUrl] = useState(null)

  return (
    <main className={styles.content}>
      <dialog className={styles.dialog} open={isMenuOpen}>
        <LeftPanel bloggersData={bloggersData} />
      </dialog>
      <MainPanel
        bloggersData={bloggersData}
        onLinkHover={setHoveredLinkUrl}
        isMenuOpen={isMenuOpen}
      />
      <BloggerDetails
        bloggersData={bloggersData}
        hoveredLinkUrl={hoveredLinkUrl}
        isMenuOpen={isMenuOpen}
      />
    </main>
  )
}

export default Content
