import { AiOutlineTeam, AiOutlineTool } from "react-icons/ai";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { DashboartRoutesProps } from "../interfaces";

export const DashboardRoutes: DashboartRoutesProps[] = [
  {
    name: "Empleados",
    path: "/empleados",
    icon: <AiOutlineTeam size={55} />

  },
  {
    name: "Herramientas",
    path: "/herramientas",
    icon: <AiOutlineTool size={55} />

  },
  {
    name: "Servicios",
    path: "/servicios",
    icon: <MdOutlineLocalLaundryService size={55} />

  },
];