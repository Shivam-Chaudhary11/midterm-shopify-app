import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../schemas/LoginSchema";
import { TbLogin } from "react-icons/tb";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        alert("Login Successful");
        navigate("/");

        action.resetForm();
      },
    });

  return (
    <>
      <div className="formDivContainer">
        <div className="card formContainer">
          <form onSubmit={handleSubmit}>
            <div className="formDiv">
              <h2>LOGIN</h2>
              <div className="form-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
              </div>
              <div className="form-input">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}
              </div>
              <div>
                <button type="submit" className="btn blueBtn loginPageBtn">
                  <TbLogin size={"20px"} />
                  Login
                </button>
              </div>
              <p>
                Don't have an account? Sign up <Link to={"/signup"}>here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
