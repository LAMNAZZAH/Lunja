import { Loader } from "@mantine/core";

import styles from "./Loader.module.scss";

const LoaderIcon = () => {
  return (
    <div className={styles.loaderContainer}>
      <Loader color="cyan" size="lg" />
    </div>
  );
};

export default LoaderIcon;
