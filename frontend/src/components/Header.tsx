import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Image } from '@chakra-ui/react';
import Icon from '../assets/Icon.png';

const Header: React.FC = () => {
  return (
    <header>
      <Button as={Link} to="/" colorScheme="White" ml={{ base: "8px", md: "32px" }} mt="32px" mb={{ base: "8px", md: "0px" }} >
      <Image src={Icon} alt="Icon" boxSize={{ base: "60px", md: "120px" }} />
      </Button>

      <Box display="flex" justifyContent="center" padding="1rem">
        <Button 
          as={Link} 
          to="/credit" 
          colorScheme="teal" 
          fontSize={{ base: "auto", md: "md" }}
          color="orange.300"
          bg="orange.100" 
          variant="ghost" 
          mr={{ base: "0", md: "80px" }}
          borderRight={{ base: "1px solid", md: "none" }}
          borderLeft={{ base: "1px solid", md: "none" }}
          whiteSpace="normal"
          maxWidth={{ base: "auto", md: "auto" }}
        >
          クレカ<br></br>News
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
          whiteSpace="normal"
          maxWidth={{ base: "auto", md: "auto" }}
        >
          QR<br></br>News
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
          whiteSpace="normal"
          maxWidth={{ base: "auto", md: "auto" }}
        >
          ポイ活<br></br>News
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
          whiteSpace="normal"
          maxWidth={{ base: "auto", md: "auto" }}
        >
          マイル<br></br>News
        </Button>
      </Box>
    </header>
  );
};

export default Header;
