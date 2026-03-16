import styles from './FavoriteButton.module.scss'
import Checkbox from '@/shared/ui/Checkbox'
import useBloggers from '@/entities/aggregator/model/useBloggers'

const FavoriteButton = () => {

  const {
    //showOnlyFavorites,
  } = useBloggers()

  const showOnlyFavorites = 0

  return (
    <div className={styles.favoriteButton}>
      <Checkbox checked={showOnlyFavorites} text='избранное'/>
    </div>
  )
}

export default FavoriteButton