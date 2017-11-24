import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFoundComponent() {
    return (
        <div>
            <h1 class="error-template"> Oops...</h1>
            <h2 class="error-details"> Requested page not found</h2>
            <Link to='/'> Lets go back to our book shelves</Link>
        </div>
    );
}

export default PageNotFoundComponent;