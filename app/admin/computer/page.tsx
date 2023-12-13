import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
export const revalidate = 0

export default async function ListComputer() {
    async function deleteComputer(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from computer where id=${id}`
        revalidatePath("./admin/computer/new")
    }
    const { rows } = await sql`SELECT * from computer`;
    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
            <h1 className="text-center text-black" style={{ color: '#343a40', marginBottom: '20px' }}>
                Lista de Computadores
            </h1>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ddd' }}> 
                        <td style={{ padding: '15px' }}>Marca do Computador</td> 
                        <td style={{ padding: '15px' }}>Modelo do Computador</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((computer) => {
                            return (
                                <tr key={computer.id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{ padding: '15px' }}>{computer.brand}</td> 
                                    <td style={{ padding: '15px' }}>{computer.model}</td> 
                                    <td style={{ padding: '15px' }}>
                                        <form >
                                            <input type="text" hidden name="id" value={computer.id}/>   
                                            <button formAction={deleteComputer} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer', padding: '10px 20px' }}>
                                                Excluir
                                            </button>
                                        </form>
                                    </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
