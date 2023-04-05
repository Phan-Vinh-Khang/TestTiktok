import { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo, useReducer, createContext, useContext } from "react";
import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'
import ListRoutes from "./router/mainRoutes";
import MainLayout from "./layout/MainLayout"
function App() {
  return (
    <div className="App">
      <Routes>
        {
          ListRoutes.map((item) => {
            const dlayout = <></>
            const DefaultLayout = (item.layout2 === undefined ? MainLayout : item.layout2)
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
  );
}
export default App;