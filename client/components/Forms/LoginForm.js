import { useForm } from "@mantine/form";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import {UserCircle} from 'tabler-icons-react';

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
        <Group className={styles.loginTitle} position='left' mt='xl'>
            <UserCircle size={44} color='lightgray'/>
            <h1 className={styles.titleText}>Login</h1>
            </Group>
      <Box className={styles.box} sx={{ maxWidth: 300 }} mx="auto">
        <form>
          <TextInput
          mt='md'
            label="username/email"
            placeholder="Username/Email"
            required
          />
          <PasswordInput
          mt='xl'
            placeholder="Password"
            label="Password"
            description="Password must be a minimum of 8 characters"
            required
          />
          <Group position='right' mt='xl'>
              <Button variant="gradient"  gradient={{ from: 'violet', to: 'cyan' }} type="submit">Login</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
