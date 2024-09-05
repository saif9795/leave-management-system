import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleChange = (event) =>{
    if(event.target.value === "admin"){
      navigate("admin/login");
    }
    if(event.target.value === "employee"){
      navigate("employee/login");
    }
  };

  return <div>

    <div className="container">

      <ul className="mt-5 p-5 justify-content-center">
        <p className="p-3 mb-2 rounded-pill bg-success text-white border text-center fs-4">LEAVE MANAGEMENT SYSTEM</p>
        <select className="form-select text-center rounded-pill text-light bg-dark" onChange={handleChange}>
          <option selected>Select Designation</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
      </ul>

    </div>

  </div>

}

export default Home;


// STARTER CODE

// const Home = () => {
//   return <div>

//     <div className="container">

//       <ul className="mt-5 p-5 justify-content-center">
//         <p className="p-3 mb-2 rounded-pill bg-success text-white border text-center fs-4">LEAVE MANAGEMENT SYSTEM</p>
//         <select className="form-select text-center rounded-pill text-light bg-dark" >
//           <option selected>Select Designation</option>
//           <option value="1">Admin</option>
//           <option value="2">Employee</option>
//         </select>
//       </ul>

//     </div>

//   </div>

// }

// export default Home;