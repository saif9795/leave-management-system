import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/home'
import AdminLogin from './Pages/Login/adminLogin'
import EmployeeLogin from './Pages/Login/employeeLogin'
import Logout from './Pages/Logout/logout'
import AdminDash from './Pages/Dash/adminDash'
import EmployeeDash from './Pages/Dash/employeeDash'
import Decision from './Pages/Dash/Admin/decision'
import ViewRequeset from './Pages/Dash/Admin/viewRequest'
import Request from './Pages/Dash/Employee/request'
import ViewDecision from './Pages/Dash/Employee/viewDecision'
import DecisionSuccess from './Pages/Success/decisionSuccess'
import RequestSuccess from './Pages/Success/requestSuccess'



function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/login/dash" element={<AdminDash />} />
          <Route path="/admin/decision" element={<Decision />} />
          <Route path="/admin/viewrequest" element={<ViewRequeset />} />
          <Route path="/admin/success" element={<DecisionSuccess />} />

          <Route path="/employee/login" element={<EmployeeLogin />} />
          <Route path="/employee/login/dash" element={<EmployeeDash />} />
          <Route path="/employee/request" element={<Request />} />
          <Route path="/employee/viewdecision" element={<ViewDecision />} />
          <Route path="/employee/success" element={<RequestSuccess />} />
         
          <Route path="/logout" element={<Logout />} />


        </Routes>

      </div>
    </>
  )
}

export default App
