import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="Footer-Element">
           <div className="container pt-5">
               <div className="row mx-auto">

                   <div className="col-12 col-sm-4 pb-3">
                       <ul className="footer-list text-center text-sm-left footer-links">
                           <li><Link to="/"><span className="danish">Forside</span> <span className="english">Home</span> </Link></li>
                           <li><Link to="/dykkerspots"><span className="danish">Dykkerspots</span> <span className="english">Diving Spots</span></Link></li>
                           <a href="https://fourth-groove-289807.ew.r.appspot.com/admin/" target="_blank" rel="noopener noreferrer"> <span className="danish">Admin</span> <span className="english">Admin</span> </a>
                       </ul>
                   </div>

                   <div className="col-12 col-sm-4 text-center">
                        <h5 className="font-weight-bold">Diving Djursland</h5>
                        <p className="mb-1">Svinget 2</p>
                        <p className="mb-1">8570 Trustrup</p>
                        <p className="mb-1">Lyngby</p>
                   </div>

                   <div className="col-12 col-sm-4 text-center">
                        <h5 className="font-weight-bold"><span className="danish">Kontakt</span> <span className="english">Contact</span></h5>
                        <p className="mb-1">+45 42 78 96 05</p>
                        <p>contact@scubafun.dk</p> 
                   </div>

               </div>
               <div className="row">
                   <div className="col-12 pt-5">
                   <p className="text-center">Copyright 2020 © Diving Djursland</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Footer
