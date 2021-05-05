import React from 'react';
import { Title, Form, Repositories } from './styles';
import Logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={Logo} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/42696272?s=400&u=7f8e3d4603e1290ec526703adcb9e3a63451a564&v=4"
                        alt="Felipe Rodrigues">
                    </img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy ReactJS Forms</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/42696272?s=400&u=7f8e3d4603e1290ec526703adcb9e3a63451a564&v=4"
                        alt="Felipe Rodrigues">
                    </img>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy ReactJS Forms</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;