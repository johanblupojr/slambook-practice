import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactNumber: '',
    favoriteColor: '',
    favoriteFood: '',
    otherFavorites: ''
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions((prevSubmissions) => [...prevSubmissions, formData]);
    setFormData({
      name: '',
      age: '',
      contactNumber: '',
      favoriteColor: '',
      favoriteFood: '',
      otherFavorites: ''
    });
  };

  return (
    <div style={{textAlign:"left"}}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Favorite Color:
          <input
            type="text"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Favorite Food:
          <input
            type="text"
            name="favoriteFood"
            value={formData.favoriteFood}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Other Favorite Stuff:
          <textarea
            name="otherFavorites"
            value={formData.otherFavorites}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="submit" >Submit</button>
        </div>      
      </form>

      <div>
        <h2>Submissions:</h2>
        {submissions.map((submission, index) => (
          <div key={index}>
            <h3>{submission.name}</h3>
            <p>{submission.age} Years Old</p>
            <p>{submission.contactNumber}</p>
            <h4>Favorites</h4>
            <p>{submission.favoriteColor}</p>
            <p>{submission.favoriteFood}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;