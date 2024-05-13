import { rupiahFormatter } from "../utils/idrFormater";
const Recap = ({data}) => {
    let [totalInput,totalOutput] = [0,0]
    data.forEach(item => {
      item.type === 1 ? totalInput += item.value : totalOutput += item.value
    });
    
    const allTotalInput = totalInput
    const allTotalBalance = totalInput - totalOutput
    const allTotalOuput = totalOutput
    return (
        <>
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <div className='card rounded-3 mb-3 bg-success-subtle'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-start'>
                                <div>
                                    <i className='bx bxs-wallet fs-1'></i>
                                </div>

                                <div className='ms-3'>
                                    <h4 className='mb-0'>Total Uang</h4>
                                    <p className='mb-0'>{rupiahFormatter(allTotalBalance)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card rounded-3 mb-3 bg-info-subtle'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-start'>
                                <div>
                                    <i className='bx bxs-map-pin fs-1'></i>
                                </div>

                                <div className='ms-3'>
                                    <h4 className='mb-0'>Pemasukan</h4>
                                    <p className='mb-0'>{rupiahFormatter(allTotalInput)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card rounded-3 mb-3 bg-danger-subtle'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-start'>
                                <div>
                                    <i className='bx bx-diamond fs-1'></i>
                                </div>

                                <div className='ms-3'>
                                    <h4 className='mb-0'>Pengeluaran</h4>
                                    <p className='mb-0'>{rupiahFormatter(allTotalOuput)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recap;
