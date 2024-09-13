import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components'
import MovieInfoPage from './pages/MovieInfoPage'
import Home from './pages/Home'
import Watched from './pages/Watched'
import WatchList from './pages/WatchList'
import Favourites from './pages/Favorites'
import MainLayout from './components/layouts/MainLayout/MainLayout'

export const App = () => {
  return (
    <Router>
      <Header />

      <MainLayout>
        <Routes>
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/" element={<Home />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/movie/:id" element={<MovieInfoPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}
