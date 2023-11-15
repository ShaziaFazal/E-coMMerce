
const sections = [
    {
        name: 'Customers',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        link: '/admin/dashboard/customers',
    },
    {
        name: 'Orders',
        imageUrl:
            'https://images.unsplash.com/photo-1695831440805-1b623520e70e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/admin/dashboard/orders',
    },
    {
        name: 'Products',
        imageUrl:
            'https://beechtree.pk/cdn/shop/files/BTS232613048_4_1024x1024.jpg?v=1689767392',
        link: '/admin/dashboard/products',
    },
]

const Dashboard = () => {
    return (
        <>
            <main className="lg:pl-72 bg-gray-400 py-24">
                <h2 className="mt-12 mx-16 text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome</h2>
                <div className="mt-4 mx-4 px-4 sm:px-6 lg:px-8 bg-gray-400 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                        <div className="mx-auto max-w-2xl">
                        </div>
                        <ul
                            role="list"
                            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                        >
                            {sections.map((section) => (
                                <a key={section.name} href={section.link}>
                                    <li className="rounded-2xl bg-gray-600 px-8 py-10">
                                        <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={section.imageUrl} alt="" />
                                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{section.name}</h3>
                                        <p className="text-sm leading-6 text-gray-400"></p>
                                    </li>
                                </a>

                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard