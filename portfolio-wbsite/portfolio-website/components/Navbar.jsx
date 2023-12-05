import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'


const navLinks =[
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  
  }
]

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={"/"} className='text-3xl text-white font-semibold'>Murat.dev</Link>
            <div id='navbar' className='menu block md:w-auto'>
              <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
