import classNames from "classnames/bind"
import objStyle from "./Content.module.scss" //var obj
import Sidebar from "../Sidebar/Sidebar";
function Content({ children }) {
    var cv = classNames.bind(objStyle); //static className 'style'
    return (
        <div className={cv('wrapper')}>
            <div className={cv('wrapper-body')}>
                <Sidebar></Sidebar>
                <div className={cv('wrap-content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Content