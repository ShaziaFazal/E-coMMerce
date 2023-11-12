import AdminSideBar from "../components/admin/AdminSidebar"
import ProductList from "../components/admin/ProductsList"

const products = [
    {
        title: 'Dupatta',
        category: 'Women Dress',
        price: 'Rs.3444',
        status: 'In-stock',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
]

export default function AdminProducts() {
    return (
        <>
            <AdminSideBar />
            <ProductList data={products} />
        </>
    )
}
