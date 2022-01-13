import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='container mt-0' style={{paddingBottom: 54,paddingTop: 34}}>
                <div className='row'>
                    <div className='col-3 d-flex flex-column justify-content-start  '>
                        <h6 className='text-white'>Giới Thiệu</h6>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='' title='Về Chúng Tôi' className='text-white text-decoration-none' >
                                    <small>Về Chúng Tôi</small>
                                </a>
                            </li>
                            <li>
                                <a href='' title='Sản Phẩm' className='text-white text-decoration-none'>
                                    <small>Sản Phẩm</small>
                                </a>
                            </li>
                            <li>
                                <a href='' title='Khuyến Mãi' className='text-white text-decoration-none'>
                                    <small>Khuyến Mãi</small>
                                </a>
                            </li>
                            <li>
                                <a href='' title='Chuyện Cà Phê' className='text-white text-decoration-none'>
                                    <small>Chuyện Cà Phê</small>
                                </a>
                            </li>
                            <li>
                                <a href='' title='Cửa Hàng' className='text-white text-decoration-none'>
                                    <small>Cửa Hàng</small>
                                </a>
                            </li>
                            <li>
                                <a href='' title='Tuyển Dụng' className='text-white text-decoration-none'>
                                    <small>Tuyển Dụng</small>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-3'>
                        <h6 className='text-white'>Điểu Khoản</h6>
                        <ul>
                            <li>
                                <a href='' title='Điều Khoản Sử Dụng' className='text-white text-decoration-none'>
                                    <small>Điều Khoản Sử Dụng</small></a>
                            </li>
                            <li>
                                <a href='' title='Quy Tắc Bảo Mật' className='text-white text-decoration-none'>
                                    <small>Quy Tắc Bảo Mật</small>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-3'>
                        <div className='d-flex'>
                            <PhoneIcon className='mr-2' style={{color: 'white',fontSize: 18}} />
                            <h6 className='text-white'>Đặt hàng: 18006936</h6>
                        </div>

                        <div className='d-flex my-3'>
                            <LocationOnIcon className='mr-2' style={{color: 'white',fontSize: 18}} />
                            <h6 className='text-white'>Liên hệ</h6>
                        </div>

                        <small className='text-white'>Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15 , Q.Bình Thạnh, TP.Hồ Chí Minh</small>
                    </div>

                    <div className='col-3 d-flex flex-column justify-content-start'>
                        <div className='footer-img'>
                        </div>
                        <div className='d-flex mt-3'>
                            <FacebookIcon className='mr-1' style={{color: 'white', cursor: 'pointer'}}/>
                            <InstagramIcon className='ml-1' style={{color: 'white',cursor: 'pointer'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
