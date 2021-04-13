import Todo from "./pages/Todo"
import Auth from "./pages/Auth"


export const authRoutes = [
    {
        path: "/",
        Component: Todo
    }
]


export const publicRoutes = [
    {
        path: "/registration",
        Component: Auth
    },
    {
        path: "/login",
        Component: Auth
    }
]