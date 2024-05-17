import Logo from './svg/Logo'
import RightArrow from './svg/RightArrow'

const Navbar = ({ title, link } : { title: string, link: string }) => {
  return (
    <div className="flex justify-between items-center max-lg:px-5 px-10 py-5">
        <Logo />
        <a href={link} className="flex gap-5 items-center">
            <p className="leading-[20.83px]">{title}</p>
            <RightArrow />
        </a>
    </div>
  )
}

export default Navbar