import DateInput from "./datePicker";

const MakeRequest = () => {
    return <div className="container">
      
      
      <div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start fw-bold">Username</label>
    <input type="text" className="form-control rounded-pill" id="formGroupExampleInput" placeholder="Enter Username" />
  </div>
  <div className="d-flex flex-col justify-content-center">
  <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start m-1 fw-bold">From</label>
   <span className="d-flex flex-col"><DateInput /></span>
   <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start m-1 fw-bold">To</label>
   <span className="d-flex flex-col "><DateInput /></span>
  </div>
  <div>
  <label htmlFor=" exampleFormControlTextarea1" className="fw-bold">Explain Reason in Short</label>
  <textarea className="mb-3 rounded form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
  </div>
  
    </div>
    
  }
  
  export default MakeRequest;