import { ActionIcon, Modal, Textarea } from "@mantine/core";
import { useState } from "react";
import { Edit } from "tabler-icons-react";

import styles from "./styles/About.module.scss";

const About = (props) => {
  const [opened, setOpened] = useState(false);
  const [userAbout, setuserAbout] = useState(props.User?.about);
  const User = props.User;

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
            <Textarea
              placeholder="tell us about yourself"
              label="About"
              radius="md"
              size="md"
              value={userAbout}
              minRows={5}
            />
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
