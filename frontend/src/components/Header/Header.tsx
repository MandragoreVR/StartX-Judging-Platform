import "./Header.css";

const Header = () : JSX.Element => {
    return (
        <div id="header">
            <img
                src={`${process.env.PUBLIC_URL}/startx-logo.jpg`}
                id="logo"
                alt="StartX Logo"
            />
            <h1 id="title">
                Interview debrief platform
            </h1>
        </div>
    )
}

export default Header;