import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Coffee from './pages/Coffee';
import Home from './pages/Home';
import Tea from './pages/Tea';
import StorePage from './pages/StorePage';
import DetailStore from './pages/DetailStore';
import RecruitmentPage from './pages/RecruitmentPage';
import RewardPage from './pages/RewardPage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/collections/ca-phe-tai-nha' element={<Coffee />}></Route>
            <Route path='/collections/tra-tai-nha' element={<Tea />}></Route>
            <Route path='/pages/danh-sach-cua-hang' element={<StorePage />}></Route>
            <Route path='/pages/tuyen-dung' element={<RecruitmentPage />}></Route>
            <Route path='/pages/reward' element={<RewardPage />}></Route>
            <Route path='/blogs/:slug' element={<DetailStore />}></Route>
            <Route path='/collections/all' element={<MenuPage />}></Route>
            <Route path='/collections/ca-phe' element={<MenuPage props='coffe' />}></Route>
            <Route path='/collections/tra' element={<MenuPage props='tea' />}></Route>
            <Route path='/collections/other' element={<MenuPage props='other' />}></Route>
            <Route path='/collections/snack' element={<MenuPage props='snack' />}></Route>
            <Route path='/collections/home' element={<MenuPage props='home' />}></Route>
            <Route path='/pages/chuyen-ca-phe-va-tra' element={<StoryPage />}></Route>
            <Route path='/pages/chuyen-ca-phe-va-tra/Coffeeholic' element={<StoryPage props={'Coffeeholic'} />}></Route>
            <Route path='/pages/chuyen-ca-phe-va-tra/Teaholic' element={<StoryPage props={'Teaholic'} />}></Route>
            <Route path='/pages/chuyen-ca-phe-va-tra/Blog' element={<StoryPage props={'Blog'} />}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
