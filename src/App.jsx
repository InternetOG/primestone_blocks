import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import RootLayout from './routes/RootLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import OurBlocks from './pages/OurBlocks'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      // We only have few products on ground, when we have more product, we will have a products seperate page
      // { path: "ourblocks", element: <OurBlocks /> },
      { path: "*", element: <NotFound /> },
    ],
  },
],
  {
    basename: "/primestone_blocks",
  }
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
