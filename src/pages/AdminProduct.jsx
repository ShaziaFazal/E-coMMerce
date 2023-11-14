import { useState, useEffect } from 'react'
import axios from "axios"
import AdminSideBar from "../components/admin/AdminSidebar"
import ProductList from "../components/admin/ProductsList"

// const products = [
//     {
//         title: 'Dupatta',
//         category: 'Women Dress',
//         price: 'Rs.3444',
//         status: 'In-stock',
//         image:
//             'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     }
// ]

export default function AdminProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            axios
                .get("http://localhost:4000/productInfo/getallproducts")
                .then((response) => {
                    setProducts(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log(products)

    return (
        <>
            <AdminSideBar />
            <ProductList data={products} />
        </>
    )
}
