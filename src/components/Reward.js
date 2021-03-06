import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'
import './Reward.css'
import Navbar from './Navbar'
function Reward() {

    return (
        <>
        <div className='d-flex justify-content-center mt-3'>              
            <div className='w-100 col-10' style={{height: 583}}>
                <Carousel indicators={false}>
                    <Carousel.Item interval={1000} >
                        <div className='d-flex justify-content-center'>
                            <img
                            style={{objectFit:'cover',height: 583}}
                            className="d-block w-100 rounded"
                            src="https://static.mservice.io/blogscontents/momo-upload-api-190607184416-636955298566252142.png"
                            alt="First slide"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000} >
                        <div className='d-flex justify-content-center'>
                            <img
                            style={{objectFit:'cover', height: 583}}
                            className="d-block w-100 rounded"
                            src="https://list.vn/wp-content/uploads/2021/02/Banner-thecoffeehouse-1540x986-11.jpg"
                            alt="Second slide"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000} >
                        <div className='d-flex justify-content-center'>
                            <img
                            style={{objectFit:'cover', height: 583}}
                            className="d-block w-100 rounded"
                            src="https://list.vn/wp-content/uploads/2021/02/hC3ACnh-E1BAA3nh-NhE1BBAFng-quC3A1n-cafe-view-C491E1BAB9p-E1BB9F-VC5A9ng-TC3A0u-lavie.jpg"
                            alt="Third slide"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div style={{backgroundColor: '#ea8025',height:65}} className='mt-5 d-flex justify-content-between align-items-center px-5'>
            <h5 className='mb-0'>GI???I THI???U</h5>
            <h5 className='mb-0'>QUY???N L???I TH??NH VI??N</h5>
            <h5 className='mb-0'>T??CH ??I???M TH??NH VI??N</h5>
            <h5 className='mb-0'>THAM GIA</h5>
            <h5 className='mb-0'>FAQ</h5>
        </div>
        <div className='container d-flex flex-column align-items-center py-5'>
            <div className='col-10'>
                <h3 className='text-center mb-0'>CH????NG TR??NH KH??CH H??NG TH??N THI???T M???I</h3>
                <h3 className='text-center mt-1 mb-0'>THE COFFEE HOUSE REWARDS 3.0</h3>
                <p style={{color:'#474640'}} className='text-center mb-0 mt-4'><em>C??n g?? tuy???t v???i h??n khi ?????n v???i The Coffee House, kh??ng ch??? ????? t???n h?????ng</em></p>
                <p style={{color:'#474640'}} className='text-center mb-0'><em>kh??ng gian v?? th?????ng th???c nh???ng m??n th???c u???ng th??m l???ng, b???n c??n c??</em></p>
                <p style={{color:'#474640'}} className='text-center mb-0'><em>th??? t??ch l??y BEAN ????? th??ng h???ng v?? nh???n ngay nh???ng ?????c quy???n tuy???t v???i</em></p>
                <p style={{color:'#474640'}} className='text-center mb-0'><em>ch??? d??nh ri??ng cho b???n.</em></p>
            </div>
            <div className='col-10 my-4'> 
               <ReactPlayer width='853px' height='400px' controls url='https://www.youtube.com/watch?v=BXMnv80sfGk' />
            </div>
            <div className='row mt-5'>
                <div className='col-4 d-flex-content-center'>
                    <div>
                        <img className='w-100' src='https://file.hstatic.net/1000075078/file/banneuudai-11_b48c093d94954d44a44a5970e21c053a.png' alt='' />
                    </div>
                    <div>
                        <div style={{height: 46}} className='d-flex flex-column align-items-center mt-3'>
                            <h6 className='mb-0'>T??ch BEAN d??? d??ng</h6>
                            <h6>Th??ng h???ng nhanh h??n</h6>
                        </div>
                        <p>M?? h??nh th??ng h???ng th??nh vi??n m???i d??? d??ng h??n</p>
                    </div>
                </div>
                <div className='col-4 d-flex-content-center'>
                    <div>
                        <img className='w-100' src='https://file.hstatic.net/1000075078/file/banneuudai-12_2c4ac1c2123c443f9becbdefa3601253.png' alt='' />
                    </div>
                    <div>
                        <div style={{height: 46}} className='d-flex flex-column align-items-center mt-3'>
                            <h6>C???a h??ng ??u ????i</h6>
                        </div>
                        <p className='text-center'>Tho???i m??i ?????i BEAN ????? nh???n nhi???u ph???n qu?? c???c h???p d???n!</p>
                    </div>
                </div>
                <div className='col-4 d-flex-content-center'>
                    <div>
                        <img className='w-100' src='https://file.hstatic.net/1000075078/file/uudau3-01_8d653a254235408d9dbc06aefe6234ee.jpg' alt='' />
                    </div>
                    <div>
                        <div style={{height: 46}} className='d-flex flex-column align-items-center mt-3'>
                            <h6>?????c quy???n Kim C????ng</h6>
                        </div>
                        <p className='text-center'>T???n h?????ng c??c ?????c quy???n ch??? d??nh ri??ng cho th??nh vi??n Kim C????ng</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center my-4'>
                <button style={{backgroundColor:'#ea8025',width: 154, height: 47,fontSize: 13}} className='btn text-white'>THAM GIA NGAY</button>
            </div>
        </div>
        <div className='container p-4 d-flex flex-column align-items-center'>
            <div style={{width: 600}}>
                <div className='text-center mb-4'>
                    <h3 className='mb-0'>Th??ng h???ng d??? d??ng</h3>
                    <h3>Quy???n l???i ??a d???ng & h???p d???n</h3>
                </div>
                <div className='text-center'>
                    <p>C?? h???i t??ch BEAN th??ng h???ng v?? ?????i l???y h??ng ng??n ??u ????i c???c h???p d???n t??? The Coffee House v?? c??c ?????i t??c. H??y nhanh ch??ng th??ng l??n h???ng Kim C????ng ????? ???????c h?????ng nh???ng ?????c quy???n th?????ng h???ng ch??? c?? t???i The Coffee House nh??!</p>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='reward_list_rank' >
                <ul className='list-style-none d-flex'>
                    <li className='list-unstyled flex-grow-1 li-1'>
                        <div>
                            <img style={{width: 81}}  src='https://file.hstatic.net/1000075078/file/bean-01_58813161f2b740588a4f7d378c2dad6d.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>TH??NH VI??N M???I</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>0 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-2' >
                        <div>
                            <img style={{width: 81}}  style={{width: 81}}  src='https://file.hstatic.net/1000075078/file/bean-02_7c5a1919e27c4ca7aa1eedf34f1b1d94.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>TH??NH VI??N M???I</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>100 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-3'>
                        <div>
                            <img style={{width: 81}}  src='https://file.hstatic.net/1000075078/file/bean-03_3f5e99d8d7b8478b9e6995774341cd52.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>TH??NH VI??N M???I</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>200 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-4'>
                        <div>
                            <img style={{width: 81}}  src='https://file.hstatic.net/1000075078/file/bean-04_fdcc7f951e9f4bda8a9634da152a5644.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>TH??NH VI??N M???I</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>500 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-5'>
                        <div>
                            <img style={{width: 110 }}  src='https://file.hstatic.net/1000075078/file/bean-05_c90cf6fc5baf430ba23efd48f2362db4.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 20}}>TH??NH VI??N M???I</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 20}}>3000 BEAN</p>
                    </li>
                </ul>
            </div>
            <div className='py-3'>
                <div className='row'>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-04_c6d559d6e70641999dbb0c3395b4d420.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1'>1.5x BEAN</h6>
                        <p className='text-center' style={{fontSize:14}}>???????c nh??n <strong>1.5 s??? BEAN</strong> t??ch l??y (10.000?? = 9 beans) T??ch BEAN nhi???u h??n, c?? h???i nh???n th??m quy???n l???i v?? ??u ????i nhi???u h??n</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-01_012ddb675e474b6e86cf443b4a440250.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1'>T???ng 1 ph???n b??nh nh??n ng??y sinh nh???t</h6>
                        <p className='text-center' style={{fontSize:14}}>Mi???n ph?? 1 ph???n b??nh ng???t b???t k??? t???i The Coffee House trong th??ng sinh nh???t c???a b???n</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-01_012ddb675e474b6e86cf443b4a440250.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1'>?????i qu?? trong C???a H??ng ??u ????i</h6>
                        <p className='text-center' style={{fontSize:14}}>V???i s??? BEAN t??ch lu??? ???????c, b???n c?? th??? ?????i qu?? y??u th??ch t???i C???a H??ng ??u ????i(*) ?????c quy???n ?????i v?? nh???n nh???ng ??u ????i d??nh ri??ng cho th??nh vi??n Kim C????ng</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-09_94378e3e861546cf84852317858bd019.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1'>Mi???n ph?? m???t ph???n n?????c b???t k???</h6>
                        <p className='text-center' style={{fontSize:14}}>Th?????ng th???c mi???n ph?? 1 ly n?????c y??u th??ch</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-06_e9dae95edb9f4a179b7b1d7767a2b090.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1 text-center'>Nh???n ??u ????i ?????c bi???t t??? The Coffee House v?? c??c ?????i t??c kh??c</h6>
                        <p className='text-center' style={{fontSize:14}}>?????c quy???n nh???n nh???ng ??u ????i ?????c bi???t d??nh ri??ng cho th??nh vi??n Kim C????ng.</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-07_874507ed2c6944c19232d000716b9bf0.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1 text-center'>C?? h???i tr???i nghi???m v?? h?????ng ?????c quy???n ?????u ti??n</h6>
                        <p className='text-center' style={{fontSize:14}}>Tr??? th??nh m???t trong nh???ng ng?????i ?????u ti??n tham gia c??c ch????ng tr??nh, s??? ki???n ?????c bi???t, c??c tr???i nghi???m, s???n ph???m m???i c???a The Coffee House</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container p-4'>
            <div className='row d-flex justify-content-center'>
                <div className='text-center col-8 mb-5'>
                    <h3>BEAN t??ch lu??? v?? h???n</h3>
                    <h3>T??ch c??ng nhi???u, ??u ????i c??ng nhi???u</h3>
                    <p className='my-4'><em>V???i ch??nh s??ch t??ch ??i???m m???i, s??? BEAN t??ch l??y ???????c kh??ng ch??? d??ng ????? x??t h???ng th??nh vi??n, m?? c??n d??ng ????? <strong>?????i ??u ????i</strong> ??a d???ng v?? h???p d???n h??n t???i <strong>C???a H??ng ??u ????i</strong> c???a The Coffee House.Gi??? ????y, b???n c?? th??? th???a th??ch t??ch BEAN c??ng nhi???u, ????? nh???n ??u ????i c??ng nhi???u.</em></p>
                    <button style={{width: 153, height: 48, borderColor:'#ed8626',color:'#ed8626'}} className='btn reward_new_points'>
                        <p className='mb-0'>T??M HI???U TH??M</p>
                    </button>
                </div>
                <div className='row justify-content-center py-5 mt-5'>
                    <div className='col-8 text-center mb-4'>
                        <h3 className='mb-3'>H?????ng d???n tr??? th??nh th??nh vi??n The Coffee House</h3>
                        <p><em>Kh??ng ch??? d???ng l???i ??? th?????ng th???c, v???i ch??nh s??ch t??ch ??i???m m???i t???i phi??n b???n The Coffee House reward 3.0, b???n c??n c?? th??? t??ch BEAN d??? d??ng ????? th??ng h???ng nhanh ch??ng v?? ?????i l???y h??ng ng??n ??u ????i c???c k?? h???p d???n ch??? c?? t???i The Coffee House.</em></p>
                    </div>
                    <div className='col-12 d-flex'>
                        <div className='col-6 d-flex align-items-center'>
                            <div className='col-10 text-center ml-5'>
                                <img style={{width: 244, height: 454}} src='https://file.hstatic.net/1000075078/file/app3_9a9c6539c8d74c44a66281fbf358a8c9.png' alt='' />
                            </div>
                        </div>
                        <div className='col-6 d-flex align-items-center'>
                            <div className='col-10 d-flex flex-column p-0'>
                                <div style={{paddingLeft: 80}} className='position-relative my-3'>
                                    <div className='list_howto_reward list_howto_reward_1 '>
                                        <h6>1</h6>
                                    </div>
                                    <h6 style={{fontSize: 13}}>B?????C 1</h6>
                                    <p>T???i ???ng d???ng <strong style={{color:'#ed8626'}}>The Coffee House</strong> tr??n Appstore ho???c CH Play.<em>N???u b???n ??ang s??? d???ng phi??n b???n c?? h??n c???a ???ng d???ng The Coffee House, vui l??ng c???p nh???t phi??n b???n m???i nh???t.</em></p>
                                    <div className='d-flex'>
                                        <img src='https://file.hstatic.net/1000075078/file/logo_tch_2x_9e1ac55cefad4392bb189dab7f70c094.png' alt='' />
                                        <div className='d-flex flex-column ml-3'>
                                            <img src='https://file.hstatic.net/1000075078/file/appstore_2x_6d3b7d8fbbac4c789c50ad0e620ff200.png' alt='' />
                                            <img src='https://file.hstatic.net/1000075078/file/google_2x_46d92ca54ac3426cb1f55131e4f641f8.png' alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div style={{paddingLeft: 80}} className='position-relative my-3'>
                                    <div className='list_howto_reward list_howto_reward_2 '>
                                        <h6>2</h6>
                                    </div>
                                    <h6 style={{fontSize: 13}}>B?????C 2</h6>
                                    <p>Ch???n m???c <strong style={{color:'#ed8626'}}>T??i kho???n</strong>??? g??c m??n h??nh. Sau ????, ch???n <strong style={{color:'#ed8626'}}>The Coffee House Rewards</strong></p>
                                </div>
                                <div style={{paddingLeft: 80}} className='position-relative my-2'>
                                    <div className='list_howto_reward list_howto_reward_3' style={{backgroundColor:'#ed8626'}}>
                                        <h6>3</h6>
                                    </div>
                                    <h6 style={{fontSize: 13}}>B?????C 3</h6>
                                    <p>Tho???i m??i kh??m ph?? chi ti???t c??c <strong style={{color:'#ed8626'}}>ch????ng tr??nh ??u ????i</strong>d??nh ri??ng cho th??nh vi??n The Coffee House,<strong style={{color:'#ed8626'}}>s??? BEAN ???? t??ch l??y</strong> v?? <strong style={{color:'#ed8626'}}>nh???ng ??i???u th?? v??? kh??c</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12'>
                    <h5 className='pb-4 border-bottom border-dark text-center'>Nh???ng c??u h???i th?????ng g???p</h5>
                    <h5 className='my-3'>C???A H??NG ??U ????I</h5>
                    <div className='my-4 row'>
                        <div className='col-6'>
                            <div className='col-12'>
                                <img className='w-100' style={{objectFit:'cover'}} src='https://file.hstatic.net/1000075078/file/q_a_rewardstore_4x6_22494496c8ac4068bc6e28d834aa7e65_master.jpg' alt='' />
                            </div>
                        </div>
                        <div className='col-6 d-flex align-items-center'>
                            <div className='col-12' >
                                <p style={{color: '#ed8626',fontWeight: 500,fontSize:15}} className='mb-0'>1. L??m sao ????? ?????i ??u ????i trong "C???a h??ng ??u ????i"?</p>
                                <p style={{fontSize:14}} className='mb-2'>Kh??ch h??ng c???n t??ch l??y BEAN ????? c?? th??? ?????i ???????c c??c ??u ????i. BEAN c?? th??? t??ch l??y th??ng qua mua h??ng ho???c qua c??c s??? ki???n, ch????ng tr??nh khuy???n m??i t??? The Coffee House.</p>
                                <p style={{color: '#ed8626',fontWeight: 500,fontSize:15}} className='mb-0'>2. T???i sao t??i kh??ng ???????c ?????i c??c ??u ????i ?????c bi???t (special rewards) ho???c ??u ????i ?????c quy???n (exclusive rewards)?</p>
                                <p style={{fontSize:14}} className='mb-0'>T??y theo h???ng th??nh vi??n c???a kh??ch h??ng m?? h??? c?? th??? ?????i ??u ????i t????ng ???ng. ??u ????i ?????c bi???t d??nh cho nh??m kh??ch h??ng th??nh vi??n h???ng V??ng tr??? l??n, v?? ph???i l?? kim c????ng tr??? l??n cho c??c ??u ????i ?????c quy???n.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{borderWidth: 4}} className='border_reward border-dark border-bottom'></div>
                    <h6 className='my-3'>CHUY???N ?????I M?? H??NH</h6>
                    <div style={{borderWidth: 4}} className='border_reward border-dark border-bottom'></div>
                    <h6 className='my-3'>QUY???N L???I TH??NH VI??N</h6>
                    <div style={{borderWidth: 4}} className='border_reward border-dark border-bottom'></div>
                    <h6 className='my-3'>H???NG TH??NH VI??N</h6>
                    <div style={{borderWidth: 4}} className='border-dark border-bottom'></div>
                    <div className='text-center my-4'>
                        <button style={{fontSize: 12,width: 130, height: 46, backgroundColor:'#ed8626'}} className='btn text-white shadow-none'>XEM TH??M</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Reward
