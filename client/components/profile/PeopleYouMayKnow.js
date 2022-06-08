import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles/PeopleYouMayKnow.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import UserProfileFetch from './UserProfileFetch';

const PeopleYouMayKnow = (props) => {
  const router = useRouter()
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    const universityId = null;
    const fetchUniversity = async () => {
      const userId = props.User;
      const response = await axios.get(
        `http://localhost:5000/api/univuser?userId=${userId}`
      );
      universityId = await response.data?.univuser?.university_id;

      if (!response.data?.univuser) return;

      const res = await axios.get(
        `http://localhost:5000/api/univuser/university?query=${universityId}`
      );
      const data = await res.data?.users;
      console.log("users you may know: " + data);
      setUsers(data);
    };

    fetchUniversity();
  }, []);

  return (
    <section className={styles.peopleYouMayKnowSection}>
      <div className={styles.titleBlock}>
        <h2>People You May Know</h2>
        <div className={styles.bodyBlock}>
          {users?.map((user, index) => {
            return (
              <div key={index} className={styles.user}>
                <div className={styles.profileAndInfo}>
                <div className={styles.profile}>
                  <UserProfileFetch  profileUrl={user?.profile_url} />                  
                </div>
                <div className={styles.info}>
                 
                    <h3>{user?.fname}</h3>
                    <h3>{user?.lname}</h3>
          
                </div>
                </div>
                  <button onClick={() => router.push(`http://localhost:3000/profile/${user?.username}`)} className={styles.see}>See</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PeopleYouMayKnow;
