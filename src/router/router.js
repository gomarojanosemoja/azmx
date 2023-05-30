import { createWebHistory, createRouter} from 'vue-router';




const routes = [
    {
        path: '/home-page',
        name: 'home-page',
        component: () => import('../components/HomePage.vue')
    },
    {
        path: '/employees/manage',
        name: 'employees-manage',
        component: () => import('../components/employees/Employees.vue')
    },
    {
        path: '/credits/manage',
        name: 'credits-manage',
        component: () => import('../components/credits/Credits.vue')
    },
    {
        path: '/credits/pays',
        name: 'credits-pays',
        component: () => import('../components/credits/Pays.vue')
    },
    {
        path: '/credits/products',
        name: 'credits-products',
        component: () => import('../components/credits/Pays.vue')
    },
    
   
    
    {
        path: '/credits/view-products',
        name: 'view-products',
        component: () => import('../components/credits/products/ProductsView.vue')
    },
    {
        path: '/customer/manage',
        name: 'customer-manage',
        component: () => import('../components/customers/Customers.vue')
    },
    {
        path: '/register-product',
        name: 'register-product',
        component: () => import('../components/credits/products/RegisterProduct.vue')
    },
    
    {
        path: '/log-in',
        name: 'log-in',
        component: () => import('../components/auth/LogIn.vue')
    },
    {
        path: '/my-shopping',
        name: 'my-shopping',
        component: () => import('../components/shopping/MyShopping.vue')
    },
    {
        path: '/my-profile',
        name: 'my-profile',
        component: () => import('../components/profile/MyProfile.vue')
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;