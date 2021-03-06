import { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, PasswordInput,Select} from "@mantine/core";
import { UserCircle } from "tabler-icons-react";

import styles from "./RegisterForm.module.scss";

const RegisterForm = ({submitCallback}) => {
  const form = useForm({
    initialValues: { first_name: "", last_name: "", email:"" , account_type: "", level: "", username:"", password:"", confirmPassword: ""},
    validate: {
      first_name: (value) => (value.length < 2 ? 'The first name is too short' : null),
      last_name: (value) => (value.length < 2 ? 'The last name is too short' : null),
      username: (value) => (value.length < 2 ? 'The username is too short' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      account_type: (value) => (value == '' ? 'Please let us know your Account Type' : null), 
      level: (value) => (value == '' ? 'Please let us know your Degree Level' : null),
      password: (value) => (value.length < 8 ? 'The password must be at lease 8 characters' : null),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null)
    }
  });

  //const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = () => {

    const fields = {
      1: ['first_name', 'last_name' ],
      2: ['email', 'account_type', 'level' ],
      3: ['username', 'password', 'confirmPassword' ]
    }
    
    const error = false;
    fields[page].forEach(field => {
      if (form.validateField(field).hasError == true) {error = true}
    });
    if (error) return;
    else setPage(page + 1)
  };

  const previousPage = () => {
    if (page > 1) {
      return setPage(page - 1);
      }
  };

  const handleSubmitForm = (values) => {
    console.log(values);

    if (typeof submitCallback === 'function') {
      submitCallback({
        first_name: form.values.first_name, 
        last_name: form.values.last_name,
        email: form.values.email,
        account_type: form.values.account_type,
        level: form.values.level,
        username: form.values.username,
        password: form.values.password
      })
    }
  };

  return (

    <div className={styles.registerFormContainer}>
      <div className={styles.registerTitle} >
        <h1 className={styles.titleText}>Register</h1>
      </div>

      <Box className={styles.box} sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmitForm)}>

          <TextInput
            className={page == 1 ? styles.textInput : styles.invisibleInput}
            mt="md"
            label="First Name"
            placeholder="Enter your First Name"
            {...form.getInputProps("first_name")}
            
          />

          <TextInput
            className={page == 1 ? styles.textInput : styles.invisibleInput}
            mt="xl"
            label="Last Name"
            placeholder="Enter your Last Name"
            {...form.getInputProps("last_name")}
            
          />

          <TextInput
            className={page == 2 ? styles.textInput : styles.invisibleInput}
            mt="xl"
            label="Email"
            placeholder="Enter your Email"
            {...form.getInputProps("email")}
            
          />

<Select

className={page == 2 ? styles.textInput : styles.invisibleInput}
mt="xl"
      label="Choose the Rigth Account Type For You"
      placeholder="Account Type"
      {...form.getInputProps('account_type')}
      data={[
        { value: 'student', label: 'Student' },
        { value: 'teacher', label: 'Teacher' },
      ]}
      required
    />

<Select

className={page == 2 ? styles.textInput : styles.invisibleInput}
mt="xl"
      label="Select Your Degree Level"
      placeholder="Degree Level"
      {...form.getInputProps('level')}
      data={[
        { value: 'bac', label: 'Bac' },
        { value: 'bac+1', label: 'Bac+1' },
        { value: 'bac+2', label: 'Bac+2' },
        { value: 'bac+2', label: 'Bac+3' },
        { value: 'bac+2', label: 'Bac+4' },
        { value: 'bac+2', label: 'Bac+5' },
      ]}
      
    />

<TextInput
            className={page == 3 ? styles.textInput : styles.invisibleInput}
            mt="md"
            label="UserName"
            placeholder="Enter your UserName"
            {...form.getInputProps("username")}
            
          />


    <PasswordInput  className={page == 3 ? styles.textInput : styles.invisibleInput}
            mt="xl"
            label="Password"
            placeholder="Enter You Password"
            {...form.getInputProps("password")}
            ></PasswordInput>

<PasswordInput  className={page == 3 ? styles.textInput : styles.invisibleInput}
            mt="xl"
            label="Confirm Password"
            placeholder="Re-enter Your Password"
            {...form.getInputProps("confirmPassword")}
            ></PasswordInput>

          <Group position="right" mt="xl">

            <Button onClick={() => previousPage()} variant="subtle" color="violet" radius="xl" type="button"
            disabled={page == 1}
            >
              Back
            </Button>

          
            <Button
            className={page == 3 ? styles.invisibleInput : styles.buttonInput}
               variant="light" color="violet" radius="xl" size="lg"
              type="button"
              onClick={() => nextPage()}
            >
              Next
            </Button>

            <Button
            className={page == 3 ? styles.textInput : styles.invisibleInput}
            variant="gradient" gradient={{ from: 'violet', to: 'cyan' }}
              type="submit"
      
            >
              Submit
            </Button>


          </Group>


        </form>
      </Box>
    </div>
  );
};

export default RegisterForm;
