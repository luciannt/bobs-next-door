import "./App.css";
import Search from "./components/Search";
import NewStoreForm from "./components/NewStoreForm";
import StoreList from "./components/StoreList";
import { useState, useEffect } from "react";

function App() {
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  function handleAddStore(newStore) {
    const { name, image, season, episode, episodeUrl, url } = newStore;

    const newStoreBody = {
      name,
      image,
      episode: parseInt(episode),
      season: parseInt(season),
      episodeUrl,
      url,
    };

    console.log(newStoreBody);

    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStoreBody),
    })
      .then((res) => res.json())
      .then((data) => setStores([...stores, data]));
  }

  const filteredStores = stores.filter((store) => {
    return store?.name?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" alt="" />
      <h1>Neighbor Stores</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewStoreForm handleAddStore={handleAddStore} />
      <StoreList stores={filteredStores} />
    </div>
  );
}

export default App;
