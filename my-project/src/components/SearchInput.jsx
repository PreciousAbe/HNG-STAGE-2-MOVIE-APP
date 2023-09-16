import React, { useState } from "react"

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    // Call the onSearch function with the query
    onSearch(query)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchInput
