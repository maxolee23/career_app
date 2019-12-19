import React from 'react';
import { Link } from 'react-router-dom';
// import Career from './Career'
// import NavBar from './NavBar'

export default function Category(props) {
    console.log('props in Category', props)

    return (
        <div>
            
            <Link to={{
                pathname: '/careers', 
                state: {
                    category: props.category
                }
            }}><h3>{props.category.title}</h3></Link>
        </div>
    )
}
