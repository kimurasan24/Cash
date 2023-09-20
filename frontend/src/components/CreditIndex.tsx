import React from 'react';
import { Link } from 'react-router-dom';
import JCB from '../assets/JCB.png';
import VISA from '../assets/VISA.png';
import RakutenCard from '../assets/RakutenCard.png';
import Creditlogo from '../assets/Creditlogo.png';
import { Image, Flex, Button, Grid, Box, Text, VStack } from '@chakra-ui/react';

const CreditIndex: React.FC<{ fetchNewsByKeyword: (keyword: string) => void }> = ({ fetchNewsByKeyword }) => {
  const buttonItems = [
    { keyword: "JCB カード", image: JCB },
    { keyword: "VISAカード", image: VISA },
    { keyword: "楽天カード", image: RakutenCard },
    { keyword: "カード キャンペーン", image: Creditlogo }
  ];
  return(
    <>
    <Box
        paddingY="0.6rem" // Y軸方向のpaddingをButtonに合わせて調整
        paddingX="1.5rem" // X軸方向のpaddingをButtonに合わせて調整
        m="40px"
        mb="4px"
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
    <Text fontSize="md" fontWeight="bold">クレカNews検索メニュー</Text>
  </Box>

  <Flex
  as="main"
  justify="center"
  align="center"
  width="100vw"
  height={{base:"320px" , md:"160px"}}
  bg="White"
  m={4}
  p={0}
  
>



 <Grid
   templateColumns={{ base: "repeat(2, 2fr)", md: "repeat(4, 1fr)" }} 
   gap={{ base: 4, md: 8 }}
   px={{ base: 4, md: 0 }} 
   width={{ base: "100%", md: "max-content" }}  // ← max-content で中央寄せ
   margin={{ base: "0", md: "0 auto" }}         // ← 中央寄せにするための変更
 >


   {buttonItems.map((item) => (
     <Button 
       key={item.keyword}
       objectFit="cover" 
       w="full" 
       height="100%"
       bg="white"
       onClick={() => fetchNewsByKeyword(item.keyword)}
       _hover={{ opacity: 0.7 }}
     >
       <VStack spacing={2}>
         <Box 
           display="block"
           bg="orange.100" 
           color="orange.500" 
          fontWeight={500}
          textAlign="center"
           p={1} 
           borderRadius="24px"
           fontSize={{ base: "sm", md: "md" }}

         >
           <Text>{item.keyword}を検索</Text>
         </Box>
         <Image 
          src={item.image} 
          alt={item.keyword} 
          objectFit="cover" 
          w="full" 
          height="100px"
          borderRadius="24px"
         />
       </VStack>
     </Button>
   ))}
  </Grid>
</Flex>
</>
  );
};

export default CreditIndex;
