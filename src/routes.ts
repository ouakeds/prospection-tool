
import CustomerPage from "./views/customer";
import ContractPage from "./views/contract";
import SignIn from "./views/SignIn"

interface Route {
    path: string;
    Component: React.FC
}

const routes: Route[] = [
    { path: '/login', Component: SignIn },
    { path: '/customers', Component: CustomerPage },
    { path: '/contracts', Component: ContractPage },
    { path: '/', Component: SignIn }
]

export default routes