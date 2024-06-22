import "./navBar.css"
const img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1SB8SXCwwBgdFXar9kDMu1FH2bBiZ6XDRg&s"
function NavBar(){
    return(
        <>
            <header class="header-navbar">
                <div id="img">
                    <img width={90} src={img} alt="logo" />
                </div>
                <div id="ancoras">
                    <a class ="ancora-header" id="ancora1" href="https://github.com/muriloruz/WebSites">Github</a>
                    <a class = "ancora-header" id = "ancora2" href="https://www.linkedin.com/in/murilo-ruz-soares-21ba7222a/">Linkedin</a>
                </div>
                
            </header>
        </>
    )
}

export default NavBar