import React, { useEffect } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MessageIcon from '@material-ui/icons/Message';
import LinkIcon from '@material-ui/icons/Link';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useState } from 'react';
import { dataStore } from '../dataStore';
import './Store.css'
import { Link } from 'react-router-dom';

function Store() {
    const [getCity, setCity ] = useState('Tp Hồ Chí Minh')
    const [data, setData] = useState([])
    const [getDistric, setDistric ] = useState('Bình Thạnh')
    const [lengthData, setLength] = useState(4)


    const handleClick = (city,e) => {
        setCity(city)
        setLength(4)
        e.target.parentElement.querySelector('.active').classList.remove('active')
        e.target.classList.add("active")
    }

    const handleChange = (e) => {
        setDistric(e.target.value)
        setLength(4)
    }
    useEffect(() => {
        if(getCity === 'Tp Hồ Chí Minh') {
            setDistric('Bình Thạnh')
        } else if(getCity === 'Hà Nội') {
            setDistric('Hoàng Mai')
        } else if(getCity === 'Hải Phòng') {
            setDistric('Hồng Bàn')
        }else if(getCity === 'Đà Nẵng') {
            setDistric('Hải Châu')
        }else if(getCity === 'Tây Ninh') {
            setDistric('Tây Ninh')
        }else if(getCity === 'Cần Thơ') {
            setDistric('Ninh Kiều')
        }else if(getCity === 'Nha Trang') {
            setDistric('Tp Nha Trang')
        }else if(getCity === 'Kiên Giang') {
            setDistric('Phú Quốc')
        }else if(getCity === 'Nghệ An') {
            setDistric('Tp Vinh')
        }else if(getCity === 'Hà Tĩnh') {
            setDistric('Hà Tĩnh')
        }else if(getCity === 'Bà Rịa Vũng Tàu') {
            setDistric('Phước Hiệp')
        }else if(getCity === 'Đồng Nai') {
            setDistric('Tp Biên Hòa')
        }else if(getCity === 'Hưng Yên') {
            setDistric('Vân Giang')
        }else if(getCity === 'Bắc Ninh') {
            setDistric('Ninh Xá')
        }else if(getCity === 'Huế') {
            setDistric('Tp Huế')
        }else if(getCity === 'Thanh Hóa') {
            setDistric('Thanh Hóa')
        }
        else if(getCity === 'Bình Dương') {
            setDistric('Tp Thủ Dầu Một')
        }
    },[getCity])


    useEffect(() => {    
        dataStore.forEach(dataItem => {
            if(dataItem.nameCity === getCity) {
                    dataItem.data.forEach(item => {
                    if(item.distric === getDistric) {
                        setData(item.store)
                    }
                })
                
            }
        })
    }, [getCity, getDistric,lengthData])
    const handleBtnMore = () => {
        setLength(lengthData + 4)
    }

    return (
        <div>
            <div className='page_banner'>
                   <div className='banner'></div>
                   <div className='banner_text'><h3>Hệ thống 146 cửa hàng The Coffee House toàn quốc</h3></div>
            </div>

            <div className='container my-5'>

                <div className='row mt-5'>
                    <div className='col-3 border-right border-muted pr-0'>
                        <div className='page_aside'>
                            <p>Theo khu vực</p>                          
                            <ul>
                                <li className='active' onClick={(e) => handleClick('Tp Hồ Chí Minh',e)}>Tp Hồ Chí Minh ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Tp Hồ Chí Minh'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Hà Nội',e)}>Hà Nội ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Hà Nội'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Hải Phòng',e)}>Hải Phòng ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Hải Phòng'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Đà Nẵng',e)}>Đà Nẵng ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Đà Nẵng'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Tây Ninh',e)}>Tây Ninh ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Tây Ninh'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Cần Thơ',e)}>Cần Thơ ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Cần Thơ'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Nha Trang',e)}>Nha Trang ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Nha Trang'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Kiên Giang',e)}>Kiên Giang ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Kiên Giang'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Nghệ An',e)}>Nghệ An ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Nghệ An'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Hà Tĩnh',e)}>Hà Tĩnh ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Hà Tĩnh'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Bà Rịa Vũng Tàu',e)}>Bà Rịa Vũng Tàu ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Bà Rịa Vũng Tàu'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Đồng Nai',e)}>Đồng Nai ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Đồng Nai'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Hưng Yên',e)}>Hưng Yên ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Hưng Yên'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Bắc Ninh',e)}>Bắc Ninh ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Bắc Ninh'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Huế',e)}>Huế ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Huế'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Thanh Hóa',e)}>Thanh Hóa ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Thanh Hóa'
                                    }).sum
                                })</li>
                                <li onClick={(e) =>handleClick('Bình Dương',e)}>Bình Dương ({
                                    dataStore.find(e => {
                                        return e.nameCity === 'Bình Dương'
                                    }).sum
                                })</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-9 pl-5'>
                        <h4>Khám phá 72 cửa hàng của chúng tôi ở Tp Hồ Chí Minh</h4>

                        <select onChange={(e)=> handleChange(e)} value={getDistric} class="form-select filter_distric" aria-label="Default select example">
                            <option selected>Quận/Huyện</option>
                            {
                                getCity === 'Tp Hồ Chí Minh' && (
                                    <>
                                    <option value="Bình Chánh">Bình Chánh</option>
                                    <option value="Bình Thạnh">Bình Thạnh</option>
                                    <option value="Gò Vấp">Gò Vấp</option>
                                    <option value="Hóc Môn">Hóc Môn</option>
                                    <option value="Phú Nhuận">Phú Nhuận</option>
                                    <option value="Quận 1">Quận 1</option>
                                    <option value="Quận 10">Quận 10</option>
                                    <option value="Quận 11">Quận 11</option>
                                    <option value="Quận 3">Quận 3</option>
                                    <option value="Quận 4">Quận 4</option>
                                    <option value="Quận 5">Quận 5</option>
                                    <option value="Quận 6">Quận 6</option>
                                    <option value="Quận 7">Quận 7</option>
                                    <option value="Tp Thủ Đức">Tp Thủ Đức</option>
                                    <option value="Tân Bình">Tân Bình</option>
                                    <option value="Tân Phú">Tân Phú</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Hà Nội' && (
                                    <>
                                    <option value="Gia Lâm">Gia Lâm</option>
                                    <option value="Hoàng Mai">Hoàng Mai</option>
                                    <option value="Hà Đông">Hà Đông</option>
                                    <option value="Long Biên">Hóc Môn</option>
                                    <option value="Nam Từ Liên">Nam Từ Liêm</option>
                                    <option value="Quận Ba Đình">Quận Ba Đình</option>
                                    <option value="Quận Bắc Từ Liêm">Quận Bắc Từ Liêm</option>
                                    <option value="Quận Cầu Giấy">Quận Cầu Giấy</option>
                                    <option value="Quận Hai Bà Trưng">Quận 3</option>
                                    <option value="Quận Hoàn Kiếm">Quận 4</option>
                                    <option value="Thanh Xuân">Thanh Xuân</option>
                                    <option value="Tây Hồ">Tây Hồ</option>
                                    <option value="Đống Đa">Đống Đa</option>
                                    <option value="Tp Thủ Đức">Tp Thủ Đức</option>
                                    <option value="Tân Bình">Tân Bình</option>
                                    <option value="Tân Phú">Tân Phú</option>
                                    </>
                                )
                            }

                            {
                                getCity === 'Hải Phòng' && (
                                    <>
                                    <option value="Hồng Bàng">Hồng Bàng</option>
                                    <option value="Lê Chân">Lê Chân</option>
                                    <option value="Ngô Quyền">Ngô Quyền</option>
                                    </>
                                )
                            }

                            {
                                getCity === 'Đà Nẵng' && (
                                    <>
                                    <option value="Hải Châu">Quận Hải Châu</option>
                                    <option value="Sơn Trà">Quận Sơn Trà</option>
                                    </>
                                )
                            }

                            {
                                getCity === 'Tây Ninh' && (
                                    <>
                                    <option value="Tây Ninh">Tây Ninh</option>
                                    </>
                                )
                            }

                            {
                                getCity === 'Cần Thơ' && (
                                    <>
                                    <option value="Ninh Kiều">Ninh Kiều</option>
                                    </>
                                )
                            }

                            {
                                getCity === 'Nha Trang' && (
                                    <>
                                    <option value="Tp Nha Trang">Tp Nha Trang</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Kiên Giang' && (
                                    <>
                                    <option value="Phú Quốc">Phú Quốc</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Nghệ An' && (
                                    <>
                                    <option value="Tp Vinh">Tp Vinh</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Hà Tĩnh' && (
                                    <>
                                    <option value="Hà Tĩnh">Hà Tĩnh</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Bà Rịa Vũng Tàu' && (
                                    <>
                                    <option value="Phước Hiệp">Phước Hiệp</option>
                                    <option value="Tp Bà Rịa">Tp Bà Rịa</option>
                                    <option value="Tp Vũng Tàu">Tp Vũng Tàu</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Đồng Nai' && (
                                    <>
                                    <option value="Tp Biên Hòa">Tp Biên Hòa</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Hưng Yên' && (
                                    <>
                                    <option value="Vân Giang">Vân Giang</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Bắc Ninh' && (
                                    <>
                                    <option value="Ninh Xá">Ninh Xá</option>
                                    <option value="Suối Hoa">Suối Hoa</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Huế' && (
                                    <>
                                    <option value="Tp Huế">Tp Huế</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Thanh Hóa' && (
                                    <>
                                    <option value="Thanh Hóa">Thanh Hóa</option>
                                    </>
                                )
                            }
                            {
                                getCity === 'Bình Dương' && (
                                    <>
                                    <option value="Tp Thủ Dầu Một">Tp Thủ Dầu Một</option>
                                    </>
                                )
                            }
                        </select>    


                        <div className='row mt-2'>
                        {
                            data.filter((e,index) => {
                                return index < lengthData
                            })
                            .map((elementData,index) => {
                                return (
                                    <>
                                    <div key={index} className='col-6 my-4'>
                                        <div className='store_department'>
                                            <Link to={`/blogs/${elementData.link}`} >
                                                <img src={elementData.image} className='w-100' alt=''/>
                                            </Link>                           
                                        </div>
                                        <h5 className='mt-2'>{elementData.title}</h5>
                                        <button className='btn btn_map'>Xem Bản Đồ</button>
                                        <div className='link_social mt-2'>
                                            <h6 className='mb-0 text-black'>Chia sẻ trên:</h6>
                                            <div className='link_social_icon'>
                                                <a title='Chia sẻ qua facebook' href=''>
                                                    <FacebookIcon className='mx-2' />
                                                </a>
                                                <a title='Chia sẻ qua instagram' href=''>                                          
                                                    <InstagramIcon className='mx-2' />
                                                </a>
                                                <a title='Chia sẻ qua tin nhắn' href=''>                                           
                                                    <MessageIcon className='mx-2' />
                                                </a>
                                                <a title='Coppy Link' href=''>                                           
                                                <LinkIcon className='mx-2' />
                                                </a>
                                        </div>
                                        </div>
                                        <div className='mt-2 border-bottom w-100 border-2 border-muted ' style={{height: 5}} ></div>
                                        <h6 className='mt-3 text-dark'>{elementData.address}</h6>
                                        <h6 className='text-dark'>{elementData.time}</h6>
                                        <div className='store_service'>
                                            <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                                <DirectionsCarIcon />
                                                <span className='ml-2'>Có chỗ đỗ xe hơi</span>
                                            </div>
                                            <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                                <InsertEmoticonIcon />
                                                <span className='ml-2'>Thân thiện với gia đình</span>
                                            </div>
                                            <div className='self-serving d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                                <StorefrontIcon />
                                                <span className='ml-2'>Phục vụ tại chỗ</span>
                                            </div>
                                            <div className='take_away d-flex align-items-center my-1 mr-2 text-dark' style={{minWidth: 160}}>
                                                <LocalMallIcon />
                                                <span className='ml-2'>Mua mang đi</span>
                                            </div>
                                        </div>                          
                                    </div>                              
                                </>
                                )
                            })
                        }
                        </div>

                        {/* <div className='row mt-2'>
                            <div className='col-6 my-4'>
                                <div className='store_department'>
                                    <a href=''>
                                        <img src='https://file.hstatic.net/1000075078/file/hcm-lu-gia1__1__e0a622da07ab48b8bb7a542f088b7233.jpg' className='w-100' alt=''/>
                                    </a>
                                    <ArrowBackIcon className='arrow_back'/>
                                    <ArrowForwardIcon className='arrow_forward' />                              
                                </div>
                                <h5 className='mt-2'>HCM Lữ Gia</h5>
                                <button className='btn btn_map'>Xem Bản Đồ</button>
                                <div className='link_social mt-2'>
                                    <h6 className='mb-0 text-black'>Chia sẻ trên:</h6>
                                    <div className='link_social_icon'>
                                        <a title='Chia sẻ qua facebook' href=''>
                                            <FacebookIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua instagram' href=''>                                          
                                            <InstagramIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua tin nhắn' href=''>                                           
                                            <MessageIcon className='mx-2' />
                                        </a>
                                        <a title='Coppy Link' href=''>                                           
                                          <LinkIcon className='mx-2' />
                                        </a>
                                   </div>
                                </div>
                                <div className='mt-2 border-bottom w-100 border-2 border-muted ' style={{height: 5}} ></div>
                                <h6 className='mt-3 text-dark'>64A Lữ Gia, Phường 15, Quận 11, Hồ Chí Minh</h6>
                                <h6 className='text-dark'>07:30 - 22:00</h6>
                                <div className='store_service'>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <DirectionsCarIcon />
                                        <span className='ml-2'>Có chỗ đỗ xe hơi</span>
                                    </div>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <InsertEmoticonIcon />
                                        <span className='ml-2'>Thân thiện với gia đình</span>
                                    </div>
                                    <div className='self-serving d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <StorefrontIcon />
                                        <span className='ml-2'>Phục vụ tại chỗ</span>
                                    </div>
                                    <div className='take_away d-flex align-items-center my-1 mr-2 text-dark' style={{minWidth: 160}}>
                                        <LocalMallIcon />
                                        <span className='ml-2'>Mua mang đi</span>
                                    </div>
                                </div>                          
                            </div>

                            <div className='col-6 my-4'>
                                <div className='store_department'>
                                    <a href=''>
                                        <img src='https://file.hstatic.net/1000075078/file/hcm_tinh_lo_10_1_0426474b62eb4fa98785c0161ab3a08e.jpg' className='w-100' alt='' />
                                    </a>
                                    <ArrowBackIcon className='arrow_back'/>
                                    <ArrowForwardIcon className='arrow_forward' />    
                                </div>
                                <h5 className='mt-2'>HCM Tỉnh Lộ 10</h5>
                                <button className='btn btn_map'>Xem Bản Đồ</button>
                                <div className='link_social mt-2'>
                                    <h6 className='mb-0 text-black'>Chia sẻ trên:</h6>
                                    <div className='link_social_icon'>
                                        <a title='Chia sẻ qua facebook' href=''>
                                            <FacebookIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua instagram' href=''>                                          
                                            <InstagramIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua tin nhắn' href=''>                                           
                                            <MessageIcon className='mx-2' />
                                        </a>
                                        <a title='Coppy Link' href=''>                                           
                                          <LinkIcon className='mx-2' />
                                        </a>
                                   </div>
                                </div>
                                <div className='mt-2 border-bottom w-100 border-2 border-muted ' style={{height: 5}} ></div>
                                <h6 className='mt-3 text-dark'>516 Tỉnh Lộ 10, Bình Trị Đông, Bình Tân, Hồ Chí Minh</h6>
                                <h6 className='text-dark'>07:30 - 22:00</h6>
                                <div className='store_service'>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <DirectionsCarIcon />
                                        <span className='ml-2'>Có chỗ đỗ xe hơi</span>
                                    </div>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160, display:'none'}}>
                                        <InsertEmoticonIcon />
                                        <span className='ml-2'>Thân thiện với gia đình</span>
                                    </div>
                                    <div className='self-serving d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <StorefrontIcon />
                                        <span className='ml-2'>Phục vụ tại chỗ</span>
                                    </div>
                                    <div className='take_away d-flex align-items-center my-1 mr-2 text-dark' style={{minWidth: 160}}>
                                        <LocalMallIcon />
                                        <span className='ml-2'>Mua mang đi</span>
                                    </div>
                                </div>

                            </div>

                            <div className='col-6 my-4'>
                                <div className='store_department'>
                                    <a href=''>
                                        <img src='https://file.hstatic.net/1000075078/file/hcm-binh-phu7_f2a8c0a193bf4aab9f7fce144b114eb1.jpg' className='w-100' alt='' />
                                    </a>
                                    <ArrowBackIcon className='arrow_back'/>
                                    <ArrowForwardIcon className='arrow_forward' />    
                                </div>
                                <h5 className='mt-2'>HCM Tỉnh Lộ 10</h5>
                                <button className='btn btn_map'>Xem Bản Đồ</button>
                                <div className='link_social mt-2'>
                                    <h6 className='mb-0 text-black'>Chia sẻ trên:</h6>
                                    <div className='link_social_icon'>
                                        <a title='Chia sẻ qua facebook' href=''>
                                            <FacebookIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua instagram' href=''>                                          
                                            <InstagramIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua tin nhắn' href=''>                                           
                                            <MessageIcon className='mx-2' />
                                        </a>
                                        <a title='Coppy Link' href=''>                                           
                                          <LinkIcon className='mx-2' />
                                        </a>
                                   </div>
                                </div>
                                <div className='mt-2 border-bottom w-100 border-2 border-muted ' style={{height: 5}} ></div>
                                <h6 className='mt-3 text-dark'>516 Tỉnh Lộ 10, Bình Trị Đông, Bình Tân, Hồ Chí Minh</h6>
                                <h6 className='text-dark'>07:30 - 22:00</h6>
                                <div className='store_service'>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <DirectionsCarIcon />
                                        <span className='ml-2'>Có chỗ đỗ xe hơi</span>
                                    </div>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160, display:'none'}}>
                                        <InsertEmoticonIcon />
                                        <span className='ml-2'>Thân thiện với gia đình</span>
                                    </div>
                                    <div className='self-serving d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <StorefrontIcon />
                                        <span className='ml-2'>Phục vụ tại chỗ</span>
                                    </div>
                                    <div className='take_away d-flex align-items-center my-1 mr-2 text-dark' style={{minWidth: 160}}>
                                        <LocalMallIcon />
                                        <span className='ml-2'>Mua mang đi</span>
                                    </div>
                                </div>

                            </div>

                            <div className='col-6 my-4'>
                                <div className='store_department'>
                                    <a href=''>
                                        <img src='https://file.hstatic.net/1000075078/file/_dsc7394_756ced0f2a8d4e189d4b3b7f3b15dc68.jpeg' className='w-100' alt='' />
                                    </a>
                                    <ArrowBackIcon className='arrow_back'/>
                                    <ArrowForwardIcon className='arrow_forward' />    
                                </div>
                                <h5 className='mt-2'>HCM The Hub - Điện Biên Phủ</h5>
                                <button className='btn btn_map'>Xem Bản Đồ</button>
                                <div className='link_social mt-2'>
                                    <h6 className='mb-0 text-black'>Chia sẻ trên:</h6>
                                    <div className='link_social_icon'>
                                        <a title='Chia sẻ qua facebook' href=''>
                                            <FacebookIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua instagram' href=''>                                          
                                            <InstagramIcon className='mx-2' />
                                        </a>
                                        <a title='Chia sẻ qua tin nhắn' href=''>                                           
                                            <MessageIcon className='mx-2' />
                                        </a>
                                        <a title='Coppy Link' href=''>                                           
                                          <LinkIcon className='mx-2' />
                                        </a>
                                   </div>
                                </div>
                                <div className='mt-2 border-bottom w-100 border-2 border-muted ' style={{height: 5}} ></div>
                                <h6 className='mt-3 text-dark'>195/10 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, Tp.HCM</h6>
                                <h6 className='text-dark'>07:30 - 22:00</h6>
                                <div className='store_service'>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <DirectionsCarIcon />
                                        <span className='ml-2'>Có chỗ đỗ xe hơi</span>
                                    </div>
                                    <div className='parking d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160, display:'none'}}>
                                        <InsertEmoticonIcon />
                                        <span className='ml-2'>Thân thiện với gia đình</span>
                                    </div>
                                    <div className='self-serving d-flex align-items-center my-2 mr-2 text-dark' style={{minWidth: 160}}>
                                        <StorefrontIcon />
                                        <span className='ml-2'>Phục vụ tại chỗ</span>
                                    </div>
                                    <div className='take_away d-flex align-items-center my-1 mr-2 text-dark' style={{minWidth: 160}}>
                                        <LocalMallIcon />
                                        <span className='ml-2'>Mua mang đi</span>
                                    </div>
                                </div>

                            </div>

                        </div>          */}
                        <div className='show_more_store d-flex justify-content-center my-4 '>
                            <button className='btn btn_more shadow-none' onClick={handleBtnMore}>
                                Xem thêm
                            </button>                         
                        </div>             
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Store
