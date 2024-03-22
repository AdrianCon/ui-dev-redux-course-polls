import * as React from "react";
import { handleAddPoll } from "../redux/actions/polls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function AddPoll() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [options, setOptions] = React.useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  const [question, setQuestion] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddPoll({ question, ...options }));
    navigate("/");
  };

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    setOptions({
      ...options,
      [name]: value,
    });
  };

  const isDisabled = () => {
    return (
      question === "" || Object.values(options).some((option) => option === "")
    );
  };

  console.log(options);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        name="question"
        className="input"
        type="text"
      />

      <h3>What are the options?</h3>
      {Object.keys(options).map((option) => (
        <div key={option}>
          <label className="label" htmlFor={"input"}>
            {option.toUpperCase()}.
          </label>
          <input
            value={options[option]}
            className="input"
            onChange={handleInputChange}
            name={option}
            type="text"
            placeholder={`Option ${option.toUpperCase()}`}
          />
        </div>
      ))}

      <button className="btn" type="submit" disabled={isDisabled()}>
        Submit
      </button>
    </form>
  );
}
