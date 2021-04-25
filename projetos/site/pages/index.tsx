import styled from 'styled-components';
import { UIProvider } from '@joseallef/ui/src/theme/UIProvider';
import Button from '@joseallef/ui/src/components/Button'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <UIProvider>
      <div>
        <Button disabled>
          Component que veio da lib
        </Button>
        {/* <Button>
          Adicionando children onde estamos usando o componente
        </Button> */}
        <Title>My page so para testes com libs de componentes local</Title>
      </div>
    </UIProvider>
  )
}
