import { ActionIcon, Select, TextInput, Modal, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Edit, Id } from "tabler-icons-react";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles/University.module.scss";

const University = (props) => {
  const [opened, setOpened] = useState(false);
  const [specialities, setSpecialities] = useState([]);

  const form = useForm({
    initialValues: {
      university: "",
      year: "",
    },
  });

  const fetchSpecialities = async () => {
    const id = form.values.university || 8;
    const response = await axios.get(
      `http://localhost:5000/api/speciality?university=${id}`,
      {
        Headers: { "Content-Type": "application/json" },
      }
    );

    if (response?.data.ok) {
      const data = await response.data.specialities;
      setSpecialities(data);
      console.log("edit:" + props.editable);
      console.log(specialities);
    }
  };

  useEffect(() => {
    fetchSpecialities();
  }, [form.values.university]);

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
            searchable
            maxDropdownHeight={400}
            nothingFound="found nothing"
          />

          <Select
            label="My university"
            placeholder="Select Your university"
            {...form.getInputProps("speciality")}
            data={specialities}
            maxDropdownHeight={400}
            nothingFound="found nothing"
          />

          <TextInput
            label="Academic Year"
            placeholder="Select A Year"
            {...form.getInputProps("year")}
          />

          <Button mt="md" type="submit">
            Edit
          </Button>
        </form>
      </Modal>

      <div className={styles.titleBlock}>
        <h2>University</h2>
        {props.editable ? <ActionIcon onClick={() => setOpened(true)}>
          <Edit />
        </ActionIcon> : null}
      </div>
      <div className={styles.university}></div>
    </section>
  );
};

export default University;
