import Header from "./Header/Header"
import Content from "./Content/Content"
import Sidebar from "./Sidebar/Sidebar"
function MainLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <Content children2={children} />
        </div>
    )
}
// function MainLayout2({ children }) {
//     return (
//         <div>
//             <Header></Header>
//             <div className="wrap-content" >
//                 {children}
//             </div>
//             <Footer></Footer>
//         </div>
//     )
// }
export default MainLayout
// export { MainLayout2 }