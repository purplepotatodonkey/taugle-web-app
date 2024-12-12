import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from '@/pages/LandingPage';
import Chat from '@/pages/ChatPage';
import VideoStreamProvider from '@/features/videoChat/providers/VideoStreamProvider';

function App() {
  return (
    <VideoStreamProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </VideoStreamProvider>
  );
}

export default App;
