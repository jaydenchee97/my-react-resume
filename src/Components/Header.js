import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Header.css';


const Header = ( {data} ) => {

    return(
        <header id="home">

            <nav id="nav-wrap" className="navbar navbar-dark bg-dark justify-content-center">
                    <a className="smoothscroll nav-item nav-link px-3 text-white" href="#home">Home</a>
                    <a className="smoothscroll nav-item nav-link px-3 text-white" href="#about">About</a>
                    <a className="smoothscroll nav-item nav-link px-3 text-white" href="#resume">Resume</a>
                    <a className="smoothscroll nav-item nav-link px-3 text-white" href="#project">Project</a>
            </nav>

            <div className="row banner text-white m-5 p-5 mt-5 pt-5">
                <div className="banner-text">
                    <h1 className="responsive-headline"> Hi, I'm {data.name} </h1>
                    <h3>I'm a <span> {data.occupation} </span>. {data.description}</h3>
                    <hr />
                    <ul className="social">
                        {data.social.map(
                            (social) => {
                                return (<li key={social.name}><a href={social.url}><i className={social.className}></i></a></li>);
                                
                            }
                        )}
                    </ul>
                </div>
            </div>
            <p className="scrolldown text-white">
                <a className="smoothscroll" href="#about"><i className="fa fa-arrow-circle-down"> </i></a>
            </p>

        </header>
    );
}

export default Header;