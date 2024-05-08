/* eslint-disable @typescript-eslint/no-unused-vars */
import {ReactNode, createContext, useContext, useEffect, useState} from 'react';
 type User = {
  name:string;
  email:string;
 };

 type UserAuth = {
  isLoggedIn:boolean;
  user: User | null;
  login:(email:string, password:string) => Promise<void>;
  signup:(name:string, email:string, password:string) => Promise<void>;
  logout:() => Promise<void>;
 }
 export const AuthContext = createContext<UserAuth|null>(null);
export const AuthContextProvider  = ({children}:{children:ReactNode}) =>{
  const [user, setUser] = useState<User|null>(null);
const  [isLoggedIn, setisLoggedIn]  = useState(false);

  useEffect(() =>{},[]);

  const login = async(_email:string, _password:string) =>{};
  const signup = async(_name:string ,_email:string, _password:string) => {};
  const logout = async() => {};
 const value = {
  user,
  isLoggedIn,
  login,
  signup,
  logout,
 };
return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
}
export const useAuth = () =>{
 useContext(AuthContext)
}
