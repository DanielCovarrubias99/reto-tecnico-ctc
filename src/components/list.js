import Item from './item';
import { useState } from 'react';
import './list.css'

function List() {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Limpiar el Parque', description: 'Se limpiara el parque por la mañana, se sugiere llevar escoba.', responsible: 'Maria Garcia Perez', location: 'Parque Alameda', date: '22/11/2024', likes: 0 },
        { id: 2, title: 'Recolección de Basura', description: 'Se recolectará basera de los alrededores, llevar su propia bolsa y utencilios.', responsible: 'Juan Chavez Chavez', location: 'Colonia Echeverria', date: '23/11/2024', likes: 5 },
        { id: 3, title: 'Pintar Paredes', description: 'Se pintaran paredes que se encuentren rayadas.', responsible: 'Pedro Sanchez Aguirre', location: 'Unidad Deportiva Chapultepec', date: '24/11/2024', likes: 2 }
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className='fondo'>
            <section className='list'>
                {tasks.map((task) => (
                    <Item id={task.id}
                        title={task.title}
                        description={task.description}
                        initialLikes={task.likes}
                        responsible={task.responsible}
                        location={task.location}
                        date={task.date}
                        onDelete={() => deleteTask(task.id)}></Item>
                ))}
            </section>
        </div>
    );
}

export default List;