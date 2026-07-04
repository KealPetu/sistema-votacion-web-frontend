const error = 'Cédula o contraseña incorrectas.';

export default function ErrorLoginPage() {
  return (
    <>
      <nav>
        <h1>VotoSeguro</h1>
      </nav>

      <h2>Error de autenticación</h2>
      <p>{error}</p>

      <a href="#">Regresar</a>
    </>
  );
}
