import { testGetTodos } from "../../utils/api/accountApi";
import axios from "axios";
import { AuthProvider, ProtecteRoute } from "../../contexts/auth";

const blog = () => {
  //onsole.log(todos);
  return (
    <AuthProvider>
      <ProtecteRoute>
        <main>
          <h1>Blog Page</h1>
          <h3>info</h3>
        </main>
      </ProtecteRoute>
    </AuthProvider>
  );
};

export default blog;
