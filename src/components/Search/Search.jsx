import styles from './Search.module.css'
import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

export const Search = ({ handleSearchClick }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('')

  const handleClick = useCallback(() => {
    handleSearchClick(searchTerm, searchType)
    setSearchTerm('')
    setSearchType('')
  }, [searchTerm, searchType, handleSearchClick])

  const handleInputChange = useCallback(e => {
    setSearchTerm(e.target.value)
  }, [])

  const handleSelectChange = useCallback(e => {
    setSearchType(e.target.value)
  }, [])

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="enter movie title"
        onChange={handleInputChange}
        value={searchTerm}
      />
      <select
        className={styles.select}
        onChange={handleSelectChange}
        value={searchType}
      >
        <option value="">all</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>

      <button
        className={styles.search}
        disabled={!searchTerm.trim()}
        onClick={handleClick}
      >
        search
      </button>
    </div>
  )
}

Search.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
}
