import React from 'react'
import Nav from './Nav/Nav'

const Header = () => {
    return (
        <header className="container-fluid no-gutters">
            <div className="row headerbody">
                <div className="col-12 px-0">
                    <Nav />
                </div>
            </div>

        </header>
    )
}

export default Header
