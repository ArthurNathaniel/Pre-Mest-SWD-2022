import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="nav-logo">
                <img src="./logo192.png"  alt="logo" />
                 <h1>ReactFacts</h1>
                </div>
                <ol className="nav-items">
                   
                    <li>React Course</li>
                    <li>-</li>
                    <li>Project 1</li>
                    
                </ol>
            </nav>
        </header>
    )
}
