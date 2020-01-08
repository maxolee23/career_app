import React from 'react';
import {Search, Dropdown} from 'semantic-ui-react'

export default function SearchBar (props) {
    // console.log(props.categories)
  

    return (
        <div>
        <Search stlye={{width: '100%', textAlign: 'center'}}placeholder='Type in your career' onSearchChange={(e) => props.search(e)}/>
        
        </div>
    )
}


