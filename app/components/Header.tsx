export default function Header() {
    return (
        <header className="text-center text-black py-8 border-b border-[#4d4d4d] md:flex items-center justify-between" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 style={{ fontSize: '1.5em', fontWeight: 'bold' }}></h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="/admin/computer" style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>
                    Listar Computadores
                </a>
                <a className="hover:text-[#00e77f]" href="/admin/computer/new" style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>
                    Cadastrar novo Computador
                </a>
            </nav>
        </header>
    )
}
