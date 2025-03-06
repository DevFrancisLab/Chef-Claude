import chefClaude from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaude} alt="chef-clude-icon" className="header-icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}