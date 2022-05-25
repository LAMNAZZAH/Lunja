import { testGetTodos } from "../../utils/api/accountApi";
import axios from "axios";
import { useRouter } from 'next/router';
import  AuthProvider, { authContext, PrivateRoute } from "../../contexts/auth";
import { useState, useContext } from "react";
import Posts from "../../components/Posts";


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
