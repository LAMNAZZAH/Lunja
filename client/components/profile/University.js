import { ActionIcon, Drawer, TextInput, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Edit } from 'tabler-icons-react';
import { useState } from 'react';

import styles from "./styles/University.module.scss";

const University = (props) => {
  const [opened, setOpened] = useState(false); 

  const form = useForm({
    initialValues: {
      
    },});

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
          <TextInput 
          label="University"
          />
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
