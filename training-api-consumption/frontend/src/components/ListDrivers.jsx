import { useEffect, useState } from "react";

export default function ListDrivers() {
  const [listDrivers, setListDrivers] = useState([]);

  const fetchListDrivers = async () => {
    try {
      const response = await fetch("http://localhost:3000/drivers");
      if (!response.ok) throw new Error("Erro ao buscar motoristas");
      const data = await response.json();
      setListDrivers(data);
    } catch (err) {
      console.error("Erro na API:", err);
    }
  };

  useEffect(() => {
    fetchListDrivers();
  }, []);

  return (
    <div>
      <h2>Lista de motoristas:</h2>
      <ul>
        {listDrivers.slice(0, 50).map((driver, index) => (
          <li key={index}>
            <ul>{driver.name_acronym} - {driver.full_name}</ul>
            <ul>{driver.team_name}</ul>
            <ul>{driver.session_key}</ul>
            <ul>{driver.team_colour}</ul>
            <img 
              src = {driver.headshot_url}
              alt = {`Photo: ${driver.full_name}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
