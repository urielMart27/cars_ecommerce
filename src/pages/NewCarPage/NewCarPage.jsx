import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCarForm from "../../components/NewCarForm/NewCarForm";

const NewCarPage = () => {
  return (
    <div>
      <h2>New Car Page</h2>
      <NewCarForm />
    </div>
  );
};

export default NewCarPage;
