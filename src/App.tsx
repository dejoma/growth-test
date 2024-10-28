import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout"
import { HomePage } from "@/pages/home"
import { ModelPage } from "@/pages/model"
import { AnalysePage } from "@/pages/analyse"
import { AdoptPage } from "@/pages/adopt"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/analyse" element={<AnalysePage />} />
          <Route path="/adopt" element={<AdoptPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
