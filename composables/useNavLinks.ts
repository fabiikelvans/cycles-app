// Navigation Links

import type {NavLink} from "~/types";
import {RiVisaLine, RiHome4Fill, RiSuitcaseFill, RiFileListFill} from "@remixicon/vue";

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
      icon: RiVisaLine
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
