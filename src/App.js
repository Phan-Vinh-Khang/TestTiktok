import { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo, useReducer, createContext, useContext } from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListRoutes from "./router/mainRoutes";
import MainLayout from "./layout/MainLayout"
function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <div className="App">
        <Routes>
          {
            ListRoutes.map((item) => {

              const dlayout = <></>
              const DefaultLayout = (item.layout === undefined ? MainLayout : item.layout)
              return <Route path={item.path} element=
                {
                  <DefaultLayout>
                    {item.element}
                  </DefaultLayout>
                } />
            })
          }
        </Routes>
      </div>
    </BrowserRouter >
  );
}
export default App;