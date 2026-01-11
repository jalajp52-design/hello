import React from 'react';
// alert component

export default function Alert(props) {
  const capital = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        style={{
          position: 'fixed',
          top: '50px',          // height of your navbar (logo is 70px)
          left: '0',
          width: '100%',
          zIndex: 9999,
          color : 'white',
          backgroundColor:'black'
        }}
        className={`alert alert-${props.alert.type} alert-dismissible fade show mb-0`}
        role="alert"
      >
        <strong>{capital(props.alert.type)}</strong> : {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
