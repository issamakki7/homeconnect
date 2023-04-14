import React, { useEffect } from 'react';
import ProfileCard from '../components/Profile/ProfileCard';
import YourHousesTable from '../components/Profile/YourHousesTable';
import YourBidsTable from '../components/Profile/YourBidsTable';
import YourVisitRequestsTable from '../components/Profile/YourVisitRequestsTable';


function Profile(){
   
    return(
      <div>
        
        <div className='profile-page' >
        <ProfileCard/>
        <YourHousesTable/>
        <YourBidsTable/>
        <YourVisitRequestsTable/>
        </div>
     
        </div>
    )
}
    

    export default Profile;


    

    // function Profile(){
    //     var username = 'issa.makki';
    //     return(
    //         <div>
    //             {
    //         useEffect(
    //            username = "" ?
    //         <div>
            
    //         <div className='profile-page' >
    //         <ProfileCard/>
    //         <ProfileTable/>
    //         </div>
    //         <Footer/>
    //         </div>
    //         :
    //         <div>
    //             <h1>Please Sign In to access your profile</h1>
    //         </div>
            
    //         )
    // }
               
    //         )
    //         </div>
    //     )
    //     }
        
    
    //     export default Profile;