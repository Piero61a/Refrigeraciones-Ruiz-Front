import { Suspense,   } from "react"
import { Outlet  } from "react-router-dom"
import { Spinner } from "@nextui-org/react"

const AuthLayout = () => {
  return (
    <div>
      <Suspense fallback={<Spinner color="default" />}>
        <Outlet  />
      </Suspense>
    </div>
  )
}


export default AuthLayout