import { useState, useEffect } from 'react'
import AdminSideBar from "../components/admin/AdminSidebar"
import CustomerList from "../components/admin/CustomerList"
import axios from 'axios'

// const customers = [
//     {
//         name: 'Hamza Khan',
//         email: 'hamza_khan@example.com',
//         role: 'Member',
//         image:
//             'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     }
// ]

export default function AdminUsers() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        try {
            axios
                .get("http://localhost:4000/routes/Login/getUsers")
                .then((response) => {
                    setCustomers(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <AdminSideBar />
            <CustomerList data={customers} />
        </>
    )
}
