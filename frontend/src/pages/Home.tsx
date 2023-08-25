import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Menu from '../components/Menu';
import NewsShow from '../components/NewsShow';
import axios from 'axios';
import Footer from '../components/Footer';
import TopNews from '../components/TopNews';

const Home: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchInitialNews = async () => {
      try {
        const response = await axios.get('http://localhost:3001/news', {
          params: { keyword: "キャッシュレス" }
        });
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchInitialNews();
  }, []);

  return (
    <div>
       <Title />
       <Menu />
       
      <TopNews/>
      <NewsShow news={news} />
      
    </div>
  );
};
export default Home;
