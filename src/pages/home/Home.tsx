function Home() {
    return (
        /*Essa é o container*/
        <div
           
            className = "bg-indigo-900 flex justify-center"
        >
            {/*Grid que divide a tela em 2 colunas*/}
            <div
               
                className="container grid grid-cols-2 text-white"
            >
                {/*Essa é minha coluna da esquerda*/}
                <div
                   
                    className="flex flex-col gap-4 items-center justify-center py-4"
 
                >
 
                    <h2
                        className="text-5xl font-bold"
                   
                    >Seja bem Vinde!</h2>
                    <p
                       
                        className="text-xl"    
 
                    >Expresse aqui seus pensamentos e opiniões</p>
 
                    {/*Essa é um link/botao*/}
                    <div
                       
                        className="flex justify-around gap-4"
                    >
                        <div
                           
                            className="rounded text-white border-white border-solid border-2 py-2 px-4"
                        >Nova Postagem</div>
 
 
                    </div>
                </div>
                {/*Essa é minha coluna da direita*/}
                <div
               
                    className="flex justify-center"
 
                >
                    <img src="https://i.imgur.com/fyfri1v.png" 
                    alt="Imagem da página home"
                       
                        className="w-2/3"
                    />
 
                </div>
 
 
            </div>
        </div>
    )
}
 
export default Home