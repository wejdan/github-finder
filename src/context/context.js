import React, { useState, useContext, useEffect } from 'react'
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


const AppContext = React.createContext()

const AppProvider = ({ children }) => {


  const [repos,setoRepos]=useState(mockRepos)
  const [followers,setoFollowers]=useState(mockFollowers)
  const [user,setUser]=useState(mockUser)
  const [loading,setLoading]=useState(false);
  const [isLogedIn,setIsLogedin]=useState(true);
  const [err,setErr]=useState(false);
  const [SearchTearm,setSearchTearm]=useState("john-smilga");
  const [limit,setLimit]=useState({limit:60,remaining:0});

  const getLimit=async()=>{
    const response=await fetch('https://api.github.com/rate_limit');
    const data= await response.json();
    console.log(data.rate);
    setLimit(data.rate)

  }
  const getData=async(prop,nItems,setFunction)=>{
      const npages=Math.ceil(nItems/100)
      let DataList=[]

      
      for (let page = 0; page < 1; page++) {
        const response=await fetch(`${rootUrl}/users/${SearchTearm}/${prop}?per_page=100&page=${page}`);
        const data= await response.json();
        console.log(data);
        if(data.message){
setErr(data.message)
        }else{
            DataList=[...DataList,...data]
        }
        
          
      }
      console.log(DataList);
      setFunction(DataList);



  }
  useEffect(()=>{
    async function fetchData(){
    

      
      setLoading(true);
      const response=await fetch(`${rootUrl}/users/${SearchTearm}`);
      const data= await response.json();
      console.log(data);
      if(data.login){
          setUser(data)
          getData("followers",data.followers,setoFollowers)
          getData("repos",data.public_repos,setoRepos)
          setErr(false)


      }else{
          setErr(data.message)
      }
     
      getLimit();
      setLoading(false);
    }

    if(SearchTearm){

  fetchData();}}
  
  ,[SearchTearm])


  useEffect(()=>{
    getLimit();
  },[])

  return <AppContext.Provider value={{limit,err,repos,followers,user,loading,isLogedIn,SearchTearm,setSearchTearm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
