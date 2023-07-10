import { Route, Routes, HashRouter } from "react-router-dom"
import styles from "./App.module.scss"
import { Main, StepOne, StepTwo, StepTree } from "./pages"

function App() {
  return (
    <div className={styles.App}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/stepone" element={<StepOne />} />
          <Route path="/steptwo" element={<StepTwo />} />
          <Route path="/steptree" element={<StepTree />} />
          <Route path="/*" element={<></>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
