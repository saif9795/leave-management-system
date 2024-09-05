import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleChange = (event) =>{
    if(event.target.value === "profile"){
      navigate("/profile");
    }
    if(event.target.value === "edit"){
      navigate("/edit");
    }
    if(event.target.value === "logout"){
      navigate("/logout");
    }
  };




  return <div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossOrigin="anonymous"></script>
<div className="container">

  <nav className="navbar m-4 navbar-expand-md navbar-light bg-dark fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand text-white" href="#home" data-target="#home:not(.show)" data-toggle="collapse" data-parent="#page-content">Home</a>
      <div className="dropdown"  onChange={handleChange}>
        <a className="btn btn-secondary dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
          Options
        </a>
      
        <ul className="dropdown-menu m-4" aria-labelledby="dropdownMenuLink">
         
          <li><Link to={"/profile"} className="dropdown-item" value="profile">Profile</Link></li>
          <li><Link to={"/edit"} className="dropdown-item" value="edit">Edit Profile</Link></li>
          <li><Link to={"/logout"} className="dropdown-item" value="logout">Logout</Link></li>
       
          
        </ul>
      </div>
       
    </div>
</nav>

</div>


    </div>
  
}

export default Navbar;