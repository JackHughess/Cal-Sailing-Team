import { useEffect } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { NewsPage } from './components/NewsPage'
import { NewsPostPage } from './components/NewsPostPage'
import { RosterPage } from './components/RosterPage'
import { TemplatePage } from './components/TemplatePage'
import { pageTitles } from './data/siteContent'
import { pageIdFromPath } from './routes'

function AppLayout() {
  const location = useLocation()
  const activePage = pageIdFromPath(location.pathname)

  useEffect(() => {
    document.title = pageTitles[activePage]
  }, [activePage])

  return (
    <>
      <ScrollRestoration />
      <Header activePage={activePage} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'roster', element: <RosterPage /> },
      { path: 'about', element: <TemplatePage pageId="about" /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:slug', element: <NewsPostPage /> },
      { path: 'recruitment', element: <TemplatePage pageId="recruitment" /> },
      { path: 'donations', element: <TemplatePage pageId="donations" /> },
      { path: 'contact', element: <TemplatePage pageId="contact" /> },
      { path: 'merch', element: <TemplatePage pageId="merch" /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
