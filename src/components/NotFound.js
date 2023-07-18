import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Na vjen keq kjo faqe nuk egziston</h1>
      <Link to="/Home">Back to homepage...</Link>
    </div>
  );
};

export default NotFound;
