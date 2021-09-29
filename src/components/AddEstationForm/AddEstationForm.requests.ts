const BASE_URL = 'https://localhost:44382/EdicionVec';
export const fetchLineas = async (idUsuario: number) => {
  return (await (
    await fetch(`${BASE_URL}/getLineas?id=${idUsuario}`)
  ).json()) as { mensaje: string; filtros: any[] };
};

export const fetchComponentes = async (idUsuario: number, idLinea: number) => {
  return await (
    await fetch(`${BASE_URL}/getComponentes?id=${idUsuario}&idlinea=${idLinea}`)
  ).json();
};

export const fetchSubEstacion = async (
  idComponente: number,
  idLinea: number
) => {
  return (await (
    await fetch(
      `${BASE_URL}/getSubEstacion?idComponente=${idComponente}&idLinea=${idLinea}`
    )
  ).json()) as { mensaje: string; filtros: any[] };
};
