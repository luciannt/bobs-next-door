import React, { useState } from "react";

function NewStoreForm({ handleAddStore }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    season: "",
    episode: "",
    episodeUrl: "",
    url: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddStore(formData);

    setFormData({
      name: "",
      image: "",
      season: "",
      episode: "",
      episodeUrl: "",
      url: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Store Name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="text"
        id="image"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        value={formData.image}
      />
      <input
        type="number"
        id="season"
        name="season"
        placeholder="Season"
        step="1"
        onChange={handleChange}
        value={formData.season}
      />
      <input
        type="number"
        id="episode"
        name="episode"
        placeholder="Episode"
        step="1"
        onChange={handleChange}
        value={formData.episode}
      />
      <button type="submit">Add Store</button>
    </form>
  );
}

export default NewStoreForm;
