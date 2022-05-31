import { useEffect, useRef, useState } from "react";
import {
  Badge,
  ActionIcon,
  Select,
  Modal,
  Button,
  Autocomplete,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { X, Edit } from "tabler-icons-react";

import styles from "./styles/About.module.scss";

const About = (props) => {
  const User = props.User;
  const [userInterests, setUserInterests] = useState([]);
  const [opened, setOpened] = useState(false);
  const [searchInterest, setSearchInterest] = useState([]);
  const inputRef = useRef();

  const fetchInterests = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:5000/api/interest/search?query=${e.target.value}`
    );
    const data = await response.data;
    console.log("ref: " + inputRef.current);
    if (data?.ok) {
      setSearchInterest(data.searchInterest);
    }
  };

  const addInterest = async (interest) => {
    const body = {
      interestId: interest.value,
      userId: User.user_id,
    };
    const response = await axios.post(
      "http://localhost:5000/api/interest",
      body
    );
    const data = await response.data;
    console.log("added data: " + data);
  };

  useEffect(() => {
    const fetchUserInterests = async (id) => {
      const response = await axios.get(
        `http://localhost:5000/api/interest?userId=${id}`
      );
      const data = await response.data.interests;
      console.log("interests: " + data);
      setUserInterests(data);
    };
    fetchUserInterests(User.user_id);
  }, [opened]);

  const deleteInterest = async (interestId, index) => {
    const response = await axios.delete(
      `http://localhost:5000/api/interest?userId=${User.user_id}&interestId=${interestId}`
    );
    const data = await response.data;
    if (data?.ok)
      return setUserInterests(
        userInterests.filter((interest) => interest !== userInterests[index])
      );
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.titleBlock}>
        <h2>About</h2>
      </div>
      <div className={styles.bodyBlock}>
        <div className={styles.about}>{User?.about}</div>
        <div className={styles.interestsBlock}>
          <div className={styles.title}>
            <h3>Interests</h3>
            {props.editable ? (
              <ActionIcon onClick={() => setOpened(true)}>
                <Edit />
              </ActionIcon>
            ) : null}

            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Add Interest"
              padding="xl"
              size="xl"
            >
              {userInterests.length < 4 ? (
                <>
                  {" "}
                  <input
                    className={styles.searchInput}
                    type="text"
                    ref={inputRef}
                    onChange={(e) => fetchInterests(e)}
                  />
                  <div className={styles.searchIntertBadges}>
                    {searchInterest.map((interest) => {
                      return (
                        <div key={interest.value} className={styles.badge}>
                          <button
                            type="button"
                            value={interest}
                            onClick={() => addInterest(interest)}
                          >
                            {interest?.label}
                          </button>
                        </div>
                      );
                    })}
                  </div>{" "}
                </>
              ) : (
                <h2>
                  You've reached the limit of interests <br /> you can add to
                  your profile
                </h2>
              )}
            </Modal>
          </div>
          <div className={styles.interests}>
            {userInterests?.map((interest, index) => {
              return (
                <div key={interest?.interest_id} className={styles.interest}>
                  <Badge color="grape" variant="outline">
                    {interest?.name}
                  </Badge>
                  {
                    props.editable ? <ActionIcon
                    onClick={() => deleteInterest(interest?.id, index)}
                    color="red"
                    size="sm"
                  >
                    <X />
                  </ActionIcon> : null
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
