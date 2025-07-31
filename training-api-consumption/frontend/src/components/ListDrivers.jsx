import { useEffect, useState } from "react";

export default function ListDrivers() {
  const [filtroLivre, setFiltroLivre] = useState("");
  const [listDrivers, setListDrivers] = useState([]);

  const fetchListDrivers = async () => {
    try {
      const response = await fetch("http://localhost:3000/drivers");
      if (!response.ok) throw new Error("Erro ao buscar motoristas");
      const data = await response.json();
      setListDrivers(data);
      console.log('esta trazendo', listDrivers)
    } catch (err) {
      console.error("Erro na API:", err);
    }
  };

  useEffect(() => {
     console.log("Componente montado ✅");
    fetchListDrivers();
  }, []);


const itensFiltrados = listDrivers.filter((item) => {
    const matchTeamName = item.team_name?.toLowerCase().includes(filtroLivre.toLowerCase())
    return matchTeamName;
});
  

  return (
    <div className="bg-white">
      {/* START INPUT FILTRO */}
      <input 
        type = "text"
        placeholder = "Busque pelo nome do time..."
        value = {filtroLivre}
        onChange = {(e) => setFiltroLivre(e.target.value)}
      />
      {/* END  INPUT FILTRO */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Lista de motoristas:
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {itensFiltrados.slice(0, 50).map((driver, index) => (
            <div className="group relative">
              <li key={index}>
                <img
                  src={driver.headshot_url}
                  alt={`Photo: ${driver.full_name}`}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span>
                        {driver.name_acronym} - {driver.full_name}
                      </span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {driver.team_name}
                    </p>
                  </div>
                  <p></p>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
