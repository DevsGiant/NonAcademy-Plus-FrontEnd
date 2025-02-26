import { FaRegUser } from "react-icons/fa6";
import { GoGift } from "react-icons/go";
import { SlTrophy } from "react-icons/sl";
import { TfiViewGrid } from "react-icons/tfi";

export const dashboardMenuConfig = [
  {
    icon: <TfiViewGrid />,
    label: "My Courses",
    route: "/dashboard",
  },
  {
    icon: <FaRegUser />,
    label: "Profile",
    route: "/dashboard/profile",
  },
  {
    icon: <SlTrophy />,
    label: "Rewards",
    route: "/dashboard/rewards",
  },
  // {
  //   icon: (
  //   icon: <SlTrophy />,
  //   ),
  //   label: "Account",
  //   route: "#",
  //   children: [
  //     { label: "Profile", route: "/dashboard/account/profile" },
  //     { label: "Change Password", route: "/dashboard/account/change-password" },
  //   ],
  // },
];
