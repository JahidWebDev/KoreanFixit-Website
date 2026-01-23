import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Page Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      {/* Footer (Always Bottom) */}
      <Footer />

    </div>
  );
}

export default App;
