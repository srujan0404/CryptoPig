import {
  Center,
  Text,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Button,
  FormErrorMessage,
  Icon,
  Container,
  Box,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Card from "../../../components/Card";
import { object, string, ref } from "yup"; 

const ResetValidationSchema = object({
  password: string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat password is required"),
});


const ResetPassword = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Box textAlign="center">
            <Text fontWeight="medium" textStyle="h1">
              Reset Password
            </Text>
            <Text textStyle="p2" color="black.60" mt="4">
              Set your new Password
            </Text>
          </Box>
          <Formik
            initialValues={{
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={ResetValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">New Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your Password"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="repeatpassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="repeatpassword">
                          Repeat New Password
                        </FormLabel>
                        <Input
                          {...field}
                          name="repeatpassword"
                          type="password"
                          placeholder="Renter your password"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button w="full" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPassword;
