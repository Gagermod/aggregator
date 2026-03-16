import styles from './SearchBloggerForm.module.scss'
import Field from '@/shared/ui/Field'

const SearchBloggerForm = (props) => {
  const { bloggersData } = props

  const {
    searchQuery,
    setSearchQuery,
  } = bloggersData

  return (
    <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <Field
          className={styles.field}
          label='Найти автора'
          id='search-blogger'
          type='search'
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
        />
    </form>
  )
}

export default SearchBloggerForm