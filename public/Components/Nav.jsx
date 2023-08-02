import { NavHashLink as Link } from "react-router-hash-link"

const Nav = () => {
    const links = [
        {id: 1, name: "HOME", path: "#hero"},
        {id: 2, name: "ABOUT", path: ""},
        {id: 3, name: "SERVICES", path: ""},
        {id: 4, name: "NEWS", path: ""},
        {id: 5, name: "CONTACT", path: ""}
    ]
    return (
        <nav id="nav">
        <p>Logo</p>
        {links.map(link => (
            <Link
                key={link.id}
                to={link.path}
            >
                {link.name}
            </Link>
        ))}
        <Link>BECOME A MEMBER</Link>
        </nav>
    )
}

export default Nav
