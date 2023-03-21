import { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo, useReducer, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Following from "./pages/Following"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Following" element={<Following />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;