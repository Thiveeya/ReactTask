import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({ title, children }) {
  const history = useHistory();
  return (
    <div>
      <div>
        <div className="nav-styles">
          <span>
            <button
              className="nav-buttons"
              onClick={() => history.push("/add/user")}
            >
              Add User
            </button>
          </span>
          <span>
            <button className="nav-buttons" onClick={() => history.push("/")}>
              Dashboard
            </button>
          </span>
        </div>
        <div className="title">{title}</div>
      </div>

      <div className="childred">
        {children}
        <footer>
          contact us
          <div>email : zenfsd@guvi.in</div>
        </footer>
      </div>
    </div>
  );
}