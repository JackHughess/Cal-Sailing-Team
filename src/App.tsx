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
import { TemplatePage } from './components/TemplatePage'
import { pageIdFromPath } from './routes'
import type { PageId } from './types'

const PAGE_TITLES: Record<PageId, string> = {
  home: 'Cal Sailing Team | UC Berkeley',
  roster: 'Roster | Cal Sailing Team',
  about: 'About | Cal Sailing Team',
  news: 'News | Cal Sailing Team',
  recruitment: 'Recruitment | Cal Sailing Team',
  donations: 'Donations | Cal Sailing Team',
  contact: 'Contact | Cal Sailing Team',
  merch: 'Merch | Cal Sailing Team',
}

function AppLayout() {
  const location = useLocation()
  const activePage = pageIdFromPath(location.pathname)

  useEffect(() => {
    document.title = PAGE_TITLES[activePage]
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
      { path: 'roster', element: <TemplatePage pageId="roster" /> },
      { path: 'about', element: <TemplatePage pageId="about" /> },
      { path: 'news', element: <TemplatePage pageId="news" /> },
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
