import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddDessert = () => {
  const [name, setName] = useState('')
  const [harga, setHarga] = useState('')
  const [gambar, setGambar] = useState('')
  const navigate = useNavigate()
  const saveFood = async(e) => {
    e.preventDefault();
    try{
      await axios.post("https://publiapi.vercel.app/dessert", {
        name,
        harga,
        gambar
      })
      navigate('/dessert')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='column'>
    <div className="column is-half">
    <form action="" onSubmit={saveFood}>
    {/* Nama */}
        <div className="field">
        <label htmlFor="" className="label"></label>
        <div className="control">
        <input type="text" className='input' defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
        </div>
        </div>
        {/* Harga */}
        <div className="field">
        <label htmlFor="" className="label"></label>
            <div className="control">
                <input type="text" className='input' defaultValue={harga} onChange={(e) => setHarga(e.target.value)} placeholder='harga' />
            </div>
        </div>
        {/* Gambar */}
        <div className="field">
             <label htmlFor="" className="label"></label>
                <div className="control">
                    <input type="text" className='input' defaultValue={gambar} onChange={(e) => setGambar(e.target.value)} placeholder='gambar' />
                 </div>
        </div>
        {/* Button */}
        <div className="field">
                <div className="control">
                  <button className='button is-success' type='submit'>Save</button>
                 </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default AddDessert