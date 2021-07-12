import React, {useState} from "react";


const Form = props => {
    
    const{setLoggedBox, loggedBox} = props
    
    const [inputs, setInputs] = useState({
        color : "",
        height: "",
        width: ""
    })

    const onChange = e =>{
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()
        setLoggedBox([...loggedBox, inputs])
        setInputs({
            color : "",
            height : "",
            width: ""
        })
    }

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Color:</label>
                <input type="text" name="color" onChange = {onChange}/>
                <label>Height:</label>
                <input type="text" name="height" onChange = {onChange}/>
                <label>Width:</label>
                <input type="text" name="width" onChange = {onChange}/>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form