import { ActionIcon, Modal, ScrollArea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { Plus, X } from "tabler-icons-react";
import axios from "axios";

import styles from "./styles/CreateGroup.module.scss";

const CreateGroup = () => {
  const [opened, setOpened] = useState();
  const [searchedUnivs, setSearchedUnivs] = useState();
  const [university, setUniversity] = useState();
  const [loading, setLoading] = useState(false);
  const [secret, setSecret] = useState();

  const form = useForm({
    initialValues: {
      name: "",
      universityId: "",
    },
  });

  const fetchUniversities = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/university/search?query=${e.target.value}`
      );
      const data = response.data;
      console.log(data.searchUniversities);
      if (data?.ok) return setSearchedUnivs(data.searchUniversities);
    };
    setTimeout(fetch, 3000);
    setLoading(false);
  };

  return (
    <div className={styles.createGroupContainer}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create a group"
        size="80%"
      >
        <form>
          <label name="university">Group Name</label>
          <input className={styles.groupName} type="text" />
          <label name="university">University</label>
          <div className={styles.univInputBlock}>
            <input
              id="inputUniv"
              className={styles.inputUniv}
              type="text"
              value={university?.label}
              onChange={(e) => fetchUniversities(e)}
            />
            {university && (
              <ActionIcon
                className={styles.deleteSelection}
                onClick={() => setUniversity({ value: null, label: null })}
              >
                <X strokeWidth={4} color={"red"} />
              </ActionIcon>
            )}
          </div>
          <div className={styles.dropdownContainer}>
              <ScrollArea style={{ height: 90 }}>
                {searchedUnivs?.map((univ, index) => {
                  return (
                    <button
                      className={styles.univButton}
                      key={index}
                      value={univ}
                      type="button"
                      onClick={() => setUniversity(univ)}
                    >
                      {univ.label}
                    </button>
                  );
                })}
              </ScrollArea>
          </div>
          <div className={styles.secretArea}>
            <label>Secret</label>
            <h3 className={styles.secret}>{secret}</h3>
            <h4 className={styles.note}>
              if your group has been created successfully, your secret will be
              displayed here
            </h4>
            <h4 className={styles.note}>
              please share it with the people you want them to join your group
              only!
            </h4>
          </div>
          <button className={styles.submitFormButton} type="submit">
            Create
          </button>
        </form>
      </Modal>
      <div className={styles.CreateGroup}>
        <h2>Create Group </h2>
        <ActionIcon onClick={() => setOpened(true)}>
          <Plus strokeWidth={3} color={"gray"} size={60} />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CreateGroup;
