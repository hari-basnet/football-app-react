import React from 'react'
import Header from '../components/Header_Footer/Header'

const Layout = (props) => {
    return (
        <div>
            hello
            <Header />
            {props.children}
        </div>
    )
}

export default Layout

