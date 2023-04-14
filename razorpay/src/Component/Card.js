import React from 'react'
import { Button, Image, Text, VStack } from '@chakra-ui/react'
const Card = ({ amount, img, Orderhendler }) => {
  return (
    <VStack>
      <Image src={img} boxSize={"64"} objectFit="cover" />
      <Text>₹{amount}</Text>
      <Button onClick={() => Orderhendler(amount)}>Order Now</Button>
    </VStack>
  );
};

export default Card