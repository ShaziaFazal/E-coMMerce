import AdminSideBar from "../components/admin/AdminSidebar"
import OrderList from "../components/admin/OrdersList"

const orders = [
    {
        title: 'Dupatta',
        category: 'Women Dress',
        customer: 'Lindsay',
        date: '11-12-2023',
        image:
            'https://beechtree.pk/cdn/shop/files/BT1W23U28_1_720x.jpg?v=1698666626',
    }
]

export default function AdminOrders() {

    return (
        <>
            <AdminSideBar />
            <OrderList data={orders} />
        </>
    )
}

