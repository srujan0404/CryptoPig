import React from 'react';
import Card from '../../../components/Card';
import { VStack, Icon, Text, Button , Box, Center, Container } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  
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
              <Icon as={MdEmail} boxSize="48px" color="p.purple" />
              <Text textStyle="h4" fontWeight="medium" color="black">
                Email Verification
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                We have sent you an email verification toc . If you didn't
                recieve it,click the button below
              </Text>
              <Button w="full" variant="outline">
                Resend Email
              </Button>
            </VStack>
          </Card>
        </Center>
      </Container>
    );
};

export default RegisterEmailVerify