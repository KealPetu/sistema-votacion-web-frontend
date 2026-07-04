import AdminLayout from '../../components/templates/AdminLayout';
import PlainField from '../../components/molecules/PlainField';

const votante = {
  idUsuario: 1,
  nombre: 'Ana Pérez',
  correoElectronico: 'ana.perez@example.com',
};

export default function ModificacionVotantePage() {
  return (
    <AdminLayout>
      <h2>Modificar Votante</h2>

      <form>
        <input type="hidden" name="idUsuario" value={votante.idUsuario} readOnly />
        <PlainField label="Nombre:" name="nombre" type="text" defaultValue={votante.nombre} required />
        <PlainField label="Correo electrónico:" name="correo" type="email" defaultValue={votante.correoElectronico} required />
        <PlainField label="Contraseña:" name="contrasena" type="password" required />

        <button type="submit">Guardar</button>
        <a href="#">Cancelar</a>
      </form>
    </AdminLayout>
  );
}
