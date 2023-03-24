import classNames from "classnames/bind"
import objStyle from "./Header.module.scss" //var obj
function Header() {
    var cv = classNames.bind(objStyle); //static className 'style'
    return (
        <div className={cv('wrap-header')}>
            <div className={cv('wrap-header-content')}></div>
        </div >
    )
}
export default Header