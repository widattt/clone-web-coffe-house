import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MessageIcon from '@material-ui/icons/Message';
import LinkIcon from '@material-ui/icons/Link';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Logo from '../assets/img/Screenshot 2022-01-07 174335.png'
import { data } from '../dataDetailStore';
import { useParams } from 'react-router-dom';


function DetailStore({match}) {

    let { slug } = useParams()

    return (
        <>
            <Navbar bg={'white'}/>
            <div className='border-top border-muted my-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='img_layout'>
                        {

                            data.map(item => {
                                if(item.link === slug) {
                                return (
                                    item.image.map(image => {
                                        return (
                                            <div className='item my-1'>
                                                <img src={image} className='w-100 p-1' alt='' />
                                            </div>
                                        )                                      
                                    })
                                    )
                                }
                            })
                        }
                        <div className='item my-1'>
                            <img src={Logo} className='w-100 p-1' alt='' />
                        </div>
                    </div>
                    </div>
                        {/* <div className='col-6'>
                            <div className='img_layout'>
                                <div className='item my-1'>
                                    <img src='https://file.hstatic.net/1000075078/file/hcm-lu-gia1__1__e0a622da07ab48b8bb7a542f088b7233.jpg' className='w-100 p-1' alt='' />
                                </div>
                                <div className='item my-1'>
                                    <img src='https://file.hstatic.net/1000075078/file/hcm-lu-gia4__1__038acada954d49028ef5d22aea46134c.jpg' className='w-100 p-1' alt='' />
                                </div>
                                <div className='item my-1'>
                                    <img src='https://file.hstatic.net/1000075078/file/hcm-lu-gia7__1__6f66ec997cd7422a9cdf43682362674e.jpg' className='w-100 p-1' alt='' />
                                </div>
                                <div className='item my-1'>
                                    <img src='https://file.hstatic.net/1000075078/file/hcm-lu-gia3__1__445a0dbf89f742fa905c918085faff5d.jpg' className='w-100 p-1' alt='' />
                                </div>
                                <div className='item my-1'>
                                    <img src='https://file.hstatic.net/1000075078/file/hcm-lu-gia5__1__14afb3bd82a14ddc8a03a0bd81c952f4.jpg' className='w-100 p-1' alt='' />
                                </div>
                                <div className='item my-1'>
                                    <img src='https://file.hstatic.net/1000075078/file/hcm-lu-gia2__1__c055a463b749443cb0a2fc09d066ea77.jpg' className='w-100 p-1' alt='' />
                                </div>
                                <div className='item my-1'>
                                    <img src={Logo} className='w-100 p-1' alt='' />
                                </div>
                            </div>
                        </div> */}
                        {
                            data.map(item => {
                                if(item.link === slug)
                                {
                                return (
                                    <>
                                    <div className='col-6 px-1'>
                                            <h5 className='my-2'>{item.name}</h5>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h6 className='my-3'>Địa chỉ</h6>
                                                <div>
                                                    <a href=''>
                                                        <FacebookIcon  className='mx-2 text-muted' />
                                                    </a>
                                                    <a href=''>
                                                        <InstagramIcon className='mx-2 text-muted'/>
                                                    </a>
                                                    <a href=''>
                                                        <MessageIcon className='mx-2 text-muted' />
                                                    </a>
                                                    <a href=''>
                                                        <LinkIcon className='mx-2 text-muted' />
                                                    </a>
                                                </div>
                                            </div>
                                            <p style={{fontSize: 15}} className='mb-0'>{item.address}</p>
                                            <h6 className='mt-2'>Giờ mở cửa</h6>
                                            <p style={{fontSize: 15}} className='mb-0'>{item.time}</p>
                                            <div className='d-flex flex-wrap align-items-center mb-2'>
                                                <div className='mt-1' style={{minWidth: 190}}>
                                                    <DirectionsCarIcon className='mr-2' style={{fontSize: 18}} />
                                                    <small>Có chỗ đỗ xe hơi</small>
                                                </div>
                                                <div className='mt-1' style={{minWidth: 190}}>
                                                    <StorefrontIcon className='mr-2' style={{fontSize: 18}} />
                                                    <small>Phục vụ tại chỗ</small>
                                                </div>
                                                <div className='mt-1' style={{minWidth: 190}}>
                                                    <LocalMallIcon className='mr-2' style={{fontSize: 18}} />
                                                    <small>Mua mang đi</small>
                                                </div>
                                            </div>
                                            <div style={{height: 2}} className='border-bottom border-muted my-4'></div>
                                            <h6>{`Món ngon tại ${item.name}`} </h6>
                                            <div className='d-flex flex-wrap'>
                                                <div className='mb-3' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/banhmique_683851_400x400_51f39f17da7046ff8ef76aa17c29225a_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Bánh Mì Que Pate Cay</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>12.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mb-3' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/olong-nuong-tran-chau_017573_400x400_ae76ffea39cd42e4ad8e957678bf4f82_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Sữa Oolong Nướng Trân Châu</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>38.500 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mb-3' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/banh-bong-lan-trung-muoi_41ad92ea02854385a84934d9d57e4a1b_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Bánh Bông Lan Trứng Muối</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>29.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mb-3' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Chà Bông Phô Mai</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>32.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mb-3' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Đào Cam Sả Đá</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>31.500 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mb-3' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Sữa Đá</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>20.300 đ</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button style={{backgroundColor:'#fff7e6'}} className='btn w-100 shadow-none'>
                                                <h6 className='mb-1' style={{color:'#e57905'}}>
                                                    Xem menu quán
                                                </h6>
                                            </button>
                                            <div className='border-bottom border-muted mt-4' style={{height: 2}}></div>
                                            <h6 className='mt-4 mb-0'>Sản phẩm thưởng thức tại nhà</h6>
                                            <div className='d-flex flex-wrap'>
                                                <div  className='mt-2' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-5'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Combo Quà Tết 2022</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>249.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-5'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói...</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>48.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-tui_55b6d640e3594c1b9de982ff6823ebde_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-5'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>99.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-5'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Rang Xay Original 1 250gr</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>60.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/tra-dao-tui-loc-tearoma_0283ea88d37c4685b309d3acda5e6e0e_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-5'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Đào Túi Lọc Tearoma 20 x 2gr</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>28.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/tra-lai-tui-loc-tearoma_40bb74e6f61d40a4b9d25e60d8ef48e5_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-5'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Lài Túi Lọc Tearoma 20 x 2gr</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>28.000 đ</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2' style={{width: 182, padding:4}}>
                                                    <div>
                                                        <img src='https://product.hstatic.net/1000075078/product/tra-oolong-tui-loc-tearoma_25eb1abe370f496da4f3818529d9db19_large.jpg' className='w-100 shadow' alt='' />
                                                    </div>
                                                    <div className='mb-5'>
                                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Oolong Túi Lọc Tearoma 20 x 2gr</h6>
                                                        <p className='text-muted' style={{fontSize: 14}}>28.000 đ</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button style={{backgroundColor:'#fff7e6'}} className='btn w-100 shadow-none'>
                                                <h6 className='mb-1' style={{color:'#e57905'}}>
                                                    Xem menu quán
                                                </h6>
                                            </button>
                                            <div style={{height: 2}} className='border-bottom border-muted my-4'></div>
                                            <h5>The Coffee House lân cận</h5>
                                            {
                                                item.storeNear.map(store => {
                                                    return (
                                                        <div className='d-flex mt-3'>
                                                        <img src={store.img} className='rounded' style={{width:96}} alt='' />
                                                        <div className='pl-3'>
                                                            <h6 className='mb-0'>{store.name}</h6>
                                                            <p className='mt-1 mb-0' style={{fontSize: 14}} >{store.address}</p>
                                                        </div>
                                            </div>
                                                    )
                                                })
                                            }
                                            {/* <div className='d-flex mt-3'>
                                                <img src='https://file.hstatic.net/1000075078/article/hcm-le-dai-hanh1_caaed0b725934c6cba9674a9ce2dfe94_master.jpg' className='rounded' style={{width:96}} alt='' />
                                                <div className='pl-3'>
                                                    <h6 className='mb-0'>HCM Lê Đại Hành</h6>
                                                    <p className='mt-1 mb-0' style={{fontSize: 14}} >405A Lê Đại Hành, Phường 11, Quận 11, Hồ Chí Minh</p>
                                                </div>
                                            </div>
                                            <div className='d-flex  mt-3'>
                                                <img src='https://file.hstatic.net/1000075078/article/hcm-cu-xa-binh-thoi1_57616680c1244011a7d40e95e02ec571_master.jpg' className='rounded'  style={{width:96}} alt='' />
                                                <div className='pl-3'>
                                                    <h6 className='mb-0'>HCM Cư Xá Bình Thới</h6>
                                                    <p className='mt-1 mb-0' style={{fontSize: 14}} >45 Đường Số 5 - Cư xá Bình Thới, Phường 8, Quận 11, Hồ Chí Minh</p>
                                                </div>
                                            </div>
                                            <div className='d-flex mt-3'>
                                                <img src='https://file.hstatic.net/1000075078/article/hcm-ba-thang-hai1_00c0c6cb4abf4a2db9978c71fefe6866_master.jpg' className='rounded' style={{width:96}} alt='' />
                                                <div className='pl-3'>
                                                    <h6 className='mb-0'>HCM Ba Tháng Hai</h6>
                                                    <p className='mt-1 mb-0' style={{fontSize: 14}} >572 Đường 3/2, Phường 14, Quận 10, Hồ Chí Minh</p>
                                                </div>
                                            </div> */}
                                        </div>
                        
                                    </>
                                )}
                            })
                        }
                        {/* <div className='col-6 px-1'>
                            <h5 className='my-2'>{data.name}</h5>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='my-3'>Địa chỉ</h6>
                                <div>
                                    <a href=''>
                                        <FacebookIcon  className='mx-2 text-muted' />
                                    </a>
                                    <a href=''>
                                        <InstagramIcon className='mx-2 text-muted'/>
                                    </a>
                                    <a href=''>
                                        <MessageIcon className='mx-2 text-muted' />
                                    </a>
                                    <a href=''>
                                        <LinkIcon className='mx-2 text-muted' />
                                    </a>
                                </div>
                            </div>
                            <p style={{fontSize: 15}} className='mb-0'>{data.address}</p>
                            <h6 className='mt-2'>Giờ mở cửa</h6>
                            <p style={{fontSize: 15}} className='mb-0'>{data.time}</p>
                            <div className='d-flex flex-wrap align-items-center mb-2'>
                                <div className='mt-1' style={{minWidth: 190}}>
                                    <DirectionsCarIcon className='mr-2' style={{fontSize: 18}} />
                                    <small>Có chỗ đỗ xe hơi</small>
                                </div>
                                <div className='mt-1' style={{minWidth: 190}}>
                                    <StorefrontIcon className='mr-2' style={{fontSize: 18}} />
                                    <small>Phục vụ tại chỗ</small>
                                </div>
                                <div className='mt-1' style={{minWidth: 190}}>
                                    <LocalMallIcon className='mr-2' style={{fontSize: 18}} />
                                    <small>Mua mang đi</small>
                                </div>
                            </div>
                            <div style={{height: 2}} className='border-bottom border-muted my-4'></div>
                            <h6>{`Món ngon tại ${data.name}`} </h6>
                            <div className='d-flex flex-wrap'>
                                <div className='mb-3' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/banhmique_683851_400x400_51f39f17da7046ff8ef76aa17c29225a_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-2'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Bánh Mì Que Pate Cay</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>12.000 đ</p>
                                    </div>
                                </div>
                                <div className='mb-3' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/olong-nuong-tran-chau_017573_400x400_ae76ffea39cd42e4ad8e957678bf4f82_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-2'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Sữa Oolong Nướng Trân Châu</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>38.500 đ</p>
                                    </div>
                                </div>
                                <div className='mb-3' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/banh-bong-lan-trung-muoi_41ad92ea02854385a84934d9d57e4a1b_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-2'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Bánh Bông Lan Trứng Muối</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>29.000 đ</p>
                                    </div>
                                </div>
                                <div className='mb-3' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-2'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Chà Bông Phô Mai</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>32.000 đ</p>
                                    </div>
                                </div>
                                <div className='mb-3' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-2'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Đào Cam Sả Đá</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>31.500 đ</p>
                                    </div>
                                </div>
                                <div className='mb-3' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-2'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Sữa Đá</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>20.300 đ</p>
                                    </div>
                                </div>
                            </div>
                            <button style={{backgroundColor:'#fff7e6'}} className='btn w-100 shadow-none'>
                                <h6 className='mb-1' style={{color:'#e57905'}}>
                                    Xem menu quán
                                </h6>
                            </button>
                            <div className='border-bottom border-muted mt-4' style={{height: 2}}></div>
                            <h6 className='mt-4 mb-0'>Sản phẩm thưởng thức tại nhà</h6>
                            <div className='d-flex flex-wrap'>
                                <div  className='mt-2' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-5'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Combo Quà Tết 2022</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>249.000 đ</p>
                                    </div>
                                </div>
                                <div className='mt-2' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-5'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói...</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>48.000 đ</p>
                                    </div>
                                </div>
                                <div className='mt-2' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-tui_55b6d640e3594c1b9de982ff6823ebde_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-5'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>99.000 đ</p>
                                    </div>
                                </div>
                                <div className='mt-2' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-5'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Cà Phê Rang Xay Original 1 250gr</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>60.000 đ</p>
                                    </div>
                                </div>
                                <div className='mt-2' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/tra-dao-tui-loc-tearoma_0283ea88d37c4685b309d3acda5e6e0e_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-5'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Đào Túi Lọc Tearoma 20 x 2gr</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>28.000 đ</p>
                                    </div>
                                </div>
                                <div className='mt-2' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/tra-lai-tui-loc-tearoma_40bb74e6f61d40a4b9d25e60d8ef48e5_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-5'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Lài Túi Lọc Tearoma 20 x 2gr</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>28.000 đ</p>
                                    </div>
                                </div>
                                <div className='mt-2' style={{width: 182, padding:4}}>
                                    <div>
                                        <img src='https://product.hstatic.net/1000075078/product/tra-oolong-tui-loc-tearoma_25eb1abe370f496da4f3818529d9db19_large.jpg' className='w-100 shadow' alt='' />
                                    </div>
                                    <div className='mb-5'>
                                        <h6 className='mb-1 mt-3' style={{fontSize: 13.5}}>Trà Oolong Túi Lọc Tearoma 20 x 2gr</h6>
                                        <p className='text-muted' style={{fontSize: 14}}>28.000 đ</p>
                                    </div>
                                </div>
                            </div>
                            <button style={{backgroundColor:'#fff7e6'}} className='btn w-100 shadow-none'>
                                <h6 className='mb-1' style={{color:'#e57905'}}>
                                    Xem menu quán
                                </h6>
                            </button>
                            <div style={{height: 2}} className='border-bottom border-muted my-4'></div>
                            <h5>The Coffee House lân cận</h5>
                            <div className='d-flex mt-3'>
                                <img src='https://file.hstatic.net/1000075078/article/hcm-le-dai-hanh1_caaed0b725934c6cba9674a9ce2dfe94_master.jpg' className='rounded' style={{width:96}} alt='' />
                                <div className='pl-3'>
                                    <h6 className='mb-0'>HCM Lê Đại Hành</h6>
                                    <p className='mt-1 mb-0' style={{fontSize: 14}} >405A Lê Đại Hành, Phường 11, Quận 11, Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className='d-flex  mt-3'>
                                <img src='https://file.hstatic.net/1000075078/article/hcm-cu-xa-binh-thoi1_57616680c1244011a7d40e95e02ec571_master.jpg' className='rounded'  style={{width:96}} alt='' />
                                <div className='pl-3'>
                                    <h6 className='mb-0'>HCM Cư Xá Bình Thới</h6>
                                    <p className='mt-1 mb-0' style={{fontSize: 14}} >45 Đường Số 5 - Cư xá Bình Thới, Phường 8, Quận 11, Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <img src='https://file.hstatic.net/1000075078/article/hcm-ba-thang-hai1_00c0c6cb4abf4a2db9978c71fefe6866_master.jpg' className='rounded' style={{width:96}} alt='' />
                                <div className='pl-3'>
                                    <h6 className='mb-0'>HCM Ba Tháng Hai</h6>
                                    <p className='mt-1 mb-0' style={{fontSize: 14}} >572 Đường 3/2, Phường 14, Quận 10, Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailStore
