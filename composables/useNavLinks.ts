// Navigation Links

import type {NavLink} from "~/types";
import {PhCreditCard, PhHouseSimple, PhBriefcase, PhFiles} from "@phosphor-icons/vue";

export const useNavLinks = (): NavLink[] => {
  return [
    {
      name: "Dashboard",
      href: "/dashboard/analytics",
      icon: PhHouseSimple
    },
    {
      name: "Finance",
      href: "/dashboard/finance",
      icon: PhCreditCard
    },
    {
      name: "Human Resource",
      href: "/dashboard/hr",
      icon: PhFiles
    },
    {
      name: "Tasks",
      href: "/dashboard/tasks",
      icon: PhBriefcase
    },

  ]
}
