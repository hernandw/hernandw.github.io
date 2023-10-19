
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout__container">
      <div className='nav'>
        <Header />
      </div>

      <div className="outlet">
        <div className="tags">
          <p>&lt;html&gt;</p>
          <p className="ml-4">&lt;body&gt;</p>
        </div>
        <Outlet />
        <div className="tags">
          <p className="ml-4">&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
      </div>
    </div>
  );
}

export default Layout
