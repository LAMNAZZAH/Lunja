import { useContext, useState } from "react"
import { authContext } from "../contexts/auth";
import { logout } from '../utils/api/accountApi';

const Posts = () => {
    const {user, loading} = useContext(authContext);
  const [title , setTitle] = useState({});
  const loadIt = () => {
    setTitle(user?.username);
    console.log(title);
  }
  return (
    <div>
        <h1>posts</h1>
        <h3>{user?.username}</h3>
        <button onClick={() => loadIt()}>load</button>
        <button onClick={() => logout()}>logout</button>
    </div>
  )
}

export default Posts