import React, { useState, useEffect } from 'react'
import axios from 'axios'
import axiosWithAuth from '../../utils/axiosWithAuth'

const FriendsList = () => {
    const [ friends, setFriends] = useState()

    useEffect(() => {
        const token = localStorage.getItem("token")

        axiosWithAuth().get('http://localhost:5000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(resp => {
                setFriends(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
      <div>
    <h2>FriendsList</h2>
    <ul>
        {
                friends.map(friend=> {
                    return <li>{friends.name} - {friend.age} - {friend.email}</li>
                })
        }
    </ul>
    </div>)
  }

  export default FriendsList