import { CircleUserRound, PencilRuler } from "lucide-react"
import { usePathname } from "next/navigation"

export const NavItemsProvider = () => {

    const pathName = usePathname()

    const isNavItemActive = (pathname, nav) => {
        return pathname.includes(nav)
    }

    const path = '/proveedor/dashboard'
    return [
        {
            name: 'Servicios',
            href: `${path}/servicios`,
            icon: <PencilRuler size={20}/>,
            active: isNavItemActive(pathName, '/servicios'),
        },
        {
            name: 'Cuenta',
            href: `${path}/cuenta`,
            icon: <CircleUserRound size={20}/>,
            active: isNavItemActive(pathName, '/cuenta'),
        },
    ]
}