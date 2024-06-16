import YouTubeLogo from "./YouTubeLogo"

export default function NavBar () {
    return (
        <nav className=" col-start-1 col-end-3 grid grid-cols-3">
            <div className="flex flex-row items-center gap-1 pl-4">
                <YouTubeLogo  height="1.8rem" width="3rem" />
                <span>YouTube</span>
            </div> 
            <div id="search-container" >
                <input type="text" placeholder="Search" />
            </div>
            <div id="user-icon">
                <img src="https://api.dicebear.com/8.x/notionists/svg?seed=Turkoman" alt="user" />
            </div>
        </nav>
)

}