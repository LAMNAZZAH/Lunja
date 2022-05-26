import Posts from "../../components/Posts";

const blog = () => {

  return (
    <main>
      <Posts />
    </main>
  );
};

blog.requireAuth = true;

export default blog;
