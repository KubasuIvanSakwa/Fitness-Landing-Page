import { NavHashLink as Link } from "react-router-hash-link"


const Nav = () => {
    const logo = `&#9660;`
    const links = [
        {id: 1, name: "HOME", path: "#hero"},
        {id: 2, name: "ABOUT",  path: ""},
        {id: 3, name: "SERVICES", path: ""},
        {id: 4, name: "NEWS", path: ""},
        {id: 5, name: "CONTACT", path: ""}
    ]
    return (
        <nav id="nav">
            <div className="nav-links">
                <h1>FITNE<span>ZZ</span></h1>
                {links.map(link => (
                    <Link
                        key={link.id}
                        to={link.path}
                    >
                        {link.name}
                        {link.name === 'SERVICES' ? <span className="serv">&#x25BC;</span> : ''}
                    </Link>
                ))}
            </div>
            <Link
            className="lin"
            >
                <p>
                    BECOME A MEMBER
                </p>
            </Link>
        </nav>
    )
}

export default Nav
