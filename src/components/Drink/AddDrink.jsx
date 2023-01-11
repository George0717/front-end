import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddDrink = () => {
  const [name, setName] = useState('')
  const [harga, setHarga] = useState('')
  const [gambar, setGambar] = useState('')
  const navigate = useNavigate()
  const saveDrink = async(e) => {
    e.preventDefault();
    try{
      await axios.post("https://publiapi.vercel.app/drink", {
        name,
        harga,
        gambar
      })
      navigate('/drink')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='column'>
    <div className="column is-half">
    <form action="" onSubmit={saveDrink}>
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
                    <input type="text" className='input' defaultValue={gambar} onChange={(e) => setGambar(e.target.value)} placeholder='Masukkan Url Gambar' />
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

export default AddDrink