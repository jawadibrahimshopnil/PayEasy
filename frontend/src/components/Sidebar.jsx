import { SiRazorpay } from "react-icons/si";
import SidebarContainer from './SidebarContainer';
import { SidebarItem } from './SidebarItem';
import { MdLogout, MdOutlineHome } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";
import { PiHandCoins } from "react-icons/pi";

const Sidebar = () => {
    return (
        <SidebarContainer
                headingIcon={<SiRazorpay className="text-blue-600 w-6 h-6 mr-3 sm:h-9" />}
                heading={"PayEasy"}>

                {/* normal user */}
                <SidebarItem
                    icon={<MdOutlineHome className="PEIcon" />}
                    text={"Home"} to={"/"}
                />
                <SidebarItem
                    icon={<LuSend className="PEIcon" />}
                    text={"Send Money"} to={"/"}
                />
                <SidebarItem
                    icon={<BsCashCoin className="PEIcon" />}
                    text={"Cash In"} to={"/"}
                />
                <SidebarItem
                    icon={<PiHandCoins className="PEIcon" />}
                    text={"Cash Out"} to={"/"}
                />


                <SidebarItem
                    icon={<MdLogout className="PEIcon" />}
                    text={"Logout"} to={"/"}
                />

        </SidebarContainer>
    );
};

export default Sidebar;