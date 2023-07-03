import React from "react";

const CityForm = ({setCity}) => {

  const handleSubmit = (event)=> {
    event.preventDefault();

    setCity(event.target.city.value);
  }

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" id="" placeholder="City"/>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default CityForm;
