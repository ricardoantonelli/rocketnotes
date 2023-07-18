import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
               <li><ButtonText tittle="Todos" /></li> 
               <li><ButtonText tittle="React" /></li> 
               <li><ButtonText tittle="Nodejs" /></li> 
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{ 
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rocketseat'}
                        ]
                    }}                    
                    />
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    );
}