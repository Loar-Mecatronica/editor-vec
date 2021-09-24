const BASE_URL = 'https://localhost:44382/EdicionVec';
export const fetchLineas = async (idUsuario: number) => {
  const lineas = await (
    await fetch(`${BASE_URL}/getLineas?id=${idUsuario}`)
  ).json();
  return lineas as { mensaje: string; filtros: any[] };
};

export const fetchComponentes = async (idUsuario: number, idLinea: number) => {
  const componentes = await (
    await fetch(`${BASE_URL}/getComponentes?id=${idUsuario}&idlinea=${idLinea}`)
  ).json();
  return componentes;
};
