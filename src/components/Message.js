import React from 'react';

function Message(props) {
  return (
    <div className="alert alert-info mrg__top--25">
      <strong>{props.message}</strong>
    </div>
  );
}

export default Message;
