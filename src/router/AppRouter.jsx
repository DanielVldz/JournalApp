import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />
            {/* Login y Registro */}
            
        <Route  path="/*" element={ <JournalRoutes/> } />
            {/* JournalApp */}
    </Routes>
  )
}
