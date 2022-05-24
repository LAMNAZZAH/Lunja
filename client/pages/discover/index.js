import { getIsLoggedIn } from '../../utils/api/accountApi';
import axios from 'axios';

const discover = ({authInfo}) => {
  console.log("client: " + authInfo);
  return (
    <main>
      <h1>Discover Page</h1>
    </main>
  );
};

export async function  getServerSideProps() {

    const response = await getIsLoggedIn();
    const authInfo =  await response;

  return {
    props: {
      authInfo
    },
  }
}

export default discover;
