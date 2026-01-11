import './Acoo.css'; // import CSS file
import React, { useState } from 'react';

export default function Acoo(props) {
  // State for internal dark/light toggle (optional)
  const [myStyle, setMyStyle] = useState({
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
  });

  const [btnText, setBtnText] = useState(
    props.mode === 'dark' ? "Enable Light Mode" : "Enable Dark Mode"
  );

  // Function to toggle dark/light mode
  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <div className="page-center" style={myStyle}>
        <div
          className="accordion custom-accordion"
          id="accordionPanelsStayOpenExample"
          style={myStyle}
        >
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>This is the first item’s accordion body.</strong> You can
                add any content here.
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>This is the second item’s accordion body.</strong> Hidden by default.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>This is the third item’s accordion body.</strong> Hidden by default.
              </div>
            </div>
          </div>

          {/* Dark/Light toggle switch */}
          <div className="class mt-3">
            <label className="switch">
              <input type="checkbox" onClick={toggleStyle} />
              <span className="slider round"></span>
            </label>
            <span className="ms-2">{btnText}</span>
          </div>
        </div>
      </div>
    </>
  );
}
