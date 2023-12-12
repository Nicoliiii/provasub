import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
export const revalidate =0

export default async function ListComputer() {
    async function deleteComputer(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from computer where id=${id}`
        revalidatePath("./admin/computer/new")
    }
    const { rows } = await sql`SELECT * from computer`;
    return (
        <div>
            <h1 className="text-center text-black">Lista de Computadores</h1>

            <table>
                <thead>
                    <tr> <td>Marca do Computador</td> <td>Modelo do Computador</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((computer) => {
                            return (
                                <tr key={computer.id}><td>{computer.brand}</td> <td>{computer.model}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={computer.id}/>   
                                    <button formAction={deleteComputer}>Excluir</button>
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
