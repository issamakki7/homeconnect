import React from 'react';

import AdminHero from '../components/AdminHero/AdminHero';
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";


function AdminHome(){
    return(
        <div>
            <AdminNavbar/>
            <AdminHero/>
        </div>
        )
    }

    export default AdminHome;