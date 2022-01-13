import React, { useEffect, useState } from 'react'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './story.css'
function Story({props}) {

    const [active, setActive ] = useState(`${props ? props : 'Coffeeholic'}`)
    

    useEffect(() => {
        const handleScroll = () => {
            const eleFooter = document.querySelector('.footer')
            const posiFooter = eleFooter.getBoundingClientRect()
            console.log(posiFooter.bottom)
            
            
            if(window.scrollY >= 213 && posiFooter.bottom >= 716 ) {
                document.querySelector('.side_bar_story').classList.add('active')
            } else {
                document.querySelector('.side_bar_story').classList.remove('active')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])


    const handleClick = (str) => {
        str === 'Coffeeholic' && setActive('Coffeeholic')
        str === 'Teaholic' && setActive('Teaholic')
        str === 'Blog' && setActive('Blog')
        str === 'All' && setActive('All')
    }

    return (
        <div className='border-top border-muted'>
            <div className='blog_detail container d-flex flex-column align-items-center pt-5'>
                <div className='col-10 d-flex justify-content-center'>
                    <div className='col-10 d-flex flex-column align-items-center'>
                        <h4>Chuyện Cà phê và Trà</h4>
                        <p style={{fontSize: 15}} className='text-center my-1'> The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.</p>
                        <div className='row my-3'>
                            <div className='col-3'>
                                <div onClick={() => handleClick('All')} className={`page_filter ${active === 'All' && 'active'} `}>
                                    Tất cả
                                </div>
                            </div>
                            <div className='col-3'>
                                <div onClick={() => handleClick('Coffeeholic')} className={`page_filter ${active === 'Coffeeholic' && 'active'} `}>
                                    Coffeeholic
                                </div>
                            </div>
                            <div className='col-3'>
                                <div onClick={() => handleClick('Teaholic')} className={`page_filter ${active === 'Teaholic' && 'active'} `}>
                                    Teaholic
                                </div>
                            </div>
                            <div className='col-3'>
                                <div onClick={() => handleClick('Blog')} className={`page_filter ${active === 'Blog' && 'active'} `}>
                                    Blog
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    active === 'Coffeeholic' && (
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-8 mt-2'>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/img_4749_8b5e9f80867a48cf9fac5a17a7c74cb3_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>THƯỞNG THỨC CÀ PHÊ THEO PHONG CÁCH MỸ</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Để cho một ngày làm việc của bạn thật năng lượng, hứng khởi với tách...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/82537613_2562624254011585_1811515951598796800_n_a1ad2b243c914d0ab8b4f908958a6569_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>KINH NGHIỆM MUA CÀ PHÊ NGUYÊN CHẤT NGON NHẤT</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>The Coffee House chia sẻ cùng bạn một vài kinh nghiệm để mua cà phê...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/the_coffee_house_original01731_e005af01c432450e9617bb0bf94aca7a_master.png' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>NGHỆ THUẬT THỬ VÀ NẾM CÀ PHÊ</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Để tạo nên những ly cà phê hảo hạng thì bước thử và nếm cà...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/1_bac02966964a40a8bb055cdf2f73d4d2_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>UỐNG NHIỀU CÀ PHÊ CÓ TỐT KHÔNG?</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Bạn là người “cuồng” cà phê, bạn  thắc mắc không biết uống nhiều cà phê...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/bac_siu_da_lifestyle_836562fee9c940918baccf6ee06353e0_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>PHÂN BIỆT CÀ PHÊ SỮA ĐÁ VÀ BẠC SỈU</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Bạn có biết về sự khác biệt của cà phê sữa và bạc sỉu? Về...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='side_bar_story col-4 '>
                                    <div>
                                        <div>
                                        <h5>Chủ đề liên quan</h5>
                                        <p>Chuyện Cà Phê</p>
                                        <p>Pha Cà Phê</p>
                                        </div>                            
                                        <div className='mt-3'>
                                            <h5>Teaholic</h5>
                                            <p>Câu chuyện về trà</p>
                                            <p>Pha Trà</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h5>Blog</h5>
                                            <p>In The Mood</p>
                                            <p>Review</p>
                                            <p>Human of TCH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                 {
                    active === 'Teaholic' && (
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-8 mt-2'>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/1_3ab1534449fd494eb77e13e8a8475f94_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>LÀM THẾ NÀO ĐỂ THƯỞNG TRÀ NHƯ MỘT CHUYÊN GIA?</h5>
                                                <small className='text-muted'>12/01/2022</small>
                                                <h6 className='mt-2'>Những chuyên gia am hiểu về trà sẽ có cách thưởng thức để có thể...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/tearoma_day2_02544_890a014a6a874ba9b231666979a261b6_master.png' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>KHI CHÉN TRÀ LÀ ĐẦU CÂU CHUYỆN</h5>
                                                <small className='text-muted'>11/01/2022</small>
                                                <h6 className='mt-2'>Chẳng biết từ bao giờ, chén trà lại trở nên thân thuộc, gần gũi với...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/_downloader.la_-61daa5c707a37_12fd15450c4943b2a3ec42177e38b6dd_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>TÌM HIỂU VỀ VĂN HÓA TRÀ CHIỀU BÊN BỘ ẤM TRÀ SỨ</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Trà chiều là một văn hoá, một nét đẹp đầy những giá trị nghệ thuật...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/1_bac02966964a40a8bb055cdf2f73d4d2_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>UỐNG NHIỀU CÀ PHÊ CÓ TỐT KHÔNG?</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Bạn là người “cuồng” cà phê, bạn  thắc mắc không biết uống nhiều cà phê...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/img_3115__1__d097a405b12240c69a93f253aa641a17_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>NGUỒN GỐC THÚ VỊ VỀ TRÀ TÚI LỌC</h5>
                                                <small className='text-muted'>03/01/2022</small>
                                                <h6 className='mt-2'>Trà túi lọc cực kỳ tiện dụng và ngày càng thịnh hành trong nhịp sống...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='side_bar_story col-4 '>
                                    <div>
                                        <div>
                                        <h5>Chủ đề liên quan</h5>
                                        <p>Chuyện Cà Phê</p>
                                        <p>Pha Cà Phê</p>
                                        </div>                            
                                        <div className='mt-3'>
                                            <h5>Teaholic</h5>
                                            <p>Câu chuyện về trà</p>
                                            <p>Pha Trà</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h5>Blog</h5>
                                            <p>In The Mood</p>
                                            <p>Review</p>
                                            <p>Human of TCH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                } 
                {
                    active === 'Blog' && (
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-8 mt-2'>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/tra_dao_cam_sa_da_lifestyle__1__50007c668c8847a4a98b0e3d821d03b1_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>YÊU THÍCH TRÀ HÃY ĐẾN VỚI THE COFFEE HOUSE</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Uống trà vừa là cách để bạn khởi động ngày mới hứng khởi, cũng chính...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/_downloader.la_-61d56ddd190dd_82f9f42332e745a6b12b1b02f84f4876_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>CÁC LOẠI CÀ PHÊ TƯƠNG ỨNG VỚI 12 CUNG HOÀNG ĐẠO</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Có một sự đồng điệu, nhịp nhàng đến đặc biệt giữa các loại cà phê...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/the_coffee_house_original01731_e005af01c432450e9617bb0bf94aca7a_master.png' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>NGHỆ THUẬT THỬ VÀ NẾM CÀ PHÊ</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Để tạo nên những ly cà phê hảo hạng thì bước thử và nếm cà...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/1_bac02966964a40a8bb055cdf2f73d4d2_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>UỐNG NHIỀU CÀ PHÊ CÓ TỐT KHÔNG?</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Bạn là người “cuồng” cà phê, bạn  thắc mắc không biết uống nhiều cà phê...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/266986562_3135673870039951_4558714982274363065_n_98f2679c801b4ba88a5d231a9e65e243_master.png' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>VÌ SAO NÊN THỬ CÀ PHÊ 3IN1 MỚI CỦA NHÀ?</h5>
                                                <small className='text-muted'>10/01/2022</small>
                                                <h6 className='mt-2'>Một sản phẩm mới của Nhà đã ra mắt cộng đồng yêu cà phê. Nếu...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='side_bar_story col-4 '>
                                    <div>
                                        <div>
                                        <h5>Chủ đề liên quan</h5>
                                        <p>Chuyện Cà Phê</p>
                                        <p>Pha Cà Phê</p>
                                        </div>                            
                                        <div className='mt-3'>
                                            <h5>Teaholic</h5>
                                            <p>Câu chuyện về trà</p>
                                            <p>Pha Trà</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h5>Blog</h5>
                                            <p>In The Mood</p>
                                            <p>Review</p>
                                            <p>Human of TCH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    active === 'All' && (
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-8 mt-2'>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/img_3206_7d1706cebcb94555a14e0a355511e2b7_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>THE COFFEE HOUSE - KHÔNG CHỈ ĐƠN THUẦN LÀ MỘT QUÁN CÀ PHÊ</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>The Coffee House đã xây dựng được thương hiệu và tạo dấu ấn trong thị...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/mousse_passion_cheese_lifestyle_f182fbe047bb4287bf2eb22daa829906_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>COMBO THỨC ĂN VÀ ĐỒ UỐNG ĐƯỢC YÊU THÍCH TẠI THE COFFEE</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Với một chiếc bụng đói thì bạn chẳng có năng lượng để làm gì, mà..</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/the_coffee_house_original01731_e005af01c432450e9617bb0bf94aca7a_master.png' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>NGHỆ THUẬT THỬ VÀ NẾM CÀ PHÊ</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Để tạo nên những ly cà phê hảo hạng thì bước thử và nếm cà...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/1_bac02966964a40a8bb055cdf2f73d4d2_master.jpg' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>UỐNG NHIỀU CÀ PHÊ CÓ TỐT KHÔNG?</h5>
                                                <small className='text-muted'>18/12/2021</small>
                                                <h6 className='mt-2'>Bạn là người “cuồng” cà phê, bạn  thắc mắc không biết uống nhiều cà phê...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-5'>
                                            <div>
                                                <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/266986562_3135673870039951_4558714982274363065_n_98f2679c801b4ba88a5d231a9e65e243_master.png' alt='' />
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div>
                                                <h5 className='mb-1'>VÌ SAO NÊN THỬ CÀ PHÊ 3IN1 MỚI CỦA NHÀ?</h5>
                                                <small className='text-muted'>10/01/2022</small>
                                                <h6 className='mt-2'>Một sản phẩm mới của Nhà đã ra mắt cộng đồng yêu cà phê. Nếu...</h6>
                                                <div>
                                                    <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                                    <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='side_bar_story col-4 '>
                                    <div>
                                        <div>
                                        <h5>Chủ đề liên quan</h5>
                                        <p>Chuyện Cà Phê</p>
                                        <p>Pha Cà Phê</p>
                                        </div>                            
                                        <div className='mt-3'>
                                            <h5>Teaholic</h5>
                                            <p>Câu chuyện về trà</p>
                                            <p>Pha Trà</p>
                                        </div>
                                        <div className='mt-3'>
                                            <h5>Blog</h5>
                                            <p>In The Mood</p>
                                            <p>Review</p>
                                            <p>Human of TCH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
                {/* <div className='col-10'>
                    <div className='row'>
                        <div className='col-8 mt-2'>
                            <div className='row my-3'>
                                <div className='col-5'>
                                    <div>
                                        <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/img_4749_8b5e9f80867a48cf9fac5a17a7c74cb3_master.jpg' alt='' />
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h5 className='mb-1'>THƯỞNG THỨC CÀ PHÊ THEO PHONG CÁCH MỸ</h5>
                                        <small className='text-muted'>18/12/2021</small>
                                        <h6 className='mt-2'>Để cho một ngày làm việc của bạn thật năng lượng, hứng khởi với tách...</h6>
                                        <div>
                                            <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                            <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-5'>
                                    <div>
                                        <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/82537613_2562624254011585_1811515951598796800_n_a1ad2b243c914d0ab8b4f908958a6569_master.jpg' alt='' />
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h5 className='mb-1'>KINH NGHIỆM MUA CÀ PHÊ NGUYÊN CHẤT NGON NHẤT</h5>
                                        <small className='text-muted'>18/12/2021</small>
                                        <h6 className='mt-2'>The Coffee House chia sẻ cùng bạn một vài kinh nghiệm để mua cà phê...</h6>
                                        <div>
                                            <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                            <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-5'>
                                    <div>
                                        <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/the_coffee_house_original01731_e005af01c432450e9617bb0bf94aca7a_master.png' alt='' />
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h5 className='mb-1'>NGHỆ THUẬT THỬ VÀ NẾM CÀ PHÊ</h5>
                                        <small className='text-muted'>18/12/2021</small>
                                        <h6 className='mt-2'>Để tạo nên những ly cà phê hảo hạng thì bước thử và nếm cà...</h6>
                                        <div>
                                            <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                            <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-5'>
                                    <div>
                                        <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/1_bac02966964a40a8bb055cdf2f73d4d2_master.jpg' alt='' />
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h5 className='mb-1'>UỐNG NHIỀU CÀ PHÊ CÓ TỐT KHÔNG?</h5>
                                        <small className='text-muted'>18/12/2021</small>
                                        <h6 className='mt-2'>Bạn là người “cuồng” cà phê, bạn  thắc mắc không biết uống nhiều cà phê...</h6>
                                        <div>
                                            <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                            <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col-5'>
                                    <div>
                                        <img className='w-100 rounded' src='https://file.hstatic.net/1000075078/article/bac_siu_da_lifestyle_836562fee9c940918baccf6ee06353e0_master.jpg' alt='' />
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h5 className='mb-1'>PHÂN BIỆT CÀ PHÊ SỮA ĐÁ VÀ BẠC SỈU</h5>
                                        <small className='text-muted'>18/12/2021</small>
                                        <h6 className='mt-2'>Bạn có biết về sự khác biệt của cà phê sữa và bạc sỉu? Về...</h6>
                                        <div>
                                            <LocalOfferIcon style={{width: 14,color:'grey'}} />
                                            <span style={{fontSize: 14}} className='px-2 text-muted'>pha ca phe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='side_bar_story col-4 '>
                            <div>
                                <div>
                                <h5>Chủ đề liên quan</h5>
                                <p>Chuyện Cà Phê</p>
                                <p>Pha Cà Phê</p>
                                </div>                            
                                <div className='mt-3'>
                                    <h5>Teaholic</h5>
                                    <p>Câu chuyện về trà</p>
                                    <p>Pha Trà</p>
                                </div>
                                <div className='mt-3'>
                                    <h5>Blog</h5>
                                    <p>In The Mood</p>
                                    <p>Review</p>
                                    <p>Human of TCH</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Story
