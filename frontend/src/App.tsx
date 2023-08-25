import React from 'react';
import { Box } from '@chakra-ui/react';  // Chakra UIのBoxコンポーネントをインポート
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Credit from './pages/Credit';
import QRCode from './pages/QRCode';
import Point from './pages/Point';
import Mile from './pages/Mile';

function App() {
  return (
    <Router>
      <Box bg="white" minH="100vh">  {/* 背景色を薄いグレーにし、最小の高さをビューポートの100%に設定 */}
        <Header />
        <Box as="main" p={0} m={0}> {/* 主要なコンテンツ部分にパディングを追加 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/qrcode" element={<QRCode />} />
            <Route path="/point" element={<Point />} />
            <Route path="/mile" element={<Mile />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
