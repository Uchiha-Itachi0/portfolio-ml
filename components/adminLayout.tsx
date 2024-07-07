/*
* Layout for admin pages
*
* */

import { Inter } from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const inter = Inter({ subsets: ["latin"] });

const AdminLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            {children}
        </>
    )
}

export default AdminLayout;

