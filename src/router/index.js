import { createWebHistory, createRouter } from "vue-router";
import ViewContacts from '@/components/ViewContacts';
import EditContacts from '@/components/EditContacts';

const routes = [
    {
        path: "/",
        redirect: {
            name: "ViewContacts"
        }
    },
    {
        path: "/view-contacts",
        name: 'ViewContacts',
        component: ViewContacts
    },
    {
        path: '/edit-contacts',
        name: 'EditContacts',
        component: EditContacts
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;