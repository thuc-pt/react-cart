import React from 'react';

function Carts(props) {
  return (
    <table className="table mrg__top--25">
      <thead>
        <tr className="text-center">
          <th>NO</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th className="table__width--15">Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.items}
        {props.results}
      </tbody>
    </table>
  );
}

export default Carts;
