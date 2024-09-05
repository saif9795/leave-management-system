import { Link } from "react-router-dom"
import MakeDecision from "../../../Components/makeDecision"
import Navbar from "../../../Components/navbar"
import { useNavigate } from "react-router-dom";

const Decision = () => {

  const navigate = useNavigate();

  const handleSubmit = () =>{
      navigate("/admin/success");}

  return <div>
<Navbar />

    
    <div className="position-fixed mt-5 mb-4 container-fluid h-100">
    <div className="mt-2 row h-100">

        <div className="col-2 col-md-3 col-xl-2 px-sm-2 px-0 bg-success ">
          
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <span className="fs-5 d-none d-sm-inline">Menu</span>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
              <li className="nav-item">
                <Link to={"/admin/decision"} className="nav-link align-middle px-0 text-white">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline ">Make a Decision</span>
                </Link>
              </li>
              <li>
                <Link to={"/admin/viewrequest"} className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">View Request</span></Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>

        <div className="col-9 overflow-auto h-100 py-5  "> 
            <MakeDecision />
            <div className="d-flex justify-content-center">
                <button type="button" className="rounded-pill btn btn-success justify-content-center fw-bold" onClick={handleSubmit}>SUBMIT</button>
              </div>
            
        </div>
    </div>
</div>



    </div>
  
}

export default Decision