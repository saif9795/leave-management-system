const RequestView = () => {

    const noViewRequest = false;

  return <div>
    { noViewRequest ? <NoViewRequest /> : (

      <div>
        <h3 className="mb-4">Leave Request </h3>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ReqID</th>
      <th scope="col">Username</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1001</th>
      <td>y12345</td>
      <td>11</td>
      <td>12</td>
      <td>Sick</td>
    </tr>
    <tr>
      <th scope="row">1002</th>
      <td>z12345</td>
      <td>12</td>
      <td>13</td>
      <td>Fever</td>
    </tr>
  </tbody>
</table>
      </div>


    ) }

  </div>
}
  


export default RequestView;

const NoViewRequest = () => {
    return <div>
          <h3>No Leave Request Pending</h3>
      </div>
  }
  