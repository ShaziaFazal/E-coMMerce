import { useState, useEffect } from 'react'
import AdminSideBar from "../components/admin/AdminSidebar"
import OrderList from "../components/admin/OrdersList"
import axios from 'axios'

export default function AdminOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        try {
            axios
                .get("http://localhost:4000/orderInfo/orders")
                .then((response) => {
                    setOrders(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <AdminSideBar />
            <OrderList data={orders} />
        </>
    )
}

