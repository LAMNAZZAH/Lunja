import { useState } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import { UserCircle } from "tabler-icons-react";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const form = useForm({
    initialValues: { usernameOrEmail: '', password: '' },
  });
  const [errors, setErrors] = useState([]);

  const handleSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.loginFormContainer}>
      <Group className={styles.loginTitle} position="left" mt="xl">
        <UserCircle size={44} color="lightgray" />
        <h1 className={styles.titleText}>Login</h1>
      </Group>
      <Box className={styles.box} sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmitForm)}>
          <TextInput
            mt="md"
            label="username/email"
            placeholder="Username/Email"
            {...form.getInputProps("usernameOrEmail")}
            required
          />
          <PasswordInput
            mt="xl"
            placeholder="Password"
            label="Password"
            {...form.getInputProps("password")}
            required
          />
          <Group position="right" mt="xl">
            <Button
              variant="gradient"
              gradient={{ from: "violet", to: "cyan" }}
              type="submit"
            >
              Login
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
