import { ActionIcon, Select, TextInput, Modal, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Plus, User, X } from "tabler-icons-react";
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

  const degrees = [
    "Bachelor",
    "DEUG",
    "DEUST",
    "DUT",
    "BTS",
    "DTS",
    "LF",
    "LP",
  ];

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

  const addUnivuser = async (values) => {
    const body = {
      userId: props.User.user_id,
      universityId: values.university,
      degree: values.degree,
      specialityId: values.speciality,
      year: values.year,
    };
    const response = await axios.post(
      "http://localhost:5000/api/univuser",
      body
    );
    const data = await response.data;
    console.log(data);
  };

  const deleteUnivuser = async () => {
    const keys = {
      userId: props.User.user_id,
      universityId: props.Univuser.university_id,
      specialityId: props.Univuser.speciality_id,
    };

    const response = await axios.delete(
      `http://localhost:5000/api/univuser?userId=${keys.userId}&universityId=${keys.universityId}&specialityId=${keys.specialityId}`);

    const data = await response.data;
    console.log(data);
  };

  return (
    <section className={styles.universitySection}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Edit University"
        padding="xl"
        size="xl"
      >
        <form onSubmit={form.onSubmit((values) => addUnivuser(values))}>
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
            label="degree"
            placeholder="Select the degree you are preparing"
            {...form.getInputProps("degree")}
            data={degrees}
            maxDropdownHeight={100}
            nothingFound="found nothing"
          />

          <Select
            label="Speciality"
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
        {props.editable ? (
          <ActionIcon onClick={() => setOpened(true)}>
            <Plus />
          </ActionIcon>
        ) : null}
        {props.Univuser && (
          <ActionIcon onClick={() => deleteUnivuser()}>
            <X color="red" />
          </ActionIcon>
        )}
      </div>
      <div className={styles.university}>
        <h3>{props.Univuser?.university}</h3>
        <h4>{props.Univuser?.speciality}</h4>
      </div>
    </section>
  );
};

export default University;
