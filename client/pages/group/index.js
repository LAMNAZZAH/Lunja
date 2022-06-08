

import styles from '../../styles/groups.module.scss';

const groups = () => {
  return (
    <div>
        <div className={styles.groupsContainer}>
            <div className={styles.leftContainer}>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>

            </div>
            <div className={styles.middleContainer}>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>

            </div>
            <div className={styles.rightContainer}>
                <h1>right</h1>
                <h1>right</h1>
                <h1>right</h1>
                <h1>right</h1>
                <h1>right</h1>

            </div>
        </div>
    </div>
  )
}

groups.requireAuth = true;

export default groups