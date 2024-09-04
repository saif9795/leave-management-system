const DecisionView = () => {

    const noRequest = false;
  return <div>
{ noRequest ? <NoRequest /> : (

    <div>
        <h3 className="mb-4">Request Status</h3>
<table className="table ">
  <thead>
    <tr>
      <th scope="col">ReqID</th>
      <th scope="col">Username</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1001</th>
      <td>y12345</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>
    </div>
    
) }



  </div>
  
}

export default DecisionView;

const NoRequest = () => {
    return <div>
          <h3>No Request Made</h3>
      </div>
  }