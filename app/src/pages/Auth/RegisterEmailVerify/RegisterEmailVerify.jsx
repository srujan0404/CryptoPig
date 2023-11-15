import React from 'react';
import Card from '../../../components/Card';
import { VStack, Icon, Text, Button , Box } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  
    return (
      <Card>
        <VStack spacing={6}>
          <Icon as={MdEmail} boxSize="48px" color="p.purple" />
          <Text textStyle="h4" color="black">
            Email Verification
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            We have sent you an email verification to <Box as="b" color="p.black">dharmassr@gmail.com</Box>
            . If you didn't recieve it,click the button below
          </Text>
          <Button w="full" variant="outline">
            Resend Email
          </Button>
        </VStack>
      </Card>
    );
};

export default RegisterEmailVerify