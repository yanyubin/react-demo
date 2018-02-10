import React from 'react'
import PropTypes from 'prop-types'

const getInput = (e) => e.target.value

const SearchBar = ({
    filterText,
    onUserInput
}) => (
    <input 
    	type="search"
    	placeholder="Search"
    	value={filterText}
    	onChange={(e) => onUserInput(getInput(e))}
    />
)

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

export default SearchBar