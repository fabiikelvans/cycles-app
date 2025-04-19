// Navigation Links

import type {NavLink} from "~/types";
import { RiHome4Fill, RiWallet2Fill, RiSuitcaseFill, RiFileListFill} from "@remixicon/vue";

export const useNavLinks = (): NavLink[] => {
  return [
    {
      name: "Dashboard",
      href: "/dashboard/analytics",
      icon: RiHome4Fill
    },
    {
      name: "Finance",
      href: "/dashboard/finance",
      icon: RiWallet2Fill,
    },
    {
      name: "Human Resource",
      href: "/dashboard/hr",
      icon: RiFileListFill
    },
    {
      name: "Tasks",
      href: "/dashboard/tasks",
      icon: RiSuitcaseFill
    },

  ]
}
