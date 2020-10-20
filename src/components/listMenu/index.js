import React from 'react'
import { Link } from 'react-router-dom'


const ListMenu = ({ linkTo, children }) => {
    return (
        <>
            <div className="list-menu py-3 my-2 hover:bg-black transition-all duration-200">
                <Link to={linkTo} className="link-wrapped">
                    {
                        children
                    }
                </Link>
            </div>
        </>
    )
}

export default ListMenu;
