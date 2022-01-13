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
            <h5 className='mb-0'>GIỚI THIỆU</h5>
            <h5 className='mb-0'>QUYỀN LỢI THÀNH VIÊN</h5>
            <h5 className='mb-0'>TÍCH ĐIỂM THÀNH VIÊN</h5>
            <h5 className='mb-0'>THAM GIA</h5>
            <h5 className='mb-0'>FAQ</h5>
        </div>
        <div className='container d-flex flex-column align-items-center py-5'>
            <div className='col-10'>
                <h4 className='text-center mb-0'>CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT MỚI</h4>
                <h4 className='text-center mt-1 mb-0'>THE COFFEE HOUSE REWARDS 3.0</h4>
                <p style={{color:'#474640'}} className='text-center mb-0 mt-4'><em>Còn gì tuyệt vời hơn khi đến với The Coffee House, không chỉ để tận hưởng</em></p>
                <p style={{color:'#474640'}} className='text-center mb-0'><em>không gian và thưởng thức những món thức uống thơm lừng, bạn còn có</em></p>
                <p style={{color:'#474640'}} className='text-center mb-0'><em>thể tích lũy BEAN để thăng hạng và nhận ngay những đặc quyền tuyệt vời</em></p>
                <p style={{color:'#474640'}} className='text-center mb-0'><em>chỉ dành riêng cho bạn.</em></p>
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
                            <h6 className='mb-0'>Tích BEAN dễ dàng</h6>
                            <h6>Thăng hạng nhanh hơn</h6>
                        </div>
                        <p>Mô hình thăng hạng thành viên mới dễ dàng hơn</p>
                    </div>
                </div>
                <div className='col-4 d-flex-content-center'>
                    <div>
                        <img className='w-100' src='https://file.hstatic.net/1000075078/file/banneuudai-12_2c4ac1c2123c443f9becbdefa3601253.png' alt='' />
                    </div>
                    <div>
                        <div style={{height: 46}} className='d-flex flex-column align-items-center mt-3'>
                            <h6>Cửa hàng ưu đãi</h6>
                        </div>
                        <p className='text-center'>Thoải mái đổi BEAN để nhận nhiều phần quà cực hấp dẫn!</p>
                    </div>
                </div>
                <div className='col-4 d-flex-content-center'>
                    <div>
                        <img className='w-100' src='https://file.hstatic.net/1000075078/file/uudau3-01_8d653a254235408d9dbc06aefe6234ee.jpg' alt='' />
                    </div>
                    <div>
                        <div style={{height: 46}} className='d-flex flex-column align-items-center mt-3'>
                            <h6>Đặc quyền Kim Cương</h6>
                        </div>
                        <p className='text-center'>Tận hưởng các đặc quyền chỉ dành riêng cho thành viên Kim Cương</p>
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
                    <h4 className='mb-0'>Thăng hạng dễ dàng</h4>
                    <h4>Quyền lợi đa dạng & hấp dẫn</h4>
                </div>
                <div className='text-center'>
                    <p>Cơ hội tích BEAN thăng hạng và đổi lấy hàng ngàn ưu đãi cực hấp dẫn từ The Coffee House và các đối tác. Hãy nhanh chóng thăng lên hạng Kim Cương để được hưởng những đặc quyền thượng hạng chỉ có tại The Coffee House nhé!</p>
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
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>THÀNH VIÊN MỚI</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>0 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-2' >
                        <div>
                            <img style={{width: 81}}  style={{width: 81}}  src='https://file.hstatic.net/1000075078/file/bean-02_7c5a1919e27c4ca7aa1eedf34f1b1d94.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>THÀNH VIÊN MỚI</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>100 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-3'>
                        <div>
                            <img style={{width: 81}}  src='https://file.hstatic.net/1000075078/file/bean-03_3f5e99d8d7b8478b9e6995774341cd52.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>THÀNH VIÊN MỚI</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>200 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-4'>
                        <div>
                            <img style={{width: 81}}  src='https://file.hstatic.net/1000075078/file/bean-04_fdcc7f951e9f4bda8a9634da152a5644.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 12}}>THÀNH VIÊN MỚI</h6>
                        <p className='text-muted' style={{fontWeight:500,fontSize: 12}}>500 BEAN</p>
                    </li>
                    <li className='list-unstyled flex-grow-1 li-5'>
                        <div>
                            <img style={{width: 110 }}  src='https://file.hstatic.net/1000075078/file/bean-05_c90cf6fc5baf430ba23efd48f2362db4.png' alt='' />
                        </div>
                        <h6 className='mb-1 mt-4' style={{fontWeight:500,fontSize: 20}}>THÀNH VIÊN MỚI</h6>
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
                        <p className='text-center' style={{fontSize:14}}>Được nhân <strong>1.5 số BEAN</strong> tích lũy (10.000Đ = 9 beans) Tích BEAN nhiều hơn, cơ hội nhận thêm quyền lợi và ưu đãi nhiều hơn</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-01_012ddb675e474b6e86cf443b4a440250.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1'>Tặng 1 phần bánh nhân ngày sinh nhật</h6>
                        <p className='text-center' style={{fontSize:14}}>Miễn phí 1 phần bánh ngọt bất kỳ tại The Coffee House trong tháng sinh nhật của bạn</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-01_012ddb675e474b6e86cf443b4a440250.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1'>Đổi quà trong Cửa Hàng Ưu Đãi</h6>
                        <p className='text-center' style={{fontSize:14}}>Với số BEAN tích luỹ được, bạn có thể đổi quà yêu thích tại Cửa Hàng Ưu Đãi(*) Đặc quyền đổi và nhận những ưu đãi dành riêng cho thành viên Kim Cương</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-09_94378e3e861546cf84852317858bd019.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1'>Miễn phí một phần nước bất kỳ</h6>
                        <p className='text-center' style={{fontSize:14}}>Thưởng thức miễn phí 1 ly nước yêu thích</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-06_e9dae95edb9f4a179b7b1d7767a2b090.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1 text-center'>Nhận ưu đãi đặc biệt từ The Coffee House và các đối tác khác</h6>
                        <p className='text-center' style={{fontSize:14}}>Đặc quyền nhận những ưu đãi đặc biệt dành riêng cho thành viên Kim Cương.</p>
                    </div>
                    <div className='col-4 my-4 d-flex flex-column align-items-center'>
                        <div>
                            <img src='https://file.hstatic.net/1000075078/file/iconnnnn-07_874507ed2c6944c19232d000716b9bf0.png' alt='' />
                        </div>
                        <h6 className='mt-3 mb-1 text-center'>Cơ hội trải nghiệm và hưởng đặc quyền đầu tiên</h6>
                        <p className='text-center' style={{fontSize:14}}>Trở thành một trong những người đầu tiên tham gia các chương trình, sự kiện đặc biệt, các trải nghiệm, sản phẩm mới của The Coffee House</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container p-4'>
            <div className='row d-flex justify-content-center'>
                <div className='text-center col-8 mb-5'>
                    <h4>BEAN tích luỹ vô hạn</h4>
                    <h4>Tích càng nhiều, ưu đãi càng nhiều</h4>
                    <p className='my-4'><em>Với chính sách tích điểm mới, số BEAN tích lũy được không chỉ dùng để xét hạng thành viên, mà còn dùng để <strong>đổi ưu đãi</strong> đa dạng và hấp dẫn hơn tại <strong>Cửa Hàng Ưu Đãi</strong> của The Coffee House.Giờ đây, bạn có thể thỏa thích tích BEAN càng nhiều, để nhận ưu đãi càng nhiều.</em></p>
                    <button style={{width: 153, height: 48, borderColor:'#ed8626',color:'#ed8626'}} className='btn reward_new_points'>
                        <p className='mb-0'>TÌM HIỂU THÊM</p>
                    </button>
                </div>
                <div className='row justify-content-center py-5 mt-5'>
                    <div className='col-8 text-center mb-4'>
                        <h4 className='mb-3'>Hướng dẫn trở thành thành viên The Coffee House</h4>
                        <p><em>Không chỉ dừng lại ở thưởng thức, với chính sách tích điểm mới tại phiên bản The Coffee House reward 3.0, bạn còn có thể tích BEAN dễ dàng để thăng hạng nhanh chóng và đổi lấy hàng ngàn ưu đãi cực kì hấp dẫn chỉ có tại The Coffee House.</em></p>
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
                                    <h6 style={{fontSize: 13}}>BƯỚC 1</h6>
                                    <p>Tải ứng dụng <strong style={{color:'#ed8626'}}>The Coffee House</strong> trên Appstore hoặc CH Play.<em>Nếu bạn đang sử dụng phiên bản cũ hơn của ứng dụng The Coffee House, vui lòng cập nhật phiên bản mới nhất.</em></p>
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
                                    <h6 style={{fontSize: 13}}>BƯỚC 2</h6>
                                    <p>Chọn mục <strong style={{color:'#ed8626'}}>Tài khoản</strong>ở góc màn hình. Sau đó, chọn <strong style={{color:'#ed8626'}}>The Coffee House Rewards</strong></p>
                                </div>
                                <div style={{paddingLeft: 80}} className='position-relative my-2'>
                                    <div className='list_howto_reward list_howto_reward_3' style={{backgroundColor:'#ed8626'}}>
                                        <h6>3</h6>
                                    </div>
                                    <h6 style={{fontSize: 13}}>BƯỚC 3</h6>
                                    <p>Thoải mái khám phá chi tiết các <strong style={{color:'#ed8626'}}>chương trình ưu đãi</strong>dành riêng cho thành viên The Coffee House,<strong style={{color:'#ed8626'}}>số BEAN đã tích lũy</strong> và <strong style={{color:'#ed8626'}}>những điều thú vị khác</strong>.</p>
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
                    <h4 className='pb-4 border-bottom border-dark text-center'>Những câu hỏi thường gặp</h4>
                    <h5 className='my-3'>CỬA HÀNG ƯU ĐÃI</h5>
                    <div className='my-4 row'>
                        <div className='col-6'>
                            <div className='col-12'>
                                <img className='w-100' style={{objectFit:'cover'}} src='https://file.hstatic.net/1000075078/file/q_a_rewardstore_4x6_22494496c8ac4068bc6e28d834aa7e65_master.jpg' alt='' />
                            </div>
                        </div>
                        <div className='col-6 d-flex align-items-center'>
                            <div className='col-12' >
                                <p style={{color: '#ed8626',fontWeight: 500,fontSize:15}} className='mb-0'>1. Làm sao để đổi ưu đãi trong "Cửa hàng ưu đãi"?</p>
                                <p style={{fontSize:14}} className='mb-2'>Khách hàng cần tích lũy BEAN để có thể đổi được các ưu đãi. BEAN có thể tích lũy thông qua mua hàng hoặc qua các sự kiện, chương trình khuyến mãi từ The Coffee House.</p>
                                <p style={{color: '#ed8626',fontWeight: 500,fontSize:15}} className='mb-0'>2. Tại sao tôi không được đổi các ưu đãi đặc biệt (special rewards) hoặc ưu đãi độc quyền (exclusive rewards)?</p>
                                <p style={{fontSize:14}} className='mb-0'>Tùy theo hạng thành viên của khách hàng mà họ có thể đổi ưu đãi tương ứng. Ưu đãi đặc biệt dành cho nhóm khách hàng thành viên hạng Vàng trở lên, và phải là kim cương trở lên cho các ưu đãi độc quyền.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{borderWidth: 4}} className='border_reward border-dark border-bottom'></div>
                    <h6 className='my-3'>CHUYỂN ĐỔI MÔ HÌNH</h6>
                    <div style={{borderWidth: 4}} className='border_reward border-dark border-bottom'></div>
                    <h6 className='my-3'>QUYỀN LỢI THÀNH VIÊN</h6>
                    <div style={{borderWidth: 4}} className='border_reward border-dark border-bottom'></div>
                    <h6 className='my-3'>HẠNG THÀNH VIÊN</h6>
                    <div style={{borderWidth: 4}} className='border-dark border-bottom'></div>
                    <div className='text-center my-4'>
                        <button style={{fontSize: 12,width: 130, height: 46, backgroundColor:'#ed8626'}} className='btn text-white shadow-none'>XEM THÊM</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Reward
