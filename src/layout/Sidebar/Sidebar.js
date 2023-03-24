import classNames from "classnames/bind"
import objStyle from "./Sidebar.module.scss" //var obj
function Sidebar() {
    var cv = classNames.bind(objStyle); //static className 'style'
    return (
        <div className={cv('wrap-sidebar')}>
            <div className={cv('wrap-sidebar-content')}>

            </div>
        </div >
    )
}
export default Sidebar