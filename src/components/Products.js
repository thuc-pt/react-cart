import React from 'react';

function Products(props) {
  return (
    <div className="mrg__top--25">
      <h2 className="text-center"><strong>List Products</strong></h2>
      <div className="row">{props.children}</div>
    </div>
  );
}

export default Products;
