import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import tela_jogo from '../components/[Jogo]'
import { Flex, Grid, useControllableProp, useControllableState } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'

export default function Tela_inicial() {
    // you need a state and updater to change the value
    const [num_portas, setNum_portas] = useState(0)
    const [porta_premiada, setPorta_premiada] = useState(0)


    /* const [internal_num_portas, setInternalNum_portas] = useControllableState({
      num_portas,
      onChange: setNum_portas,
    })

    const [internal_porta_premiada, setInternal_porta_premiada] = useControllableState({
      porta_premiada,
      onChange: setPorta_premiada,
    }) */



    console.log(num_portas)
    console.log(porta_premiada)
  
    return (
      <div>
        <header>
          <h1>Monty Hall!!!</h1>
        </header>

            <h1>qnt de portas</h1>
            <Button onClick={() => setNum_portas(num_portas + 1)}>+</Button>
            <Box as='span' w='200px' mx='24px'>{num_portas}</Box>
            <Button onClick={() => setNum_portas(num_portas - 1)}>-</Button>

            <h1>Porta Premiada</h1>
            <Button onClick={() => setPorta_premiada(porta_premiada + 1)}>+</Button>
            <Box as='span' w='200px' mx='24px'>{porta_premiada}</Box>
            <Button onClick={() => setPorta_premiada(porta_premiada - 1)}>-</Button>
          <Link href="../components/[Jogo]" as={`../components/${num_portas}`}>iniciar</Link>
      </div>
    )
    /*
      <Link href={`../components/`}><a>iniciar</a></Link>

      {{pathname:"/jogo", query:tela_jogo(num_portas, porta_premiada)}}

    ${num_portas}/${porta_premiada}
    /jogo/${num_portas}/${porta_premiada}
    
    const stilo = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#222",
      Color: "#fff",
      height: "100vh",
    }; */
}