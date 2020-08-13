import React, { useState } from "react";
import { Button, Input } from "antd";
import { INSERT_STARTED } from "../constants/user";
import { CLICK_STARTED } from "../constants/count";
import { useSelector, useDispatch } from "react-redux";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const User = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const routeMatch = useRouteMatch();

  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleInsertName = () => {
    dispatch({ type: INSERT_STARTED, payload: name });
    setName("");
  };

  return (
    <div className="site-layout-background container">
      <p>clicked {count} time(s)</p>
      <Button
        className="click-count-button"
        onClick={() => dispatch({ type: CLICK_STARTED, payload: count })}
      >
        Click
      </Button>
      <div>
        <Input
          placeholder="Type name"
          onChange={handleChange}
          className="input-name"
          value={name}
          onPressEnter={handleInsertName}
          allowClear
        />
        <Button className="insert-name-button" onClick={handleInsertName}>
          Insert
        </Button>
        <Button
          className="insert-name-button"
          onClick={() => console.log("history", history)}
        >
          useHistory
        </Button>
        <Button
          className="insert-name-button"
          onClick={() => console.log("location", location)}
        >
          useLocation
        </Button>
        <Button
          className="insert-name-button"
          onClick={() => console.log("params", params)}
        >
          useParams
        </Button>
        <Button
          className="insert-name-button"
          onClick={() => console.log("routeMatch", routeMatch)}
        >
          useRouteMatch
        </Button>
        <Button
          className="insert-name-button"
          onClick={() => history.replace("/task")}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default User;
