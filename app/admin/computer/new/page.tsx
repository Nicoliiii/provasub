import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";


export const revalidate = 0

export default function NewComputer(){ 
  


  async function saveComputer(formData: FormData){
    "use server"
    const brand = formData.get("brand") as string;
    const model = formData.get("model") as string;
    console.log("brand, model")

    await sql`INSERT INTO computer (brand, model) VALUES(${brand}, ${model})`
    console.log("Acessou função")


  }
  return (
    <div>
      <h1 className="text-black text-center text-4xl">Cadastrar Computador</h1>
      <form>
        <input type="text" name="brand" placeholder="Marca do computador" /><br /><br />
        <input type="text" name="model" placeholder="Modelo do computador" /> <br /><br />
        <button formAction={saveComputer} className="text-black">Salvar</button>
        <br />
      </form>
    </div>

  )
}
