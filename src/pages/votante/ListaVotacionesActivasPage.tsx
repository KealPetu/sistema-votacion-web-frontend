import VotanteLayout from '../../components/templates/VotanteLayout';
import ElectionCard from '../../components/molecules/ElectionCard';
import Button from '../../components/atoms/Button';

// Datos de ejemplo — sin funcionalidad real, solo para poblar la vista.
const votacionesActivas = [
  { idVotacion: 1, titulo: 'Elección Presidencial 2026' },
  { idVotacion: 2, titulo: 'Consulta Popular - Reforma Constitucional' },
];

export default function ListaVotacionesActivasPage() {
  return (
    <VotanteLayout>
      <h1 className="page-content__welcome">Votaciones Activas</h1>

      {votacionesActivas.length > 0 ? (
        <ElectionCard>
          {votacionesActivas.map((v) => (
            <div className="card-election__row" key={v.idVotacion}>
              <h3 className="card-election__title">{v.titulo}</h3>
              <Button variant="action" style={{ width: 'auto', padding: '12px 28px' }}>
                Ir a votar
              </Button>
            </div>
          ))}
        </ElectionCard>
      ) : (
        <ElectionCard>
          <p>No tienes votaciones asignadas.</p>
        </ElectionCard>
      )}
    </VotanteLayout>
  );
}
