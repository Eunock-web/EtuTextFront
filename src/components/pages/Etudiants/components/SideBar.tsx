import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from "lucide-react";
import SideBar, { SideBarItem } from "../../../utils/SideBar";

function SideBarEtudiant() {
    return (
        <div>
            <main className="App w-[20%]">
                <SideBar>
                    <SideBarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
                    <SideBarItem icon={<Receipt size={20} />} text="Users" active />
                    <SideBarItem icon={<UserCircle size={20} />} text="Users" />
                    <SideBarItem icon={<BarChart3 size={20} />} text="Inventory" />
                    <SideBarItem icon={<Boxes size={20} />} text="Orders " alert />
                    <SideBarItem icon={<Package size={20} />} text="Billings" />
                    <SideBarItem icon={<Settings size={20} />} text="Settings" />
                    <SideBarItem icon={<LifeBuoy size={20} />} text="help" />
                </SideBar>
            </main>
        </div>
    )
}

export default SideBarEtudiant