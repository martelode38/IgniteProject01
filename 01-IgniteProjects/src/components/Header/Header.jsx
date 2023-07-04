import styles from "./Header.module.css"
import IgniteLogo from "../../assets/Ignite-simbol.svg"

const Header=()=>{

    return(
        <div className = {styles.header}>
        <img src= {IgniteLogo} alt ="Logotipo do ignite"/>

        <h1>Ignite Feed</h1>
        
        </div>
    )
}

export default Header;