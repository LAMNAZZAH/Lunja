import { ActionIcon, Select, TextInput, Modal, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Edit } from "tabler-icons-react";
import { useState } from "react";


import styles from "./styles/University.module.scss";

const University = (props) => {
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      university: '', year: ''
    }
  });



  return (
    <section className={styles.universitySection}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Edit University"
        padding="xl"
        size="xl"
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Select
            label="My university"
            placeholder="Select Your university"
            {...form.getInputProps("university")}
            data={props.univs}
          />

          <TextInput
            label="Academic Year"
            placeholder="Select A Year"
            {...form.getInputProps("year")}
          />

          <Button mt="md" type="submit">Edit</Button>
        </form>
      </Modal>

      <div className={styles.titleBlock}>
        <h2>University</h2>
        <ActionIcon onClick={() => setOpened(true)}>
          <Edit />
        </ActionIcon>
      </div>
      <div className={styles.university}></div>
    </section>
  );
};




export default University;
