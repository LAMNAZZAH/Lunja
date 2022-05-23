import { testGetTodos } from '../../utils/api/accountApi';
import axios from 'axios';

const blog = ({todos}) => {
  console.log(todos);
  return (
    <main>
      <h1>Blog Page</h1>
      {
        todos.map(todo => (
          <h3>{todo.title}</h3>
        ))
      }
    </main>
  );
};


export async function getServerSideProps() {
  const response = await testGetTodos();

  const todos =  await response
  console.log(todos);
  return {
    props:{
      todos
    }
  }
}

export default blog;
