import { useState } from "react";


const AddCard = ({addData}) => {
    const types = [
        {
            value: 1,
            text: "Pemasukan",
        },
        {
            value: 2,
            text: "Pengeluaran",
        },
    ];

    const submitForm = (e) => {
        e.preventDefault();
        setError(false)
        if(title === "" || value === 0){
          setError(true)
        }
        else{
          const inputValue = {
            title : title,
            value : parseInt(value),
            type  : type
          }
          addData(inputValue)
          cleaningData()
        }
    
    };

    const cleaningData =()=>{
      setTitle("")
      setValue(0)
      setType(1)
    }
    
    //inputan data
    const [title,setTitle] = useState("")
    const [value,setValue] = useState(0)
    const [type,setType] = useState(1)
    
    //validasi
    const [error,setError] = useState(false)

  
    return (
        <>
            <div className='col-md-5'>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h5>Tambah Transaksi</h5>
                        <form className='mt-4' onSubmit={submitForm}>
                            <div className='mb-3'>
                                <label
                                    htmlFor='inputTitle'
                                    className='form-label'>
                                    Judul
                                </label>
                                <input
                                    type='text'
                                    className={`form-control ${error?'is-invalid':''}`}
                                    id='inputTitle'
                                    onChange={e=>setTitle(e.target.value.trimStart())} 
                                    value={title} 
                                />
                                {
                                  title===""?(<div className="invalid-feedback">Wajib Diisi</div>):""
                                }
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='inputType'
                                    className='form-label'>
                                    Tipe
                                </label>
                                <select

                                   className='form-select'

                                   aria-label='inputType'

                                   value={type}

                                   onChange={(e) =>

                                       setType(Number(e.target.value))

                                   }>

                                   {types.map((item, index) => (

                                       <option key={index} value={item.value}>

                                           {item.text}

                                       </option>

                                   ))}

                               </select>
                          
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='inputNominal'
                                    className='form-label'>
                                    Nominal
                                </label>
                                <input
                                    type='number'
                                    className='form-control'
                                    id='inputNominal'
                                    onChange={e=>setValue(e.target.value)}
                                    value={value}
                                />
                            </div>
                          <button className='btn btn-primary' type='submit'>
                               Simpan Transaksi
                          </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );  
};

export default AddCard;
