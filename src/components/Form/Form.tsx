import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { joinClassNames } from "../../utils/joinClassNames";

import { login } from "../../api/index";
import log from "../../assets/images/in.svg";
import close from "../../assets/images/close.svg";
import loader from "../../assets/images/loader.svg";
import "./Form.css";

type User = {
  email: string;
  password: string;
};

const Form = () => {
  const [userData, setUserData] = useState("null");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const handleChange = () => {
    setUserData('null');
  };

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    login({ email: data.email, password: data.password })
      .then((res: any) => {
        if (res.data) {
          setUserData(res.data);
          setLoading(false);
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("avatar", res.data.avatar);
          navigate("/profile");
        } else {
          console.log(res.error);
          setUserData("");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="form-main">
      <form onSubmit={onSubmit}>
        <div>
          <div className="form-info">
            <p id="title">Welcome, Stranger</p>
            <p id="subtitle">
        
            </p>
          </div>

          <div className="input-container">
            <label htmlFor="email"></label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^@\s]+@[^@\s]+$/,
              })}
             
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              className={errors.email || !userData ? "input-error" : "input"}
              onChange={handleChange}
            />
            {errors.email || !userData ? (
              <img id="close" src={close} alt="close" />
            ) : null}
            {errors.email?.type === "required" && (
              <p className="errors">Email is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errors">Incorret email</p>
            )}
          </div>

          <div className="input-container">
            <label htmlFor="password"></label>
            <input
              {...register("password", { required: true })}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className={errors.password || !userData ? "input-error" : "input"}
              onChange={handleChange}
            />
            {errors.password || !userData ? (
              <img id="close" src={close} alt="close" />
            ) : null}
            {errors.password?.type === "required" && (
              <p className="errors">Password is required</p>
            )}
          </div>
          <button
            id={!loading ? "button" : "button-without-shadow"}
            type="submit"
            className={joinClassNames(["button-part1", "button-part2"])}
          >
            {!loading ? (
              <div className="button-content">
                <p>Login </p>
                <img src={log} alt="login" id="in" />
              </div>
            ) : (
              <div className="spinner-container">
                <img src={loader} alt="loader" />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
