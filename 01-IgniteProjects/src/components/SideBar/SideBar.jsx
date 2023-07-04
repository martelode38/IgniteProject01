import styles from "./SideBar.module.css"

const Sidebar = () =>{

return(
    <aside className = {styles.sideBar}>
        <img className ={styles.cover} 
         src="https://www.bengans.se/bilder/artiklar/4090193.jpg?m=1649342249"
         alt="capa tyler"/>
        <div className={styles.profile}></div>
        <span>Artist</span>
        <footer>
            <a href="#">Editar seu Perfil</a>
        </footer>
    </aside>
);
}


export default Sidebar;