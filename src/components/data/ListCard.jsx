import { rupiahFormatter } from "../../utils/idrFormater";
const ListCard = ({data,deleteData}) => {
    return (
        <>
            <div className='col-md-7'>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h5>Data</h5>
                        <table className='table mt-4'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Judul</th>
                                    <th scope='col'>Jumlah</th>
                                    <th scope='col'>Jenis</th>
                                    <th scope='col'>Tanggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  data.map((item,index)=>{
                                    return (
                                          <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{item.title}</td>
                                            <td>{rupiahFormatter(item.value)}</td>
                                            <td>{item.type === 1? "Pemasukan":"Pengeluaran"}</td>
                                            <td>{item.date.toDateString()}</td>
                                            <td>
                                                <button

                                                  onClick={() => deleteData(item.code)}
                                                  className='mb-0 btn btn-outline-danger'
                            type="button"
                                                  
                                                >
                                                  Hapus Data
                                               </button>
                                            </td>
                                          </tr>
                                    )
                                  })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListCard;
