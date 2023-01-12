import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FoodList = () => {
    const [data, setData] = useState(null)
    const [fetch, setFetch] = useState(true)

    useEffect(() => {
        if(fetch === true){
            axios.get('https://publiapi.vercel.app/food' )
        .then(res => {
            console.log(res);
            setData(res.data.menuResto.data)
        }).catch(error => {
            console.log(error);
            
        })
        setFetch(false)
        }
        

    }, [fetch, setFetch])

const deleteFood = async (id) => {
    axios.delete(`https://publiapi.vercel.app/food/${id}`)
    .then(res => {
        console.log(res);
        setFetch(true)
    })

    

}

  return (
    <div className='column'>
    <div className='column is half'>
    <Link to='/add' className='button is-success'>Add New</Link>
       <table className='table is-striped is-fullwidth mt-5'> 
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Harga</th>
                <th>Gambar</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {data !== null && data.map((res, index) => {
            return(
            <tr key={res._id}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.harga}</td>
                <td><img src={res.gambar} alt="" width="300px"/></td>
                <td>
                    <button onClick={() => {
                        deleteFood(res._id)
                    }} className='button is-danger is-small'>Delete</button>
                </td>
            </tr>
            )
            
        })}
        </tbody>
           
       </table>
    </div>
    </div>
  )
}

export default FoodList