import { useState, useEffect } from 'react'
import axios from "axios"
import AdminSideBar from "../components/admin/AdminSidebar"
import ProductList from "../components/admin/ProductsList"


export default function AdminProducts() {

    const [products, setProducts] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/productInfo/deleteProdById?id=${productId}`);
            console.log(response.data);

            if (response.status === 200) {
                setShowAlert(true);
            } else {
                console.error('Error deleting product:', response.status);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

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
            <ProductList data={products} deleteProductById={deleteProduct} showAlert={showAlert} setShowAlert={setShowAlert} />
        </>
    )
}
