import { useNavigate } from "react-router-dom";
import "./Modal.css";
import logout from "../../assets/images/out.svg";

const Modal = () => {
  const navigate = useNavigate();

  let name = sessionStorage.getItem("name");
  let avatar: string = sessionStorage.getItem("avatar")!;

  const handleSubmit = () => {
    sessionStorage.clear();
    navigate("/");
  };
//The Modal component appears to use the use Navigate hook from the 
//react-router-dom library to get a navigate function that can be used to 
//navigate to a different route in a single-page application (SPA).
  return (
    <div className="modal">
      <div className="modal-container">
        <img src={avatar} alt="avatar" className="avatar" />
        <h4>That's it, {name}!</h4>
        <button id="logout-btn" type="submit" onClick={handleSubmit}>
          <div className="button-content">
            <img src={logout} alt="login" id="out" />
            <p>Logout </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Modal;
