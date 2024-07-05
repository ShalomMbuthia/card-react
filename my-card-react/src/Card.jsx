import profilepic from './assets/sponsor.jpeg'
function Card(){
  return(
     <div className="card">
      <img className="card-image"src={profilepic} alt="Profile picture"></img>
      <h2 className="card-name">Shalom</h2>
      <p className="card-text">I am currently working on web development</p>
    
     </div>
  );//ive used classname because im implementing css
}
export default Card;
//because class is a reserved keyword in jsx we write it as className