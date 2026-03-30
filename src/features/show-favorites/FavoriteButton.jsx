import styles from './FavoriteButton.module.scss'
import Checkbox from '@/shared/ui/Checkbox'

const FavoriteButton = (props) => {
  const { bloggersData } = props

  const { showOnlyFavorites, handleToggleMode } = bloggersData

  return (
    <div className={styles.favoriteButton}>
      <Checkbox
        id="favoriteButton"
        name="Show only favorites"
        text="SHOW_FAVORITES"
        checked={showOnlyFavorites}
        onChange={handleToggleMode}
      />
    </div>
  )
}

export default FavoriteButton
