import React from 'react'

function SearchResults() {
  const searchResults = await Search(searchTerm)
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults