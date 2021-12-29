import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { useGlobalContext } from '../context/context';
const Dashboard = () => {
  const {err,repos,followers,user,loading,isLogedIn,SearchTearm,setSearchTearm}=useGlobalContext()
 
  return (
    <main>
     <Navbar/>
     <Search />

     {!loading ?<><Info /><User /><Repos /></>:<div className='loading-img' >
       <img src={loadingImage}/>
       
       </div>}

    </main>
  );
};

export default Dashboard;
