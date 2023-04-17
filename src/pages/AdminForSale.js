import React from 'react';

import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import AdminHousesForSale from "../components/AdminHousesForSale/AdminHousesForSale";


function AdminForSale(){
    return(
        <div>
            <AdminNavbar/>
            <AdminHousesForSale/>
        </div>
        )
    }

    export default AdminForSale;