import React from 'react';
import HOME from '../assets/HOME.png';
import { Image, Heading, Flex } from '@chakra-ui/react';  

const Title: React.FC = () => {
  return (
    <Flex
      as="main"
      justify="center"
      align="center"
      minHeight="15vh"
      width="100vw"
      bg="orange.100"
      margin={0}      // 余白を0に設定
      padding={8} 
      borderRadius="8px"
    >
      <Flex justifyContent="center" alignItems="center">
        <Image src={HOME} alt="CashLessTimes Logo" mr="5%" w="30%" h="10%" />
        <Heading 
          as="h1" 
          fontSize={{ base:"sm", md:"lg"}} 
          color="orange.400" 
          fontWeight="bold" 
          textAlign="center"
        >
          お得なキャッシュレス関連ニュースを<br />ささっと確認
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Title;