// authContext.js

import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  loading: true,
  is_login:false
};

const authReducer = (state, action) => {
  if (action.type=='LOGIN') {
     localStorage.setItem('user',{
      user: action.payload,
      loading: false,
      is_login:true
     })
     return  {
        ...state,
        user: action.payload,
        loading: false,
        is_login:true
      };

     
    }else if(action.type=='LOGOUT'){
    localStorage.setItem('user',
    { user: null,
      is_login:false
    })
      return {
        ...state,
        user: null,
        is_login:false
      };

    }else{
      
      localStorage.setItem('user',{
        user: action.payload,
        loading: false,
        is_login:true
      })
      return  {
         ...state,
         user: action.payload,
         loading: false,
         is_login:true
       };
    }
    
};

 function AuthProvider({ children }) {
  const [state, Authdispatch] = useReducer(authReducer, initialState);

  
//   Authdispatch({ type: 'LOGIN', payload: response });
//   Authdispatch({ type: 'LOGOUT' });
//   Authdispatch({ type: 'REGISTER', payload: userData });
    

  return (
    <AuthContext.Provider value={{state, Authdispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider,AuthContext}


