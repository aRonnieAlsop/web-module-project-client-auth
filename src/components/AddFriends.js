import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'

const AddFriend = () => {
    const { push } = useHistory()
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:5000/api/friens', {
            headers: {
                authorization: token
            }
        }, form)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
      <div>
    <h2>AddFriend</h2>
    <form>
        <label htmlFor="username">Username:</label>
        <label htmlFor="age">Age:</label>
        <label htmlFor="email">Email:</label>
    </form>
    </div>)
  }

export default AddFriend