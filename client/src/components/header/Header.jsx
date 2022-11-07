import "./header.css"
import image1 from "../images/image1.webp"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={image1} alt="image1" />
    </div>
  )
}
