import Link from 'next/link';
import { Button } from '@mantine/core';

import styles from '../styles/404.module.scss';

const notFoundPage = () => {
  return (
      <div className={styles.notFoundPage}>
        <div classname={styles.error}>
            <h1>404</h1>
            <h4>Oops, there is nothing here</h4>
            <Link href='/'>
                <Button size='lg' variant='outline'>Go Back Home</Button>
            </Link>
        </div>
        </div>
  )
}

export default notFoundPage;