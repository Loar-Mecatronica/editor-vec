const BASE_URL = 'https://localhost:44382/EdicionVec';
export const fetchStations = async (linea: number, tipo: string) => {
  const estaciones = await (
    await fetch(`${BASE_URL}/getEstaciones?linea=${linea}&tipo=${tipo}`)
  ).json();
  return estaciones as { mensaje: string; estaciones: any[] };
};

export const fetchLineas = async (idUsuario: number) => {
  const lineas = await (
    await fetch(`${BASE_URL}/getLineas?id=${idUsuario}`)
  ).json();
  return lineas as { mensaje: string; filtros: any[] };
};

export const fetchEstacionSub = async (usr: number, comp: number) => {
  const estaciones = await (
    await fetch(`${BASE_URL}/getSub?id=${usr}&componente=${comp}`)
  ).json();
  return estaciones as { mensaje: string; estaciones: any[] };
};
