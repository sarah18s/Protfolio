import React, { useEffect } from'react';
import './App.css';
import { Pages } from './components/main/Pages';

import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages />
    </>
  )
}
export default App;
