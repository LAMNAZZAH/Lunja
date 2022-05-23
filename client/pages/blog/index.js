import { testGetTodos } from '../../utils/api/accountApi';
import axios from 'axios';
import { AuthProvider } from '../../contexts/auth'

const blog = () => {
  //onsole.log(todos);
  return (
    <AuthProvider>
    <main>
      <h1>Blog Page</h1>
      <h3>info</h3>
    </main>
    </AuthProvider>
  );
};



export default blog;
