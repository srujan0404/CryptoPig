import React from 'react';
import Card from '../../../components/Card';
import { VStack, Icon, Text, Button , Box, Center, Container } from "@chakra-ui/react";
import { BsPatchCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
  
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
                Registration Successful
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                hurray!! You have successfully registered with CryptoPig. Enter
                the app to explore all features.
              </Text>
              <Box w="full">
                <Link to="/signin">
                  <Button w="full">Enter The App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        </Center>
      </Container>
    );
};

export default RegisterSuccess;