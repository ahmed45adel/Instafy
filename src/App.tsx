import './globals.css';
import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/forms/SignupForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";

const App = () => {
  return (
  <main className="flex min-h-screen">
    <Routes>
      {/* public */}
      <Route element={<AuthLayout />}>
        <Route index element={<SigninForm />} />
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Route>
      {/* private */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </main>
  )
}

export default App