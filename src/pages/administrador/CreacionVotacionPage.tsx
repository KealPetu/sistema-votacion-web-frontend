import AdminLayout from '../../components/templates/AdminLayout';

export default function CreacionVotacionPage() {
  return (
    <AdminLayout>
      <h2>Nueva Votación</h2>

      <form>
        <label>Título:</label>
        <input type="text" name="titulo" required />
        <br />

        <label>Descripción:</label>
        <textarea name="descripcion" required />
        <br />

        <label>Fecha de inicio:</label>
        <input type="date" name="fechaInicio" required />
        <br />

        <label>Fecha de cierre:</label>
        <input type="date" name="fechaCierre" required />
        <br />

        <button type="submit">Guardar</button>
        <a href="#">Cancelar</a>
      </form>
    </AdminLayout>
  );
}
