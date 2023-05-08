import { Header } from "./Components/Header"
import { Sidebar } from "./Components/Sidebar"

import styles from "./styles/app.module.scss"

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>post</h1>
          <h1>post</h1>
        </main>
      </div>
    </>
  )
}

export default App
