import React from 'react'
import { Button, MenuBar, SearchArea, SearchBar, SearchButton, SearchInput } from '../styledComponents/SearchMenu.style'

const SearchMenu = () => {
  return (
    <div>
          <SearchBar><SearchInput/><SearchButton>Search</SearchButton></SearchBar>
          <MenuBar><Button outline>Trips</Button>
          <Button outline>Food</Button>
          <Button outline>Hotel</Button>
          <Button outline>Places</Button>
          <Button outline>Adventure</Button>
          <Button outline>Workation</Button>
          <Button primary>More</Button>
          </MenuBar>
    </div>
  )
}

export default SearchMenu
