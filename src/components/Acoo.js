import './Acoo.css'   // import CSS file
import React, { useState } from 'react';

export default function Acoo() {

  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const [setbtn, setBtntext] = useState("enable dark mode");
//dark mode bwith props
  const hello = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'pink'
      });
      setBtntext("enable light mode");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtntext("enable dark mode");
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
                <strong>This is the first item’s accordion body.</strong>
                It is shown by default. You can add any content here.
              </div>
            </div>
          </div>

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
                <strong>This is the second item’s accordion body.</strong>
                It is hidden by default.
              </div>
            </div>
          </div>

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
                <strong>This is the third item’s accordion body.</strong>
                It is hidden by default.
              </div>
            </div>
          </div>

          <div className="class">
       <label class="switch">
  <input type="checkbox" onClick={hello}/>
  <span class="slider round"></span>
  
</label>
          {setbtn}  
          </div>

        </div>
      </div>
    </>
  );
}
