import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditDrink = () => {
  const [name, setName] = useState('')
  const [harga, setHarga] = useState('')
  const [gambar, setGambar] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    getDrinkById()
  }, []);

  const getDrinkById = async() => {
    const response = await axios.get(`https://publiapi.vercel.app/drink/${id}`)
    setName(response.data.name)
    setHarga(response.data.harga)
    setGambar(response.data.gambar)
  }

  const updateDrink = async(e) => {
    e.preventDefault();
    try{
      await axios.put(`https://publiapi.vercel.app/drink/${id}`, {
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
    <form action="" onSubmit={updateDrink}>
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
                  <button className='button is-success' type='submit'>Update</button>
                 </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default EditDrink