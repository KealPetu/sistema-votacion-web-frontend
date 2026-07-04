import AuthLayout from '../../components/templates/AuthLayout';
import AuthCard from '../../components/organisms/AuthCard';
import TextField from '../../components/atoms/TextField';
import PasswordField from '../../components/molecules/PasswordField';
import Button from '../../components/atoms/Button';

export default function RegistroAdminPage() {
  return (
    <AuthLayout showHeader>
      <AuthCard>
        <form className="login-form">
          <TextField name="nombre" placeholder="Nombre Completo" />
          <TextField name="cedula" placeholder="Cédula" maxLength={10} />
          <TextField name="correo" type="email" placeholder="Correo electrónico" />
          <PasswordField name="contrasena" placeholder="Contraseña" />

          <div className="box-large-group">
            <select name="nivelAcceso" className="box-large-input" defaultValue="">
              <option value="">Nivel de acceso</option>
              <option value="SUPER">SUPER Administrador</option>
              <option value="VOTACIONES">Administrador de Votaciones</option>
              <option value="VOTANTES">Administrador de Votantes</option>
            </select>
          </div>

          <TextField name="claveMaestra" type="password" placeholder="Clave de autorización Maestra" />

          <Button type="submit" variant="auth">
            Registrarse
          </Button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
