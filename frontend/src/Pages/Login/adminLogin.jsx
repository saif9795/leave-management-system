import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = () =>{
      navigate("dash");}

  return (
    <div>

      <div className="container">

        <ul className="mt-5 p-5 justify-content-center">
          <p className="p-3 mb-4 rounded-pill bg-success text-white border text-center fs-4">LEAVE MANAGEMENT SYSTEM</p>
          <div className="mb-3 row">
            <label htmlFor="inputUsername" className="col-sm-2 col-form-label fw-bold">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control rounded-pill" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label fw-bold">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control rounded-pill" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
                <button type="button" className="rounded-pill btn btn-success justify-content-center" onClick={handleSubmit}>Login</button>
              </div>
        </ul>

      </div>

    </div>
  )
}

export default AdminLogin;