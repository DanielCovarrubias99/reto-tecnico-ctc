import './form.css'
import FormInput from './formInput';
import FormTextArea from './formTextArea';

function Form({type}) {

    let formTitle = '';
    let buttonText = '';

    if(type === 1){
        formTitle = 'Nueva Tarea';
        buttonText = 'Agregar Tarea';
    }else if(type === 2){
        formTitle = 'Editar Tarea';
        buttonText = 'Guardar Cambios';
    }

    return (
        <div className="background">
            <h2 className='newTask'>{formTitle}</h2>
            <div className='formBackground'>
                <FormInput title='Titulo de la tarea' type='text' placeholder='Ingresa el titulo de tu tarea'></FormInput>
                <FormTextArea title='Descripción de la tarea' type='text' placeholder='Ingresa una descripción breve de la tarea'></FormTextArea>
                <FormInput title='Fecha' type='date'></FormInput>
                <FormInput title='Lugar' type='text' placeholder='Ingresa el lugar donde se realizara la tarea'></FormInput>
                <FormInput title='Responsable' type='text' placeholder='Ingresa el responsable de la tarea'></FormInput>
                <div className='buttonContainer'>
                    <button className='newButton'><i className='fa fa-plus'></i> {buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export default Form;