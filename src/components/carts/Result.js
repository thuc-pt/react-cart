import React from 'react';

function Result(props) {
  let {listItems} = props;

  function showPaidAmount(listItems) {
    let result = 0;
    listItems.forEach(item => result += item.product.price * item.quantity);
    return result;
  }

  return (
    <tr className="text-center">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><strong>Total payment:</strong></td>
      <td>{showPaidAmount(listItems).toLocaleString()}</td>
      <td><button className="btn btn-info"><i className="fas fa-dollar-sign mrg__right--5"></i>Payout</button></td>
    </tr>
  );
}

export default Result;
