import { Link } from "react-router-dom"
import { DashboardRoutes } from "../../constants"

const Dashboard = () => {

  return (
    <div className="flex items-center justify-around w-full h-[600px]">
      {
        DashboardRoutes.map((route, index) => {
          return (
            <Link to={route.path} key={index}>
              <div className="w-40 h-40 border-1 border-primary_input_border grid place-content-center">
                {route.icon}
              </div>
              <h2 className="text-center">{route.name}</h2>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Dashboard