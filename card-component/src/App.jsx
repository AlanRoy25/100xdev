import Card from "./Card"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

function App() {
  
  return(
    <>

<Card />
    <Card />
    <Student name = "Spongeboob" age={30} isStudent = {true} />
    <Student name = "Bheem" age={20} isStudent = {false} />
    <Student name = "Motu" age={42} isStudent = {true} />
    <Student />
    <UserGreeting  />
    </>
   
  )
  
}

export default App
