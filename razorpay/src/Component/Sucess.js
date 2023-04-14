import { Box, VStack, Heading,Text } from "@chakra-ui/react";
import React from 'react'
import { useSearchParams } from "react-router-dom";

export const Sucess = () => {
    const serchQuery = useSearchParams()[0];

   const referenceNO =serchQuery.get("reference");
   
  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading textTransform={"uppercase"}> Paymnet Successfully </Heading>
        <Text>
          your reference id =<b>{referenceNO}</b>
        </Text>
      </VStack>
    </Box>
  );
}
