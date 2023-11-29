import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className='bg-white w-screen h-screen '>
      <Header />
      <div className='max-w-7xl mt-5 flex mx-auto px-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout