import { Header } from "./Components/Header"
import { Post } from "./Components/Post"
import { Sidebar } from "./Components/Sidebar"

import styles from "./styles/app.module.scss"

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      name:  "Batman",
      role: "Prende bandidos",
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa."},
      {type: "paragraph", content: " É um projeto que fiz no NLW Return, evento da Rocketseat."},
      {type: "paragraph", content: "O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-05-09 00:28:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://images.unsplash.com/photo-1657558045738-21507cf53606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      name:  "Ironman",
      role: "I'm Iron Man",
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa."},
      {type: "paragraph", content: " É um projeto que fiz no NLW Return, evento da Rocketseat."},
      {type: "paragraph", content: "O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-05-09 02:00:00')
  },
  {
    id: 3,
    author:{
      avatarUrl: "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      name:  "Deadpool",
      role: "Sdds da minha mulher",
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa."},
      {type: "paragraph", content: " É um projeto que fiz no NLW Return, evento da Rocketseat."},
      {type: "paragraph", content: "O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-05-09 10:00:00')
  },
]

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
