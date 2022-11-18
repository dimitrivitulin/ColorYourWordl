import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContextProvider } from "./contexts/AuthContext"
import PrivateRoute from "./pages/PrivateRoute"
import Auth from "./pages/Auth"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Grid from "./components/GridComponents/Grid"
import { FilterContextProvider } from "./contexts/FilterContext"

function App() {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <FilterContextProvider>
        <Routes>
          <Route 
          path="/" 
          element={
            <PrivateRoute>
                <Home/>
            </PrivateRoute>
          }/>
          <Route 
          path="/grid" 
          element={
            <PrivateRoute>
                <Grid/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
        </FilterContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
