import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text } from '@chakra-ui/react';


interface Props {
  setNews: (news: any[]) => void;
  defaultKeyword: string;
}

const NewsSearch: React.FC<Props> = ({ setNews, defaultKeyword }) => {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [noNewsMessage, setNoNewsMessage] = useState(''); // 該当ニュースがない場合のメッセージ

  useEffect(() => {
    setKeyword(defaultKeyword);
  }, [defaultKeyword]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/news', {
        params: { keyword: keyword }
      });
      
      if (response.data.length === 0) { // データが空の場合
        setNoNewsMessage('該当ニュースありませんでした。');
        setNews([]);
      } else {
        setNoNewsMessage(''); // メッセージをクリア
        setNews(response.data);
      }
      
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []); // keywordを変更する度にニュースを再取得

  return (
    <div>
      <Text fontWeight="bold">{keyword}</Text>     
      {noNewsMessage && <p>{noNewsMessage}</p>} {/* 該当ニュースがない場合のメッセージを表示 */}
    </div>
  );
};

export default NewsSearch;
