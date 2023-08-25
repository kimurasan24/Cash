import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsSearch from "../components/NewsSearch";
import NewsShow from "../components/NewsShow";
import CreditIndex from "../components/CreditIndex";
import { Box, Center } from "@chakra-ui/layout";

const Credit: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState("クレジットカード");

  const fetchNewsByKeyword = async (keyword: string) => {
    try {
      const response = await axios.get("http://localhost:3001/news", {
        params: { keyword },
      });
      setNews(response.data);
      setCurrentKeyword(keyword);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNewsByKeyword(currentKeyword);
  }, []);

  return (
    <div>

      
      <CreditIndex fetchNewsByKeyword={fetchNewsByKeyword} />

      <Box
        paddingY="0.6rem" // Y軸方向のpaddingをButtonに合わせて調整
        paddingX="1.5rem" // X軸方向のpaddingをButtonに合わせて調整
        m="40px"
        bg="orange.100"
        borderRadius="md"
        fontSize="md" 
        color="orange.400"
        fontWeight={'bold'}
        height="2.5rem" // 必要に応じてButtonと同じ高さを指定
        display="flex" // 追加: flexboxを使用
        alignItems="center" // 追加: 子要素を垂直方向に中央寄せ
        justifyContent="center" // 追加: 子要素を水平方向に中央寄せ
      >
        <NewsSearch  setNews={setNews} defaultKeyword={currentKeyword} />
      </Box>

      <NewsShow news={news} />
    </div>
  );
};

export default Credit;
