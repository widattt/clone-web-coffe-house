import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Carousel from 'react-bootstrap/Carousel'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Recruitment.css'
import { SportsRugbySharp } from '@material-ui/icons';


function Recruitment() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    const handleClick = (index,e) => {
        e.preventDefault()
        setIndex(index)
    }


        const handleTransition = () => {

            if(index === 0) {
                const html = document.querySelector('.indicate-item-1').parentElement.parentElement
                html.querySelector('.active').classList.remove('active')
                html.querySelector('.indicate-item-1').classList.add('active')
                
            
            } else if(index === 1) 
            {
                const html = document.querySelector('.indicate-item-2').parentElement.parentElement
                html.querySelector('.active').classList.remove('active')
                html.querySelector('.indicate-item-2').classList.add('active')
                
            }else if(index === 2) 
            {
                const html = document.querySelector('.indicate-item-3').parentElement.parentElement
                html.querySelector('.active').classList.remove('active')
                html.querySelector('.indicate-item-3').classList.add('active')
            }
            else if(index === 3) 
            {
                const html = document.querySelector('.indicate-item-4').parentElement.parentElement
                html.querySelector('.active').classList.remove('active')
                html.querySelector('.indicate-item-4').classList.add('active')
            }
        }


    return (
        <div>
            <div className='navbar_recruitment d-flex align-items-center border-bottom border-muted'>
                <div className='container-fluid d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <a href='' >
                            <img src='	https://tuyendung.thecoffeehouse.com/img/logo.bbe8ad9a.svg' alt='' />
                        </a>
                    </div>
                    <div className='d-flex align-items-center'>
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >Về The Coffee House</a>
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >Khối cửa hàng</a>
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >Khối văn phòng</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >Tra cứu kết quả</a>
                        <div className='d-flex align-items-center justify-content-center' style={{height: 44,width: 117, backgroundColor: '#f15401',borderRadius: 5}} >
                            <SearchIcon className='text-white' />
                            <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-white text-decoration-none px-1 ' >Tìm Việc</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978619019.jpeg' className='w-100' alt='' />
            </div>
            <div className='d-flex flex-column align-items-center mb-5'>
                <h5 className='my-4'>Bạn muốn ứng tuyển vị trí nào?</h5>
                <div className='d-flex mb-3'>
                    <div style={{width: 255, height: 56,background:"linear-gradient(to top, #fd891c, #ffaf35)",borderRadius: 5}} className='mx-2 d-flex align-items-center justify-content-center'><h6 className='text-white'>Barista</h6></div>
                    <div style={{width: 255, height: 56,background:"linear-gradient(to top, #fd891c, #ffaf35)",borderRadius: 5}} className='mx-2 d-flex flex-column align-items-center justify-content-center'>
                        <h6 className='mb-0 text-white'>Tiếp đón khách hàng</h6>
                        <small className='text-white'>{`(Bảo vệ nội bộ)`}</small>
                    </div>
                </div>
                    <a href='' style={{color:'#ff6725'}}>
                        <h6>Xem các vị trí khác (20)</h6>
                    </a>
            </div>
            <div style={{background:"linear-gradient(to bottom, #fef6e9 70%, white)"}} className='py-5'>
                <div className='container p-5'>
                    <div className='d-flex justify-content-center'>
                        <div className='mx-3' style={{borderRadius: 5,  backgroundColor: '#ff6725',width: 445}}>
                            <div>
                                <img src='https://tuyendung.thecoffeehouse.com/img/jobOperations.750d16fb.jpg' style={{borderRadius: 5, maxHeight: 385}} className='w-100' alt='' />
                            </div>
                            <div className='d-flex flex-column px-4 my-3'>
                                <div  className='d-flex flex-column justify-content-between mt-3'>
                                    <h4 className='text-white mb-4'>Khối cửa hàng</h4>
                                    <div style={{minHeight: 145}} className='text-white d-flex align-items-start'>
                                        <h6 className='flex-grow-1 my-2'>Quản Lý Cửa Hàng</h6>
                                        <h6 className='flex-grow-1 my-2'>Giám sát ca</h6>
                                    </div>
                                </div>
                                <h6 style={{marginTop: 30}} className='text-white font-weight-bold'>Xem thêm</h6>
                                
                            </div>
                        </div>
                        <div className='mx-3' style={{borderRadius: 5, backgroundColor:'#fe9423',width: 445}}>
                            <div>
                                <img src='https://tuyendung.thecoffeehouse.com/img/jobBackOffice.bf8df57d.jpg' style={{borderRadius: 5, maxHeight: 385}} className='w-100' alt='' />
                            </div>
                            <div className='d-flex flex-column px-4 my-3' >
                                <div className='d-flex flex-column justify-content-between mt-3 flex-grow-1'>
                                    <h4 className='text-white mb-4'>Khối văn phòng</h4>
                                    <div style={{minHeight: 145}} className='text-white d-flex align-items-start'>
                                        <div>
                                            <h6 className='my-2'>Purchasing Executive</h6>
                                            <h6 className='my-2'>Sales Online Executive</h6>
                                            <h6 className='my-4'>Product Marketing Executive</h6>
                                        </div>
                                        <div>
                                            <h6 className='my-2'>Giám Sát An Ninh</h6>
                                            <h6 className='my-2'>Ecommerce Operations Execuitve</h6>
                                            <h6 className='my-2'>Nhân Viên Giám Sát Camera</h6>
                                        </div>
                                    </div>
                                    <h6 style={{marginTop: 30}} className='text-white font-weight-bold'>Xem thêm</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className='mt-4 pb-4 tcf' style={{backgroundColor: '#fef6e9'}}>
                    <div className='container'>
                        <h1 className='text-center mb-3' style={{color: '#ff6725'}}>4 giá trị làm nên The Coffee House</h1>
                        <div className='mt-5 px-4'>
                            <div className='row d-flex px-5' style={{marginRight: 8, marginLeft: 8}}>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(0,e)} href='#' style={{height: 80}} className='indicate indicate-item-1 active col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>Quan tâm</h5>
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(1,e)}  href='' style={{height: 80}} className='indicate indicate-item-2 col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>Sáng tạo</h5>
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(2,e)} href='' style={{height: 80}} className='indicate indicate-item-3 col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>Chân thành</h5>
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(3,e)} href='' style={{height: 80}} className='indicate indicate-item-4 col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>Dũng cảm</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 pb-5'>
                        <Carousel indicators={false} activeIndex={index} onSelect={handleSelect} onSlid={handleTransition}>
                            <Carousel.Item interval={1000} >
                                    <div style={{minHeight: 445}} className='row justify-content-center'>
                                        <div className='col-4 d-flex flex-column justify-content-center'>
                                            <p style={{color: '#474640'}}>Một giá trị kết nối con người với con người mà chúng tôi luôn tự hào đó là Quan tâm chân thành. Chúng tôi đặt cả ân cần và chăm chút trong từng tách cà phê đến khách hàng, lo cùng nỗi lo vui cùng niềm vui của người nông dân theo từng mùa vụ. Mỗi nhân viên mang bản sắc khác biệt, tất cả đều được chào đón tại Nhà Cà Phê, và hơn hết là cùng khách hàng đóng góp thật nhiều điều tốt đẹp cho cộng đồng lớn, cùng nhau lan toả nó mạnh mẽ hơn mỗi ngày.</p>
                                            <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem bài viết</button>
                                        </div>
                                        <div className='col-5'>                                         
                                            <img
                                                className="d-block w-100 rounded"
                                                src="https://partner.thecoffeehouse.com/hr/files/banners/1624978934591.jpeg"
                                                alt="First slide"
                                            />
                                        </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000} >
                                <div style={{minHeight: 445}} className='row justify-content-center'>
                                    <div className='col-4 d-flex flex-column justify-content-center'>
                                        <p style={{color: '#474640'}}>Tiếp nối và song hành cùng giá trị Quan tâm, Chân thành và Dũng cảm, mỗi ngày mỗi giờ tại The Coffee House là sự vận hành không ngừng đổi mới, học hỏi, sáng tạo và ứng dụng nhiều công nghệ hiện đại để mang đến những trải nghiệm mới mẻ hơn, nhiều tiện ích hơn cho khách hàng.</p>
                                        <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem bài viết</button>
                                    </div>
                                    <div className='col-5'>                                         
                                        <img
                                        className="d-block w-100 rounded"
                                        src="https://partner.thecoffeehouse.com/hr/files/banners/1624978955732.jpeg"
                                        alt="Second slide"
                                        />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000} >
                                <div style={{minHeight: 445}} className='row justify-content-center'>
                                    <div className='col-4 d-flex flex-column justify-content-center'>
                                        <p style={{color: '#474640'}}>Mọi quyết định, lời nói, hành động của nhân viên Nhà Cà Phê luôn lấy sự Chân thành, thật tâm làm cốt lõi. Vì chúng tôi tin rằng, hành trình từ sự chân thành mới là hành trình thật sự bền vững và đủ để lan toả mạnh mẽ những điều tốt đẹp cho cộng đồng.</p>
                                        <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem bài viết</button>
                                    </div>
                                    <div className='col-5'>                                         
                                        <img
                                        className="d-block w-100 rounded"
                                        src="https://partner.thecoffeehouse.com/hr/files/banners/1624978979835.jpeg"
                                        alt="Third slide"
                                        />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000} >
                                <div style={{minHeight: 445}} className='row justify-content-center'>
                                    <div className='col-4 d-flex flex-column justify-content-center'>
                                        <p style={{color: '#474640'}}>Cũng trên hành trình này, chúng tôi kiên định với đam mê làm cà phê tử tế, dám ước mơ về 1 tương lai có thể đưa hạt cà phê Việt Nam vươn tầm thế giới. Cùng nhau đương đầu với những khó khăn, chúng tôi dám nghĩ, dám làm trong mọi thử thách. Chúng tôi đối diện với thay đổi và vận hành với tốc độ.</p>
                                        <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem bài viết</button>
                                    </div>
                                    <div className='col-5'>                                         
                                        <img
                                        className="d-block w-100 rounded"
                                        src="https://partner.thecoffeehouse.com/hr/files/banners/1624979116153.jpeg"
                                        alt="Four slide"
                                        />
                                    </div>
                                </div>                                                    
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>              
                </div> 

                <div style={{backgroundColor:'#ff6725'}}>
                    <div className='container d-flex justify-content-center'>
                        <div className='col-10 py-5'>
                            <h1 className='text-center text-white'>Bạn xứng đáng với</h1>
                            <h1 className='text-center text-white'>những quyền lợi thiết thực</h1>
                            <p className='text-center text-white my-4'>Chúng tôi tin rằng xây dựng được hạnh phúc, chú trọng con đường sự nghiệp cho nhân viên, sự hài lòng trong công việc và môi trường tích cực sẽ là nền tảng lâu dài cho sự phát triển bền vững của The Coffee House. Hãy đến với chúng tôi khi nhận thấy những giá trị này phù hợp với bạn!</p>
                            <div className='row py-4'>
                                <div className='col-4 p-3'>
                                    <div style={{height: 162}} className='p-1 d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/salary.7099aa11.png' alt='' />
                                        <h6 className='text-center px-3'>Thu nhập cạnh tranh</h6>
                                    </div>
                                </div>
                                <div className='col-4 p-3'>
                                    <div style={{height: 162}} className='p-1 d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/careerPath.0da3629d.png' alt='' />
                                        <h6 className='text-center px-3'>Cơ hội phát triển sự nghiệp bền vững</h6>
                                    </div>
                                </div>
                                <div  className='col-4 p-3'>
                                    <div style={{height: 162}} className='p-1 d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/dynamic.32c307fd.png' alt='' />
                                        <h6 className='text-center px-3'>Môi trường làm việc trẻ trung, gắn kết</h6>
                                    </div>
                                </div>
                                <div className='col-6 px-3 py-2'>
                                    <div style={{height: 138}} className='d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/idea.770aeab0.png' alt='' />
                                        <h6 className='text-center'>Thỏa sức thể hiện ý kiến cá nhân</h6>
                                    </div>
                                </div>
                                <div className='col-6 px-3 py-2'>
                                    <div style={{height: 138}} className='d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/promotion.3ee8df4c.png' alt='' />
                                        <h6>Nhiều ưu đãi dành riêng cho nhân viên</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#ffa831'}}>
                    <div className='container d-flex justify-content-center'>
                        <div className='col-10 pt-5'>
                            <h1 className='text-center text-white'>Bạn xứng đáng với</h1>
                            <h1 className='text-center text-white'>những quyền lợi thiết thực</h1>
                            <div style={{marginTop: 80}} className="overflow-hidden">
                                <div className='tcf-gallery-image-body'>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978680713.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Phạm Phúc Thịnh - Top 4 cuộc thi Vietnam National Barista Championship 2019</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978808591.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Tiệc Giáng sinh</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978830113.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Vietnamese Women's Day - Cuộc thi cắm hoa</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978784526.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Year End Party - The New Chapter</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978722388.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>2020 - homie tiếp sức mùa dịch</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978747502.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Homie Hà Nội đón tiệc tân niên</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978865073.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>HOMIE THAM GIA CUỘC THI LATTE ART CHAMPIONSHIP 2019</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978882335.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>HOMIE NHẬN GIẢI THƯỞNG CUỘC THI BARISTA</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978906407.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>2021 - Chú Phi - Bảo vệ được yêu thích nhất của năm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#f5f5f5'}} className='py-5'>
                    <div className='container d-flex justify-content-center'>
                        <div className='col-10 d-flex flex-column align-items-center '>
                            <div className='mb-4'>
                                <img src='https://tuyendung.thecoffeehouse.com/img/logo.bbe8ad9a.svg' alt='' />
                            </div>
                            <p className='text-center mb-0 text-muted'>86 - 88 Cao Thang, Ward 4, District 3, Ho Chi Minh, Vietnam.</p>
                            <p className='text-center text-muted'>Head Office: 195/10E Dien Bien Phu, Ward 15, Binh Thanh District, Ho Chi Minh, Vietnam</p>
                            <div className='d-flex my-2'>
                                <div  className='mx-4 border border-secondary rounded-circle p-2'>
                                    <PhoneIcon className='text-muted' />
                                </div>
                                <div className='mx-4 border border-secondary rounded-circle p-2'>
                                    <MailOutlineIcon className='text-muted' />
                                </div>
                                <div className='mx-4 border border-secondary rounded-circle p-2'>
                                    <FacebookIcon className='text-muted' />
                                </div>
                            </div>
                            <h6 className='mt-4 text-muted'>Copyright © 2020 The Coffee House. All rights reserved.</h6>
                            <div className='d-flex mt-2'>
                                <a href=''>
                                    <h6 className='text-dark mx-3 text-muted'>Terms of Use</h6>
                                </a>
                                <a href=''>
                                    <h6 className='text-dark mx-3 text-muted'>Privacy Policy</h6>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Recruitment
