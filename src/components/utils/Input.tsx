
interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    id: string;
    className?: string;
}

function Input( { type, name, placeholder, id, className }: InputProps ) {
    return (
        <div>
            <input type= { type } name={ name } placeholder = { placeholder } id= { id } className= { className || " input " } />
        </div>
    )
}

export default Input