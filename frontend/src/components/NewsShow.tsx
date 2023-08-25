import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Button,
} from "@chakra-ui/react";

interface News {
  id: string;
  title: string;
  link: string;
  image_url: string;
  published_at: string;
}

interface Props {
  news: News[];
}

const NewsShow: React.FC<Props> = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;
  const maxPage = Math.ceil(news.length / ITEMS_PER_PAGE);

  const displayedNews = news.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    // 何らかの条件や操作がここで発生した場合、ページ番号を1にリセット
    setCurrentPage(1);
  }, [news.length]);

  return (
    <div>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={8}
        px={{ base: 4, md: 0 }}
        width={{ base: "100%", md: "80%" }}
        margin={{ base: "0", md: "4px auto" }}
      >
        {displayedNews.map((item, index) => (
          <LinkBox
            key={index}
            as="article"
            borderWidth="1px"
            bg={"orange.100"}
            rounded="lg"
            overflow="hidden"
            _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            <Box display="flex" flexDirection="column">
              <Image
                src={item.image_url}
                alt={item.title}
                objectFit="cover"
                w="full"
                height="100px"
              />
              <Box p={4}>
                <LinkOverlay href={item.link} isExternal>
                  <Text fontSize="1px">
                    {item.published_at.substring(0, 10)}
                  </Text>
                  <Text
                  
                    fontSize="4px"
                    fontWeight="bold"
                    isTruncated
                    noOfLines={2}
                  >
                    {item.title}
                  </Text>
                  <Text fontSize="0.5px">クリックして本文へ</Text>
                </LinkOverlay>
              </Box>
            </Box>
          </LinkBox>
        ))}
      </Grid>
      <Box m={12} display="flex" justifyContent="center">
        <Button mr={12}
          bg={"orange.50"}
          color={"orange.400"}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          _disabled={{ bgColor: "white", cursor: "not-allowed" }}
        >
          前へ
        </Button>
        <Text mx={2} mr={12} color="orange.400" fontWeight={"bold"} >
          {currentPage} / {maxPage}
        </Text>
        <Button
          bg={"orange.50"}
          color={"orange.400"}

          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, maxPage))}
          disabled={currentPage === maxPage}
          _disabled={{ bgColor: "White", cursor: "not-allowed" }}
        >
          次へ
        </Button>
      </Box>
    </div>
  );
};

export default NewsShow;
