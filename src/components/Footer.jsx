import twiiter from '../assets/icons/Twitter.png'
import facebook from '../assets/icons/Facebook.png'
import instagram from '../assets/icons/Instagram.png'
import github from '../assets/icons/GitHub.png'
 

export const Footer = () => {
  return (
    <div className='footer'>
        <img src={twiiter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={github} alt="" />
    </div>
  )
}
