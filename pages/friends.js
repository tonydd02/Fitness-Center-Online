import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import Link from 'next/link'

export default function HomePage(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => setIsCollapsed(!isCollapsed);
	return(
    <div className="body">
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
          <a className="navbar-brand" href="./"><img className="logo" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/131332214_385203949381880_8224267459901597667_n.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=AQyHzYI9HAkAX-x7eVJ&_nc_ht=scontent-lax3-1.xx&oh=1c4533dfa5d6745e11084bae57dc4464&oe=5FFA7BE4" alt="Treadmills at JWC"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive"  aria-expanded={!isCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className={`${isCollapsed? "collapse":""} "navbar-collapse"`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
				<li className="nav-item">
				  <Link href="./rank"><a className="nav-link">Rank
					</a>
				  </Link>
				</li>
				<li className="nav-item">
				  <Link href="./search">
					<a className="nav-link">Search
					</a>
				  </Link>
				</li>
				<li className="nav-item">
				  <Link href="./friends"><a className="nav-link">Friends</a></Link>
				</li>
				<li className="nav-item active">
				  <Link href="../signUp/signup"><a className="nav-link">Sign Out</a></Link>
				</li>
            </ul>
          </div>
          </div>
        </nav>
        <div className="head">
        </div>
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
              <h1 className="font-weight-light">Friends!!!!!</h1>
              <p className="lead">Here are your friends!!!!!</p>
              <p className="lead">Scroll down to see more friends...</p>
              <div className="blank"></div>
              <p className="lead mb-0">Oops you got no friends!</p>
            </div>
          </div>
        </div>
        <div className="head">
        </div>
        </>
        <style jsx>{`
              .logo{
                height: 70px;
              }
              .body{
                background: url(https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/130220227_384431162792492_8983059439161377899_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=yViejv2y34sAX_pj0He&_nc_ht=scontent-lax3-2.xx&oh=204583bd60d5b5fffc95cdf3c3bcaa4d&oe=5FFC29B7) repeat center center fixed;
                background-size: cover;
              }
              .head{
                height: 80px;
                visibility: hidden;
              }
              .blank{
                height: 700px;
                visibility: hidden;
              }`
            }
        </style>
    </div>
	)
}