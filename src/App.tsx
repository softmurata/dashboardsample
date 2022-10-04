import './App.css';
import './styles/sb-admin-2.css'
import LeftMenu from './components/LeftMenu/LeftMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapLocation from './components/MapLocation/MapLocation';
import TeamsInfo from './components/TeamsInfo/TeamsInfo';
import PlayersInfo from './components/PlayersInfo/PlayersInfo';
import Statistics from './components/Statistics/Statistics';
import Comments from './components/Comments/Comments';
import UploadVideo from './components/UploadVideo/UploadVideo';
import TopMenu from './components/TopMenu/TopMenu';
import VideoEditor from './components/VideoEditor/VideoEditor';

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <LeftMenu />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopMenu />
            <Routes>
              <Route path="/" element={<MapLocation />} />
              <Route path="/map" element={<MapLocation />} />
              <Route path="/editor" element={<VideoEditor/>} />
              <Route path="/teams" element={<TeamsInfo />}/>
              <Route path="/players" element={<PlayersInfo />}/>
              <Route path="/statistics" element={<Statistics />}/>
              <Route path="/comments" element={<Comments />} />
              <Route path="/upload" element={<UploadVideo />} />
            </Routes>
          </div>
        </div>
    </Router>
    </div>
  );
}

export default App;
