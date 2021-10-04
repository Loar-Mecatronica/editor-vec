const BASE_URL = 'https://localhost:44382/EdicionVec';
export const fetchLineas = async (idUsuario: number) => {
  return (await (
    await fetch(`${BASE_URL}/getLineas?id=${idUsuario}`)
  ).json()) as { mensaje: string; filtros: any[] };
};

export const fetchComponentes = async (idUsuario: number, idLinea: number) => {
  try {
    return await (
      await fetch(
        `${BASE_URL}/getComponentes?id=${idUsuario}&idlinea=${idLinea}`
      )
    ).json();
  } catch (e) {
    console.log(e);
    return { mensaje: 'Error de conexión', filtros: [] };
  }
};

export const fetchSubEstacion = async (
  idComponente: number,
  idLinea: number
) => {
  try {
    return (await (
      await fetch(
        `${BASE_URL}/getSubEstacion?idComponente=${idComponente}&idLinea=${idLinea}`
      )
    ).json()) as { mensaje: string; filtros: any[] };
  } catch (e) {
    console.log(e);
    return { mensaje: 'Error de conexión', filtros: [] };
  }
};

export const setEstation = async (body: any) => {
  return await (
    await fetch(`${BASE_URL}/setEstacion`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(body),
    })
  ).json();
};

export const setComponent = async (
  idLinea: number,
  nombre: string,
  idUsuario: number
) => {
  return await (
    await fetch(
      `${BASE_URL}/setComponente?idlinea=${idLinea}&nombre=${nombre}&idUsuario=${idUsuario}`
    )
  ).json();
};
