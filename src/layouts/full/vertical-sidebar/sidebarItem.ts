export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: 'screencast-2-linear',
        BgColor: 'primary',
        to: '/dashboard1'
    },
    // {
    //     title: 'Dashboard 2',
    //     icon: 'chart-line-duotone',
    //     BgColor: 'success',
    //     to: '/dashboard2'
    // },
    { header: 'Order Managemnt' },
    {
        title: 'Orders',
        icon: 'notification-unread-line-duotone',
        BgColor: 'warning',
        to: '/orders'
    },
    { header: 'User Managemnt' },
    {
        title: 'Customers',
        icon: 'widget-4-linear',
        BgColor: 'warning',
        to: '/customers'
    },
    { header: 'Payments & Menu' },
    {
        title: 'Transactions',
        icon: 'widget-4-linear',
        BgColor: 'warning',
        to: '/transactions'
    },
    {
        title: 'Products',
        icon: 'widget-4-linear',
        BgColor: 'warning',
        to: '/products'
    },
    { header: 'Profile' },
    // {
    //     title: 'Contact',
    //     icon: 'phone-line-duotone',
    //     BgColor: 'secondary',
    //     to: '/apps/contacts'
    // },

    // {
    //     title: 'Blog',
    //     icon: 'align-vertical-spacing-line-duotone',
    //     BgColor: 'warning',
    //     to: '/',
    //     children: [
    //         {
    //             title: 'Posts',
    //             to: '/apps/blog/posts'
    //         },
    //         {
    //             title: 'Detail',
    //             to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones'
    //         }
    //     ]
    // },
    // {
    //     title: 'E-Commerce',
    //     icon: 'smart-speaker-minimalistic-line-duotone',
    //     to: '/ecommerce/',
    //     BgColor: 'indigo',
    //     children: [
    //         {
    //             title: 'Shop One',
    //             to: '/ecommerce/products-one'
    //         },
    //         {
    //             title: 'Shop Two',
    //             to: '/ecommerce/products-two'
    //         },
    //         {
    //             title: 'Details One',
    //             to: '/ecommerce/product/detail/one/1'
    //         },
    //         {
    //             title: 'Details Two',
    //             to: '/ecommerce/product/detail/two/1'
    //         },
    //         {
    //             title: 'List',
    //             to: '/ecommerce/productlist'
    //         },
    //         {
    //             title: 'Checkout',
    //             to: '/ecommerce/checkout'
    //         },
    //         {
    //             title: 'Add Product',
    //             to: '/ecommerce/add-product'
    //         },
    //         {
    //             title: 'Edit Product',
    //             to: '/ecommerce/edit-product'
    //         }
    //     ]
    // },
    // {
    //     title: 'Chats',
    //     icon: 'chat-round-unread-line-duotone',
    //     BgColor: 'primary',
    //     to: '/apps/chats'
    // },
    {
        icon: 'user-rounded-line-duotone',
        title: 'Profile',
        to: '/apps/user/profileone',
        BgColor: 'error'
        // children: [
        //     {
        //         title: 'Profile One',
        //         to: '/apps/user/profileone'
        //     },
        //     {
        //         title: 'Profile Two',
        //         to: '/apps/user/profiletwo'
        //     }
        // ]
    },
    // {
    //     title: 'Notes',
    //     icon: 'notification-unread-line-duotone',
    //     BgColor: 'secondary',
    //     to: '/apps/notes'
    // },
    // {
    //     title: 'Calendar',
    //     icon: 'calendar-line-duotone',
    //     BgColor: 'info',
    //     to: '/apps/calendar'
    // },
    // {
    //     title: 'Kanban',
    //     icon: 'widget-4-linear',
    //     BgColor: 'warning',
    //     to: '/apps/kanban'
    // }
];

export default sidebarItem;
