const BASE_URL = 'https://localhost:44382/EdicionVec';
export const fetchEstacion = async (idEstacion: number) => {
  return (await (
    await fetch(`${BASE_URL}/getEstacion?id=${idEstacion}`)
  ).json()) as { mensaje: string; estacion: any };
};
