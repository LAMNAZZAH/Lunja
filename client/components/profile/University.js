import { ActionIcon, Select, TextInput, Modal, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Edit } from "tabler-icons-react";
import { useEffect, useState } from "react";
import { getUniversities } from "../../utils/api/universityApi";

import styles from "./styles/University.module.scss";

const University = ({univs}) => {
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      university: '', year: ''
    }
  });



  return (
    <section className={styles.universitySection}>
    
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
      

          <TextInput
            label="Academic Year"
            placeholder="Select A Year"
            {...form.getInputProps("year")}
          />

          <Button type="submit">Edit</Button>
        </form>


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

export async function getServerSideProps(context) {
  const response = await getUniversities(); 
  const univs = await response.universities 
  console.log(univs);
  return {
    props: {univs}, 
  }
}


export default University;
