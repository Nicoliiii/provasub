export default function Home() {
  return (
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
          <h1 className='text-center' style={{ color: '#343a40', marginBottom: '20px' }}>
              Avaliação Substitutiva
          </h1>
          <a href="/admin" style={{ display: 'block', color: '#007bff', textDecoration: 'none' }}>
              Listagem ou Novo Cadastro de Computadores
          </a>   
      </div>
  )
}
