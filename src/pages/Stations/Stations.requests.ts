const BASE_URL = 'https://localhost:44382/EdicionVec';

export const fetchStations = async (linea: number, tipo: string) => {
  try {
    const estaciones = await (
      await fetch(`${BASE_URL}/getEstaciones?linea=${linea}&tipo=${tipo}`)
    ).json();
    return estaciones as { mensaje: string; estaciones: any[] };
  } catch (e) {
    console.log(e);
    return { mensaje: 'Error de conexión', estaciones: [] };
  }
};

export const fetchLineas = async (idUsuario: number) => {
  try {
    const lineas = await (
      await fetch(`${BASE_URL}/getLineas?id=${idUsuario}`)
    ).json();
    return lineas as { mensaje: string; filtros: any[] };
  } catch (e) {
    console.log(e);
    return { mensaje: 'Error de conexión', filtros: [] };
  }
};

export const fetchEstacionSub = async (usr: number, comp: number) => {
  const estaciones = await (
    await fetch(`${BASE_URL}/getSub?id=${usr}&componente=${comp}`)
  ).json();
  return estaciones as { mensaje: string; estaciones: any[] };
};
