//SPA - SINGLE PAGE APLICATION
/*useEffect(() => {     ///////COMENTS::::  /* parâmetros: {o que eu quero executar}, [quando executar(variavel)],
caso seja necessário executar uma função assim que o componente for exibido em tela (uma unica vez),
basta deixar esse parâmetro vazio.

fetch('http://localhost:3333/episodes') //////////buscando no arquivo
.then(response => response.json()) ///////////convertendo a resposta da busca em um arquivo json
.then(data => console.log(data))

}, []) 

Utilizar essa abordagem faz com que no momento em que o javascript seja desabilitado no navegador
as informações não sejam mais exibidas no console. Isso ocorre pois elas estão sendo exibidas 
no js do navegador. */







//SSR - SERVER SIDE RENDERING

/*
export default function Home(props) {

    console.log(props.episodes)
    return(
      <div>
      <h1>index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
      </div>
    )

}
  
   export async function getServerSideProps(){
 
    const response = await fetch('http://localhost:3333/episodes') //buscando no arquivo
    const data = await response .json()  

   return {
      props: {
        episodes: data,
      }
    }    
} 


//Ao utilizar esta abordagem o conteúdo é exibido na tela mesmo sem o javascript
*/





//SSG - STATIC SIDE GENERATION








import {useEffect} from "react"  /*a função useEffect serve para executar algo na pag
quando algo mudar na aplicação */


export default function Home(props) {

    console.log(props.episodes)
    return(
      <div>
      <h1>index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
      </div>
    )

}
  
   export async function getStaticProps(){
 
    const response = await fetch('http://localhost:3333/episodes') //buscando no arquivo
    const data = await response .json()  

   return {
      props: {
        episodes: data,
      },

    revalidate: 60 * 60 * 8   /*o revalidate serve para definir de quanto em quanto tempo é gerada uma nova
      versão da página. No exemplo a pagina sera atualizada a cada 8hrs, logo 60segs * 60mins(1hr)
      *8hrs(8hrs)*/
    }    
}
