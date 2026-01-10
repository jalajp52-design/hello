export default function Form() {
  return (
    <form>
      <h1 className="text-center mb-3">Form to Login</h1>
      <hr />

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
        <input
  type="email"
  className="form-control modern-input"
  id="inputEmail3"
  value="xyz@gmail.com"
/>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
  type="password"
  className="form-control modern-input"
  id="inputPassword3"
  value="password"
/>

        </div>
      </div>

      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">
          Radios
        </legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="gridRadios1">
              First radio
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
            />
            <label className="form-check-label" htmlFor="gridRadios2">
              Second radio
            </label>
          </div>

        
        </div>
      </fieldset>

      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Remember me
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
 
  );
}
