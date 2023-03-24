import Home from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload" //ko spicify tên file sẽ ref đến file index
import Search from "../pages/Search/Search.js" //thư mục ko có file index để import dc phải specify tên file

const ListRoutes = [
    {
        path: '/',
        element: <Home />
    }, {
        path: '/Following',
        element: <Following />
    }, {
        path: '/Upload',
        element: <Upload />,
    }, {
        path: '/Search',
        element: <Search />,
    },
]
export default ListRoutes