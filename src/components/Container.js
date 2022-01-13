import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Logo from '../assets/img/container-imgg.webp'
import {listImg} from '../dataSlide'
import './Container.css'


function Container() {
    

    const [current, setCurrent ] = useState(0)
    const lengthArr = listImg.length
    const nextBtn = () => {
        setCurrent (current === lengthArr - 1 ? 0 : current + 1 )
    }

    const preBtn = () => {
        setCurrent (current === 0 ? lengthArr - 1 : current - 1 )
    }
    return (
        <>
        <div className='container-home'>
            <img src={Logo} className='w-100' alt='' />
            <div className='container menu-home'>
                <div className='row'>
                    <div className='col-6'>
                        <img src='https://file.hstatic.net/1000075078/file/banner_home_ansangnhe_a112b72389fd4d9c83c6bd585be8118a.jpg' className='w-100 shadow rounded' alt='bg' />
                    </div>

                    <div className='col-6 d-flex'>
                        <div className='col-6 '>
                            <div className='shadow'>
                                <img src='https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg' className='w-100 rounded' alt='' />
                            </div>
                            <div className='pt-3 '>
                                <h6 style={{cursor: 'pointer'}}>Combo Quà Tết 2022</h6>
                                <p className='font-weight-bold' style={{color: '#e57905'}}>249.000 đ</p>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className='shadow' >
                                <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg' className='w-100 rounded' alt='' />
                            </div>
                            <div className='pt-3 '>
                                <h6 style={{cursor: 'pointer'}}>Cà Phê Sữa Đá</h6>
                                <p className='text-muted'>29.000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-3 '>
                        <div className='shadow'>
                            <img src='https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg' className='w-100 rounded' alt='' />
                        </div>
                        <div className='pt-3 '>
                            <h6 style={{cursor: 'pointer'}}>Bánh Mì VN Thịt Nguội</h6>
                            <p className='text-muted'>29.000 đ</p>
                        </div>
                    </div>

                    <div className='col-3 '>
                        <div className='shadow'>
                            <img src='https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg' className='w-100 rounded' alt='' />
                        </div>
                        <div className='pt-3 '>
                            <h6 style={{cursor: 'pointer'}}>Bạc Sỉu Đá</h6>
                            <p className='text-muted'>29.000 đ</p>
                        </div>
                    </div>
                    
                    <div className='col-3 '>
                        <div className='shadow'>
                            <img src='https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg' className='w-100 rounded' alt='' />
                        </div>
                        <div className='pt-3 '>
                            <h6 style={{cursor: 'pointer'}}>Chà Bông Phô Mai</h6>
                            <p className='text-muted'>32.000 đ</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='shadow' >
                            <img src='https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg' className='w-100 rounded' alt='' />
                        </div>
                        <div className='pt-3 '>
                            <h6 style={{cursor: 'pointer'}}>Cà Phê Đen Đá</h6>
                            <p className='text-muted'>29.000 đ</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='home-brands'>
                <div className='container d-flex align-items-center'>
                    <div className='col-5'>
                        <h2 className='mb-4'>Combo Quà Tết 2022</h2>
                        <p className='text-dark'>Combo quà Tết 2022: Hộp quà tặng với 4 hộp trà túi lọc Tearoma, Hộp cà phê sữa đá, Hộp cà phê 3in1 đậm vị Việt và Cà phê Original 1 của The Coffee House với thành phần chính cà phê Robusta Đắk Lắk, vùng trồng cà phê nổi tiếng nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại.</p>
                        <button type="button" class="btn text-white" style={{backgroundColor:'#ea8025'}}>Tìm Hiểu Thêm</button>
                    </div>
                    
                    <div className='col-7'>
                        <img src='https://file.hstatic.net/1000075078/file/combo_cpg_906x762_04d6843c68e842bfb53d39d1f6c58425.png' className='w-100 ' alt='' />
                    </div>
                </div>

                <div className='container d-flex align-items-center'>
                    <div className='col-7'>
                        <img src='https://file.hstatic.net/1000075078/file/combo_cpg_906x762_04d6843c68e842bfb53d39d1f6c58425.png' className='w-100 ' alt='' />
                    </div>
                    <div className='col-5'>
                        <h2 className='mb-4'>Giftset Trà Tearoma</h2>
                        <p className='text-dark'>Hộp quà tặng với 4 hộp trà túi lọc Tearoma các loại là món quà thật ý nghĩa cho những người thân yêu trong dịp này.</p>
                        <button type="button" class="btn text-white" style={{backgroundColor:'#ea8025'}}>Tìm Hiểu Thêm</button>
                    </div>
                    
                </div>
            </div>

            <div className='store-home mt-5'>             
                <div className='container d-flex align-items-center'>
                    <div className='col-5'>
                        <h2 className='mb-4'>The Coffee House 64A Lữ Gia - Quận 11</h2>
                        <p className='text-dark'>Cửa hàng mới ra mắt ngày 17/12 tại quận 11, Hồ Chí Minh đã sẵn sàng đón bạn ghé qua rồi nè</p>
                        <button type="button" class="btn text-white" style={{backgroundColor:'#ea8025'}}>Tìm Hiểu Thêm</button>
                    </div>
                    
                    <div className='slider_img col-7 mt-5 pr-0 d-flex position-relative'>
                        {
                            listImg.map((img, index) => {
                                return (
                                    <div className = {index === current ? 'slide active' : 'slide' }
                                    key={index}
                                    >
                                    {index === current && (
                                        <img src={img} alt='' className='rounded' />
                                    )}
                                    </div>
                                )
                            })
                        }
                        <ArrowBackIosIcon className='arrow-left' style={{cursor: 'pointer'}} onClick={preBtn} />
                        <ArrowForwardIosIcon className='arrow-right' style={{cursor: 'pointer'}} onClick={nextBtn} />
                        
                    </div>
                </div>
            </div>


            <div className='blog_home mt-5' style={{backgroundColor: '#fff7e6'}}>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-center pt-5'>
                        <img src='https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png' className='mr-2' style={{width: 18}} alt='' />
                        <h2>Chuyện Cà Phê Và Trà</h2>
                    </div>

                    <div className='blog_home_blogtitle mt-5 '>
                        <h2 className='ml-3'>Coffeeholic</h2>
                    </div>
                    <div className='blog-list my-4 d-flex'>
                        <div className='col-4'>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/5_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted'>01/01/2022</p>
                                <h6>NÊN MUA CÀ PHÊ XAY SẴN HAY CÀ PHÊ HẠT</h6>
                                <p>Trong blog này, Nhà xin chia sẻ một chút về chuyện mua cà phê xay sẵn hay mua cà phê hạt và mong rằng, không ít thì nhiều, sẽ giúp...</p>
                            </div>
                        </div>

                        <div className='col-4 '>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/bac_siu_da_lifestyle_836562fee9c940918baccf6ee06353e0_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted'>31/12/2021</p>
                                <h6>PHÂN BIỆT CÀ PHÊ SỮA ĐÁ VÀ BẠC SỈU</h6>
                                <p>Bạn có biết về sự khác biệt của cà phê sữa và bạc sỉu? Về góc độ màu sắc, hương vị và cả thành phần của hai thức uống này...</p>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/img_8586_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted'>28/12/2021</p>
                                <h6>CAPPUCCINO - LY CÀ PHÊ SỮA MỘT-PHẦN...</h6>
                                <p>Nếu bạn yêu thích Cappuccino, thì bài viết này thực sự dành riêng cho bạn.Cappuccino được gọi vui là thức uống "một-phần-ba" - 1/3 Espresso, 1/3 Sữa nóng, 1/3 Foam.</p>
                            </div>
                        </div>
                    </div>

                    <div className='blog_home_blogtitle mt-5'>
                        <h2 className='ml-3'>Teaholic</h2>
                    </div>

                    <div className='blog-list my-4 d-flex'>
                        <div className='col-4'>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/1_c9f8375c86f54a868381de6ca5231e4a_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted' >01/01/2022</p>
                                <h6>NHỮNG LƯU Ý KHI CHĂM SÓC CÂY TRÀ...</h6>
                                <p>Từng mỗi loại cây sẽ có những đặc tính riêng, và dù cho dễ sống trong điều kiện khí hậu và đất đai phù hợp thì trà Oolong cũng có...</p>
                            </div>
                        </div>

                        <div className='col-4 '>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/hong_tra_sua_tran_chau_da_lifestyle_f00b4d9af46149eead2abf629ce1d901_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted'>30/12/2021</p>
                                <h6>BÍ MẬT VỀ TRÀ SỮA - THỨC UỐNG VẠN...</h6>
                                <p>“Tình đầu quốc dân” mang tên “trà sữa” có rất nhiều điều thú vị và ngọt ngào. Cùng The Coffee House giải mã những bí mật xoay quanh ly trà...</p>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/1_3279cd293b514deb8787630d17b0a091_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted'>29/12/2021</p>
                                <h6>TRÀ XANH - THẦN DƯỢC CHO SỨC KHỎE VÀ...</h6>
                                <p>Trà xanh không chỉ là thức uống thông thường mà được xem như là “thần dược” cho sức khỏe và sắc đẹp. Cùng The Coffee House điểm lại những công...</p>
                            </div>
                        </div>
                    </div>

                    <div className='blog_home_blogtitle mt-5'>
                        <h2 className='ml-3'>Blog</h2>
                    </div>

                    <div className='blog-list mt-4 d-flex'  style={{paddingBottom: 130}}>
                        <div className='col-4'>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/latte_nong_lifestyle__2__9ed6ca8b89eb4189bcf78abdde2d536f_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted' >01/01/2022</p>
                                <h6>HÔM NAY, BẠN UỐNG GÌ?</h6>
                                <p>Chào bạn yêu quý, hôm nay bạn muốn uống gì? Một “chiếc review” về các loại cà phê của Italy từ The Coffee House, hy vọng bạn sẽ tìm thấy...</p>
                            </div>
                        </div>

                        <div className='col-4 '>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/tra_phuc_bon_tu_7a82122e51ba4de890d2e7728b9acd98_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted'>30/12/2021</p>
                                <h6>THÊM VITAMIN ĐỂ “THỔI BAY” COVID CÙNG...</h6>
                                <p>Bạn là “người chơi hệ trà”, bạn đã thử các loại trà dưới đây của The Coffee House? Không chỉ ngon đúng điệu mà còn bổ sung thêm nhiều vitamin...</p>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='zoom-in'>
                                <img src='https://file.hstatic.net/1000075078/article/_downloader.la_-61ca8ea1c1b14_3da462b21ff04e15b9d8d8fc69357e9a_grande.jpg' className='w-100 rounded' style={{height: 177}} alt='' />
                            </div>
                            <div className='mt-2'>
                                <p className='text-muted'>29/12/2021</p>
                                <h6>5 MÓN ĂN CỰC NGON ĐƯỢC CHẾ BIẾN ĐƠN...</h6>
                                <p>The Coffee House chia sẻ và hướng dẫn bạn cách làm 5 món ăn cực ngon và rất đơn giản được chế biến từ cà phê. Cùng xem và thực...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

        </>
    )
}

export default Container
