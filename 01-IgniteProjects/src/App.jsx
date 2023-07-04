import Header from "./components/Header/Header";
import Post from "./components/Post";
import "./styles.css"
import styles from "./App.module.css"
import Sidebar from "./components/SideBar/SideBar";

function App() {

  return (
    <>
      <Header/>
      <div className = {styles.wrapper}>
          <Sidebar/>
          <main>
            <Post author ="Diego Fernandes" content="odeio minha vida"/>
            <Post author ="Neymar Jr" content="trai muito ontem"/>
            <Post author ="Martenisss" content="é o mengão esqueça tudo"/>
            <Post author ="De Arrascaeta" content="to com dor na pubis"/>
          </main> 
      </div>
    </>
  )
}

export default App;
