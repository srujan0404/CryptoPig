import React from 'react';
import Card from '../../../components/Card';
import { VStack, Icon, Text, Button , Box, Center, Container } from "@chakra-ui/react";
import { BsPatchCheckFill } from 'react-icons/bs';

const ForgotPasswordSent = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle="h4" fontWeight="medium" color="black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have Sent instruction to{" "}
              <Box as="b" color="p.black">
                dharmassr@gmail.com
              </Box>
              PLease follow those steps to reset your password.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;