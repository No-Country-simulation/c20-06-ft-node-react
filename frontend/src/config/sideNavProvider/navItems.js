import { FaRegUserCircle } from "react-icons/fa"
import { LuPencilRuler } from "react-icons/lu"
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
            icon: <LuPencilRuler size={20}/>,
            active: isNavItemActive(pathName, '/servicios'),
        },
        {
            name: 'Cuenta',
            href: `${path}/cuenta`,
            icon: <FaRegUserCircle size={20}/>,
            active: isNavItemActive(pathName, '/cuenta'),
        },
    ]
}