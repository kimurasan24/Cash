import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Image } from '@chakra-ui/react';
import Icon from '../assets/Icon.png';

const Header: React.FC = () => {
  return (
    <header>
      <Button as={Link} to="/" colorScheme="White" ml={{ base: "8px", md: "32px" }} mt="32px" mb={{ base: "8px", md: "0px" }} >
      <Image src={Icon} alt="JCB Logo" boxSize={"160px"} />
      </Button>

      <Box display="flex" justifyContent="center" padding="1rem">
        <Button 
          as={Link} 
          to="/credit" 
          colorScheme="teal" 
          fontSize="md" 
          color="orange.300"
          bg="orange.100" 
          variant="ghost" 
          mr={{ base: "0", md: "80px" }}
          borderRight={{ base: "1px solid", md: "none" }}
          borderLeft={{ base: "1px solid", md: "none" }}
        >
          クレジットNews
        </Button>
        <Button 
          as={Link} 
          to="/qrcode" 
          colorScheme="teal" 
          fontSize="md" 
          color="orange.300"
          bg="orange.100" 
          variant="ghost" 
          mr={{ base: "0", md: "80px" }}
          borderRight={{ base: "1px solid", md: "none" }}
          
        >
          QR決済News
        </Button>
        <Button 
          as={Link} 
          to="/point" 
          colorScheme="teal" 
          fontSize="md" 
          color="orange.300"
          bg="orange.100" 
          variant="ghost" 
          mr={{ base: "0", md: "80px" }}
          borderRight={{ base: "1px solid", md: "none" }}
        >
          ポイ活News
        </Button>
        <Button 
          as={Link} 
          to="/mile" 
          colorScheme="teal" 
          fontSize="md" 
          color="orange.300"
          bg="orange.100" 
          variant="ghost"
          mr={{ base: "0", md: "80px" }}
          borderRight={{ base: "1px solid", md: "none" }}
        >
          マイルNews
        </Button>
      </Box>
    </header>
  );
};

export default Header;
