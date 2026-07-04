import AdminLayout from '../../components/templates/AdminLayout';

const votaciones = [
  {
    idVotacion: 1,
    titulo: 'Elección Presidencial 2026',
    descripcion: 'Segunda vuelta electoral',
    fechaInicio: '2026-08-01',
    fechaCierre: '2026-08-15',
  },
  {
    idVotacion: 2,
    titulo: 'Consulta Popular - Reforma Constitucional',
    descripcion: 'Consulta nacional',
    fechaInicio: '2026-09-01',
    fechaCierre: '2026-09-10',
  },
];

export default function ListaVotacionesPage() {
  return (
    <AdminLayout welcomeName="Admin">
      <h2>Gestión de Votaciones</h2>

      <a href="#">Nueva Votación</a>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha Inicio</th>
            <th>Fecha Cierre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {votaciones.map((votacion) => (
            <tr key={votacion.idVotacion}>
              <td>{votacion.idVotacion}</td>
              <td>{votacion.titulo}</td>
              <td>{votacion.descripcion}</td>
              <td>{votacion.fechaInicio}</td>
              <td>{votacion.fechaCierre}</td>
              <td>
                <a href="#">Editar</a> <a href="#">Eliminar</a> <a href="#">Ver Resultados</a>{' '}
                <a href="#">Asignar Votantes</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
