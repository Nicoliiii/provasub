import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate = 0

export default function NewComputer() {
    async function saveComputer(formData: FormData){
        "use server"
        const brand = formData.get("brand") as string;
        const model = formData.get("model") as string;
        console.log("brand, model")

        await sql`INSERT INTO computer (brand, model) VALUES(${brand}, ${model})`
        console.log("Acessou função")
    }

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
            <h1 className="text-center text-black" style={{ color: '#343a40', marginBottom: '20px' }}>
                Cadastrar Computador
            </h1>
            <form>
                <input type="text" name="brand" placeholder="Marca do computador" style={{ display: 'block', padding: '10px', marginBottom: '10px' }}/>
                <input type="text" name="model" placeholder="Modelo do computador" style={{ display: 'block', padding: '10px', marginBottom: '10px' }}/>
                <button formAction={saveComputer} className="text-black" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer', padding: '10px 20px' }}>
                    Salvar
                </button>
            </form>
        </div>
    )
}
