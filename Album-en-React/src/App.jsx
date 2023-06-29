import './App.css'
import Album from '../Component/Album'


function App() {

  const song = {
    artist : "Coldplay",
    name : "Amazing Day",
    year : "(2015)",
    genre : "pop",
    img : "/img/Coldplay.png",
  }
  return (
    <>
     <Album props={song}/>
    </>
  )
}

export default App
