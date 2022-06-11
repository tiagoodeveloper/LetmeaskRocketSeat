import ilustrationImg from '../assets/images/illustration.svg';
import { FormEvent, useState } from 'react';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Link, useHistory } from "react-router-dom";
import "../styles/auth.scss";
import { Button } from '../components/button';
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { join } from 'path';
// importacao imagem webpack usado pelo create react app por module bundle



export function NewRoom(){
    const { user } = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();

        if(newRoom.trim() == ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const fireBaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        history.push(`/rooms/${fireBaseRoom.key}`);

    }

    

    
    return(
    <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas."></img>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
                <main>
                    <div className='main-content'>
                        <img src={logoImg} alt="Letmeask"></img>
                        <h1>{user?.name}</h1>
                       <h2>Criar uma nova sala</h2>
                        <form onSubmit={handleCreateRoom}>
                            <input 
                            type="text"
                            placeholder='Nome da sala'
                            onChange={event => setNewRoom(event.target.value)} />
                            <Button 
                                
                                type='submit'>Criar sala</Button>
                            
                            <p>
                                Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                            </p>
                        </form>
                       
                    </div>
                </main>
            
        </div>
    )
    
}