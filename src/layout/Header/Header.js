import classNames from "classnames/bind"
import objStyle from "./Header.module.scss" //var obj
function Header() {
    var cv = classNames.bind(objStyle); //static className 'style'
    return (
        <div className={cv('wrap-header')}>
            <div className={cv('wrap-header-content')}>
                <div className={cv('logo')}>
                    <a href="/">
                        <img src="./logo.png" />
                    </a>
                </div>
                <div className={cv('search-block')}>
                    <input className={cv("search-input")} type="search" placeholder="search...." />
                    {/* <span >
                        <i className="fa-sharp fa-solid fa-xmark"></i>
                    </span> */}
                    <span className={cv('search-icon')}>
                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    </span>
                </div>
                <div className={cv('action')}>
                </div>
            </div>
        </div >
    )
}
export default Header