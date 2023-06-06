import React from 'react'
import { Link } from 'react-router-dom'
import Navlist from './Navlist'

export default function Navbar() {
  return (
    <>
     <nav  class="navbar navbar-expand-lg navbar-light bg-light">
       <div class="container-fluid">
       <span class="badge bg-info text-dark">TODo App</span>
     <Link to ='/signin' >
          </Link>
            <Navlist/>
            </div>    
   </nav> 
    </>
  )
}
