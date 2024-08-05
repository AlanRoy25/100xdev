import profilepic from './assets/ronaldo.jpeg'
function Card(){

  return(
    <div className="card">
      <img className="card-image" src={profilepic} alt="Profile pic"></img>
      <h1>Alan coder</h1>
      <p>I am a coder</p>
    </div>
  )
}

export default Card