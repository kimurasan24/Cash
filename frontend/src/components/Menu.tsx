import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Image, Heading, VStack, Text, Grid } from '@chakra-ui/react';
import Credit from '../assets/Credit.png';
import QRcode from '../assets/QRcode.png';
import Point from '../assets/Point.png';
import Mile from '../assets/Mile.png';

const Header: React.FC = () => {
  return (
   
    <Box display={{ base: "none", md: "block" }}>
    <Box 
    display="flex" 
    alignItems="center" 
    paddingY="0.6rem" // Y軸方向のpaddingをButtonに合わせて調整
    paddingX="1.5rem" // X軸方向のpaddingをButtonに合わせて調整
    m="40px" 
    bg="orange.100"
    fontSize="md" 
    color="orange.400"
    fontWeight={'bold'}
    borderRadius="md" 
    width="10rem"
    height="2.5rem" // 必要に応じてButtonと同じ高さを指定
>
    <Heading as="h2" size="sm">トップメニュー</Heading>
</Box>
    
      <Grid
      templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} 
      gap={4} 
      px={{ base: 4, md: 0 }} 
      borderRadius="md" 
      width={{ base: "100%", md: "80%" }}
      margin={{ base: "0", md: "0 auto" }}
    >
       
       <Button 
      as={Link} 
      to="/credit" 
      variant="ghost" 
      bg="orange.50" 
      paddingY={["0", "120px"]} 
      mr={["0", "20px"]} 
      mb={["20px", "0"]}
      _hover={{ opacity: 0.7 }}
    >
      <VStack spacing={4}>
          <Box bg="orange.50" p={2} borderRadius="md" fontSize="md" 
          color="orange.400" >
            <Text>クレジットNews</Text>
          </Box>
          {/* md 以上のブレークポイントでのみ表示され、それ以外では非表示になります */}
          <Image src={Credit} alt="JCB Logo" w="240px" h="140px" display={{ base: "none", md: "block" }}/>
      </VStack>
    </Button>

    <Button 
      as={Link} 
      to="/qrcode" 
      variant="ghost" 
      bg="orange.50" 
      paddingY={["0", "120px"]} 
      mr={["0", "20px"]} 
      mb={["20px", "0"]}
      _hover={{ opacity: 0.7 }}
    >
      <VStack spacing={4}>
          <Box bg="orange.50" p={2} borderRadius="md" fontSize="md" 
          color="orange.400" >
            <Text>QR決済News</Text>
          </Box>
          {/* md 以上のブレークポイントでのみ表示され、それ以外では非表示になります */}
          <Image src={QRcode} alt="JCB Logo" w="240px" h="140px" display={{ base: "none", md: "block" }}/>
      </VStack>
    </Button>

        <Button 
      as={Link} 
      to="/point" 
      variant="ghost" 
      bg="orange.50" 
      paddingY={["0", "120px"]} 
      mr={["0", "20px"]} 
      mb={["20px", "0"]}
      _hover={{ opacity: 0.7 }}
    >
      <VStack spacing={4}>
          <Box bg="orange.50" p={2} borderRadius="md" fontSize="md" 
          color="orange.400">
            <Text>ポイ活News</Text>
          </Box>
          {/* md 以上のブレークポイントでのみ表示され、それ以外では非表示になります */}
          <Image src={Point} alt="JCB Logo" w="240px" h="140px" display={{ base: "none", md: "block" }}/>
      </VStack>
    </Button>

    <Button 
      as={Link} 
      to="/mile" 
      variant="ghost" 
      bg="orange.50" 
      paddingY={["0", "120px"]} 
      mr={["0", "20px"]} 
      mb={["20px", "0"]}
      _hover={{ opacity: 0.7 }}
    >
      <VStack spacing={4}>
          <Box bg="orange.50" p={2} borderRadius="md" fontSize="md" 
          color="orange.400" >
            <Text>マイルNews</Text>
          </Box>
          <Image src={Mile} alt="JCB Logo" w="240px" h="140px" display={{ base: "none", md: "block" }}/>
      </VStack>
    </Button>
      </Grid>
      </Box>
      
  );
};

export default Header;
