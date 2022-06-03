import { ActionIcon, Modal, Textarea, Button } from "@mantine/core";
import { useState } from "react";
import { useRouter } from 'next/router';
import { Edit } from "tabler-icons-react";
import { useForm } from "@mantine/form";
import axios from 'axios';

import styles from "./styles/About.module.scss";

const About = (props) => {
  const [opened, setOpened] = useState(false);
  const [userabout, setUserabout] = useState(props.User.about)
  const User = props.User;
  const router = useRouter();

  const form = useForm({
    initialValues: {
      about: "",
    },
  });

  const refreshData = () => {
    router.replace(router.asPath);
  }

  const EditAbout = async (values) => {
      const body = {
          userId: User.user_id,
          about: values.about
      }
      const response = await axios.post("http://localhost:5000/api/account/user/about", body);
      const about = await response.data; 
      if (!about.ok) return console.log('Oops, there a problem happened while updating your about info!');
      setUserabout(values.about);
      refreshData();
      return setOpened(false);
  }

  return (
    <section className={styles.aboutSection}>
      <div className={styles.titleBlock}>
        <h2>About</h2>
        {props.editable ? (
          <ActionIcon onClick={() => setOpened(true)}>
            <Edit color="lightgray" />
          </ActionIcon>
        ) : null}
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Edit About"
          padding="xl"
          size="calc(90vw)"
        >
          <div className={styles.EditAbout}>
          <form onSubmit={form.onSubmit((values) => EditAbout(values))}>
            <Textarea
              placeholder="tell us about yourself"
              label="About"
              radius="md"
              size="md"
              value={userabout}
              minRows={5}
              {...form.getInputProps("about")}
            />
            <Button mt="md" type="submit">Edit</Button>
            </form>
          </div>
        </Modal>
      </div>
      <div className={styles.bodyBlock}>
        <div className={styles.about}>{User?.about}</div>
      </div>
    </section>
  );
};

export default About;
