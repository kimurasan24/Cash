import React from 'react';
import { Box, Heading, } from '@chakra-ui/react';


const TopNews: React.FC = () => {
  return (
   
    
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
    <Heading as="h2" size="sm">キャッシュレス速報！</Heading>
</Box>
  )}

  export default TopNews;