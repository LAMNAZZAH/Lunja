import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import {
  Badge,
  ActionIcon,
  Modal,

} from "@mantine/core";
import axios from "axios";
import { X, Edit } from "tabler-icons-react";

import styles from "./styles/Interests.module.scss";

const Interests = (props) => {
  const User = props.User;
  const router = useRouter();
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
  }, [opened, User]);

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
        <section className={styles.interestsSection}>
          <div className={styles.title}>
            <h2>Interests</h2>
            {props.editable ? (
              <ActionIcon onClick={() => setOpened(true)}>
                <Edit color="lightgray"/>
              </ActionIcon>
            ) : null}

            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Add Interest"
              padding="xl"
              size="calc(90vw)"
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
                    {searchInterest.map((interest, index) => {
                      return (
                        <div key={index} className={styles.badge}>
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
                <div key={index} className={styles.interest}>
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
    </section>
  );
};

export default Interests;
