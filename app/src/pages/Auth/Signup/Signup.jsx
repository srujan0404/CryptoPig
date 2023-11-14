import { Card, Container, Center, Text , Stack, FormControl, Input, FormLabel, Flex, Checkbox, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text textStyle="h1">Welcome To CrytoPig</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Signup for CryptoPig by filling the details
          </Text>
          <Stack mt="10" spacing={6}>
            <Flex gap="4">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input name="name" type="text" placeholder="Enter your name" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="surname">Surname</FormLabel>
                <Input
                  name="surname"
                  type="text"
                  placeholder="Enter your Surname"
                />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input name="email" type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="repeatpassword">repeat Password</FormLabel>
              <Input
                name="repeatpassword"
                type="password"
                placeholder="Renter your password"
              />
            </FormControl>
            <Checkbox>
              <Text textStyle="p3">
                I agree with{" "}
                <Text as="span" color="p.purple">
                  Terms and conditions
                </Text>
              </Text>
            </Checkbox>
            <Button>
                Create Account
            </Button>
            <Text textStyle="p3" color="black.60" textAlign="center">
                Already have an account? <Link to="/signin" color="p.purple">
                    <Text as="span" color="p.purple">Login</Text>
                </Link>
            </Text>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}

export default Signup