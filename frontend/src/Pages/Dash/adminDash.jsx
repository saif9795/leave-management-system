import Navbar from "../../Components/navbar"

const AdminDash = () => {
  return <div>
    <Navbar/>
    
    <div className="position-fixed mt-5 mb-4 container-fluid h-100">
    <div className="mt-2 row h-100">

        <div className="col-2 col-md-3 col-xl-2 px-sm-2 px-0 bg-success ">
          
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <span className="fs-5 d-none d-sm-inline">Menu</span>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 text-white">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline ">Make a Decision</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">View Request</span></a>
              </li>
            </ul>
            <hr />
          </div>
        </div>

        <div className="col-8 overflow-auto h-100 py-5 "> 
            <h3>Hello, User</h3>
            <h1>Welcome to the System</h1>
            
            
        </div>
    </div>
</div>


    
  </div>
  
}

export default AdminDash;