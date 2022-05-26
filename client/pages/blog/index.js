import Posts from "../../components/Posts";
import { PrivateRoute } from "../../contexts/auth";


const blog = () => {
  //onsole.log(todos);
  
  
  return (
      <PrivateRoute>
        <main>
          <Posts/>
        </main>
      </PrivateRoute>
  );
};

export default blog;
