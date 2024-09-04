const MakeDecision = () => {
  return <div className="container">
    
    
    <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start fw-bold">Username</label>
  <input type="text" className="form-control rounded-pill" id="formGroupExampleInput" placeholder="Enter Username" />
</div>
<div className="mb-3">
<select className="form-select rounded-pill" aria-label="Default select example">
  <option selected>Select Decision</option>
  <option value="1">Accepted</option>
  <option value="2">Rejected</option>
</select>
</div>

  </div>
  
}

export default MakeDecision;