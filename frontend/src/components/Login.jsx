import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userCurrent, userlogin } from "../JS/userSlice/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userCurrent());
    }
  }, []);

  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("يرجى تعبئة الحقول");
      return;
    }

    const result = await dispatch(userlogin(login));
    if (result.payload && !result.error) {
      localStorage.setItem("token", "your-generated-token");
      navigate("/profil");
    } else {
      console.error("فشل تسجيل الدخول!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h2 className="login-title">يرجى تسجيل الدخول</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="البريد الإلكتروني"
            required
            autoFocus
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="login-input"
              placeholder="كلمة المرور"
              required
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="login-checkbox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">تذكرني</label>
          </div>

          <button className="login-button" type="submit">
            تسجيل الدخول
          </button>
        </form>

        <p className="login-register">
          ليس لديك حساب؟ <Link to="/register">سجل الآن</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
