import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    // First we'll get the status pf authentication from the store
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    /* Production logic for building navigation bars:
        Now whenever we make navigation bar, we usually make it as a array of objects and then loop. We don't have to manually insert a new button for every element/links in jsx. 
        Even if we have to add a new link, we just have to add a new object in the array and then the code then loops over his array to dynamically render all the links in the navigation bar. This is a good practice to build scalable react components, and easy to maintain. 
    */
    const navItems = [
        {
            name: 'Home',
            slug: '/', // Its a url
            active: true 
        }, 
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button 
                                    onClick={() => navigate(item.slug)}
                                    className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full'>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {/* NOW FOR LOGOUT BUTTON */}
                        {/* Its a common syntax below when if the condition is true then only the code execute. */}
                        {authStatus && (
                            <li><LogoutBtn /></li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
