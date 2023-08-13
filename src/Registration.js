import React, { useState,useMemo} from 'react';
import './App.css'

const App = () => {

    var data = {name:'',email:'', mobile:'' }
    const [formData,setFormData] = useState(data)
    function submitFormData(e){
        e.preventDefault()
        console.log("formData",formData)
    }
    function onChangeData(event){
        const {name,value} = event.target
        console.log(name,value)
        setFormData((e) => ({...e, [name]:value  }))
    }
  
    return <div className='App'>
            <h1> Registration Form </h1>
            <form onSubmit={ submitFormData }>
                <table className='center'>
                    <tbody>
                        <tr>
                            <td> Name </td>
                            <td> <input type="text" name="name" value={ formData.name } onChange={onChangeData} /> </td>
                        </tr>
                        <tr>
                            <td> Email </td>
                            <td> <input type="text" name="email" value={ formData.email }  onChange={onChangeData} /> </td>
                        </tr>
                        <tr>
                            <td> Mobile Number </td>
                            <td> <input type="text" name="mobile"  onChange={onChangeData} value={ formData.mobile }  /> </td>
                        </tr>
                        <tr>
                            <td>  </td>
                            <td> <button type="submit"> submit </button> </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
}

export default App