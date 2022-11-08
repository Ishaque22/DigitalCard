import avatar from '../assets/avatar.png'
import linkedIn from '../assets/btnIcons/Vector.png'
import message from '../assets/btnIcons/Icon.png'

const Info = () => {
  return (
    <div className='info'>
       <img src={avatar} alt="" />
       <h2>Laura Smith</h2>
       <p className='clr'>Frontend Developer</p>
       <p className='site'>laurasmith.website</p>
       <div className="btn">
        <button><img className='fa' src={message}/>Email</button>
        <button><img className='fa' src={linkedIn}/>LinkedIn</button>
       </div>
    </div>
  )
}

export default Info
