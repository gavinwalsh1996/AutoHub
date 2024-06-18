"use client"

import SearchManufacturer from './SearchManufacturer'
import SearchModel from './SearchModel'
import { useState } from 'react'

function SearchBar() {

const [manufacturer, setManfacturer] = useState('')

const handleSearch = () => {

}   

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            {/* Combo-box / Auto complete search *Predefined array when searching* */}
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManfacturer} />
            <SearchModel />
        </div>
    </form>
  )
}

export default SearchBar