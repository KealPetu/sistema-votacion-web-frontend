import AuthLayout from '../../components/templates/AuthLayout';
import AuthCard from '../../components/organisms/AuthCard';
import TextField from '../../components/atoms/TextField';
import PasswordField from '../../components/molecules/PasswordField';
import Button from '../../components/atoms/Button';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <form className="login-form">
          <TextField id="cedula" name="cedula" placeholder="1750000000" autoComplete="username" />
          <PasswordField id="contrasena" name="contrasena" placeholder="Contraseña" autoComplete="current-password" />
          <Button type="submit" variant="auth">
            Ingresar al Sistema
          </Button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
