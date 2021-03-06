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
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >V??? The Coffee House</a>
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >Kh???i c???a h??ng</a>
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >Kh???i v??n ph??ng</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-dark text-decoration-none px-3' >Tra c???u k???t qu???</a>
                        <div className='d-flex align-items-center justify-content-center' style={{height: 44,width: 117, backgroundColor: '#f15401',borderRadius: 5}} >
                            <SearchIcon className='text-white' />
                            <a href='' style={{fontSize: 15, fontWeight: 500}} className='text-white text-decoration-none px-1 ' >T??m Vi???c</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978619019.jpeg' className='w-100' alt='' />
            </div>
            <div className='d-flex flex-column align-items-center mb-5'>
                <h5 className='my-4'>B???n mu???n ???ng tuy???n v??? tr?? n??o?</h5>
                <div className='d-flex mb-3'>
                    <div style={{width: 255, height: 56,background:"linear-gradient(to top, #fd891c, #ffaf35)",borderRadius: 5}} className='mx-2 d-flex align-items-center justify-content-center'><h6 className='text-white'>Barista</h6></div>
                    <div style={{width: 255, height: 56,background:"linear-gradient(to top, #fd891c, #ffaf35)",borderRadius: 5}} className='mx-2 d-flex flex-column align-items-center justify-content-center'>
                        <h6 className='mb-0 text-white'>Ti???p ????n kh??ch h??ng</h6>
                        <small className='text-white'>{`(B???o v??? n???i b???)`}</small>
                    </div>
                </div>
                    <a href='' style={{color:'#ff6725'}}>
                        <h6>Xem c??c v??? tr?? kh??c (20)</h6>
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
                                    <h4 className='text-white mb-4'>Kh???i c???a h??ng</h4>
                                    <div style={{minHeight: 145}} className='text-white d-flex align-items-start'>
                                        <h6 className='flex-grow-1 my-2'>Qu???n L?? C???a H??ng</h6>
                                        <h6 className='flex-grow-1 my-2'>Gi??m s??t ca</h6>
                                    </div>
                                </div>
                                <h6 style={{marginTop: 30}} className='text-white font-weight-bold'>Xem th??m</h6>
                                
                            </div>
                        </div>
                        <div className='mx-3' style={{borderRadius: 5, backgroundColor:'#fe9423',width: 445}}>
                            <div>
                                <img src='https://tuyendung.thecoffeehouse.com/img/jobBackOffice.bf8df57d.jpg' style={{borderRadius: 5, maxHeight: 385}} className='w-100' alt='' />
                            </div>
                            <div className='d-flex flex-column px-4 my-3' >
                                <div className='d-flex flex-column justify-content-between mt-3 flex-grow-1'>
                                    <h4 className='text-white mb-4'>Kh???i v??n ph??ng</h4>
                                    <div style={{minHeight: 145}} className='text-white d-flex align-items-start'>
                                        <div>
                                            <h6 className='my-2'>Purchasing Executive</h6>
                                            <h6 className='my-2'>Sales Online Executive</h6>
                                            <h6 className='my-4'>Product Marketing Executive</h6>
                                        </div>
                                        <div>
                                            <h6 className='my-2'>Gi??m S??t An Ninh</h6>
                                            <h6 className='my-2'>Ecommerce Operations Execuitve</h6>
                                            <h6 className='my-2'>Nh??n Vi??n Gi??m S??t Camera</h6>
                                        </div>
                                    </div>
                                    <h6 style={{marginTop: 30}} className='text-white font-weight-bold'>Xem th??m</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className='mt-4 pb-4 tcf' style={{backgroundColor: '#fef6e9'}}>
                    <div className='container'>
                        <h1 className='text-center mb-3' style={{color: '#ff6725'}}>4 gi?? tr??? l??m n??n The Coffee House</h1>
                        <div className='mt-5 px-4'>
                            <div className='row d-flex px-5' style={{marginRight: 8, marginLeft: 8}}>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(0,e)} href='#' style={{height: 80}} className='indicate indicate-item-1 active col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>Quan t??m</h5>
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(1,e)}  href='' style={{height: 80}} className='indicate indicate-item-2 col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>S??ng t???o</h5>
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(2,e)} href='' style={{height: 80}} className='indicate indicate-item-3 col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>Ch??n th??nh</h5>
                                    </a>
                                </div>
                                <div className='col-3'>
                                    <a onClick={(e) => handleClick(3,e)} href='' style={{height: 80}} className='indicate indicate-item-4 col-12 p-0 border border-muted shadow rounded d-flex align-items-center justify-content-center text-decoration-none '>
                                        <h5>D??ng c???m</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 pb-5'>
                        <Carousel indicators={false} activeIndex={index} onSelect={handleSelect} onSlid={handleTransition}>
                            <Carousel.Item interval={1000} >
                                    <div style={{minHeight: 445}} className='row justify-content-center'>
                                        <div className='col-4 d-flex flex-column justify-content-center'>
                                            <p style={{color: '#474640'}}>M???t gi?? tr??? k???t n???i con ng?????i v???i con ng?????i m?? ch??ng t??i lu??n t??? h??o ???? l?? Quan t??m ch??n th??nh. Ch??ng t??i ?????t c??? ??n c???n v?? ch??m ch??t trong t???ng t??ch c?? ph?? ?????n kh??ch h??ng, lo c??ng n???i lo vui c??ng ni???m vui c???a ng?????i n??ng d??n theo t???ng m??a v???. M???i nh??n vi??n mang b???n s???c kh??c bi???t, t???t c??? ?????u ???????c ch??o ????n t???i Nh?? C?? Ph??, v?? h??n h???t l?? c??ng kh??ch h??ng ????ng g??p th???t nhi???u ??i???u t???t ?????p cho c???ng ?????ng l???n, c??ng nhau lan to??? n?? m???nh m??? h??n m???i ng??y.</p>
                                            <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem b??i vi???t</button>
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
                                        <p style={{color: '#474640'}}>Ti???p n???i v?? song h??nh c??ng gi?? tr??? Quan t??m, Ch??n th??nh v?? D??ng c???m, m???i ng??y m???i gi??? t???i The Coffee House l?? s??? v???n h??nh kh??ng ng???ng ?????i m???i, h???c h???i, s??ng t???o v?? ???ng d???ng nhi???u c??ng ngh??? hi???n ?????i ????? mang ?????n nh???ng tr???i nghi???m m???i m??? h??n, nhi???u ti???n ??ch h??n cho kh??ch h??ng.</p>
                                        <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem b??i vi???t</button>
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
                                        <p style={{color: '#474640'}}>M???i quy???t ?????nh, l???i n??i, h??nh ?????ng c???a nh??n vi??n Nh?? C?? Ph?? lu??n l???y s??? Ch??n th??nh, th???t t??m l??m c???t l??i. V?? ch??ng t??i tin r???ng, h??nh tr??nh t??? s??? ch??n th??nh m???i l?? h??nh tr??nh th???t s??? b???n v???ng v?? ????? ????? lan to??? m???nh m??? nh???ng ??i???u t???t ?????p cho c???ng ?????ng.</p>
                                        <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem b??i vi???t</button>
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
                                        <p style={{color: '#474640'}}>C??ng tr??n h??nh tr??nh n??y, ch??ng t??i ki??n ?????nh v???i ??am m?? l??m c?? ph?? t??? t???, d??m ?????c m?? v??? 1 t????ng lai c?? th??? ????a h???t c?? ph?? Vi???t Nam v????n t???m th??? gi???i. C??ng nhau ??????ng ?????u v???i nh???ng kh?? kh??n, ch??ng t??i d??m ngh??, d??m l??m trong m???i th??? th??ch. Ch??ng t??i ?????i di???n v???i thay ?????i v?? v???n h??nh v???i t???c ?????.</p>
                                        <button style={{width: 134, height: 50, fontWeight: 500}} className='btn border border-muted text-dark shadow-none'>Xem b??i vi???t</button>
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
                            <h1 className='text-center text-white'>B???n x???ng ????ng v???i</h1>
                            <h1 className='text-center text-white'>nh???ng quy???n l???i thi???t th???c</h1>
                            <p className='text-center text-white my-4'>Ch??ng t??i tin r???ng x??y d???ng ???????c h???nh ph??c, ch?? tr???ng con ???????ng s??? nghi???p cho nh??n vi??n, s??? h??i l??ng trong c??ng vi???c v?? m??i tr?????ng t??ch c???c s??? l?? n???n t???ng l??u d??i cho s??? ph??t tri???n b???n v???ng c???a The Coffee House. H??y ?????n v???i ch??ng t??i khi nh???n th???y nh???ng gi?? tr??? n??y ph?? h???p v???i b???n!</p>
                            <div className='row py-4'>
                                <div className='col-4 p-3'>
                                    <div style={{height: 162}} className='p-1 d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/salary.7099aa11.png' alt='' />
                                        <h6 className='text-center px-3'>Thu nh???p c???nh tranh</h6>
                                    </div>
                                </div>
                                <div className='col-4 p-3'>
                                    <div style={{height: 162}} className='p-1 d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/careerPath.0da3629d.png' alt='' />
                                        <h6 className='text-center px-3'>C?? h???i ph??t tri???n s??? nghi???p b???n v???ng</h6>
                                    </div>
                                </div>
                                <div  className='col-4 p-3'>
                                    <div style={{height: 162}} className='p-1 d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/dynamic.32c307fd.png' alt='' />
                                        <h6 className='text-center px-3'>M??i tr?????ng l??m vi???c tr??? trung, g???n k???t</h6>
                                    </div>
                                </div>
                                <div className='col-6 px-3 py-2'>
                                    <div style={{height: 138}} className='d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/idea.770aeab0.png' alt='' />
                                        <h6 className='text-center'>Th???a s???c th??? hi???n ?? ki???n c?? nh??n</h6>
                                    </div>
                                </div>
                                <div className='col-6 px-3 py-2'>
                                    <div style={{height: 138}} className='d-flex flex-column justify-content-center align-items-center bg-white rounded'>
                                        <img style={{width: 64}} className='mb-2' src='https://tuyendung.thecoffeehouse.com/img/promotion.3ee8df4c.png' alt='' />
                                        <h6>Nhi???u ??u ????i d??nh ri??ng cho nh??n vi??n</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#ffa831'}}>
                    <div className='container d-flex justify-content-center'>
                        <div className='col-10 pt-5'>
                            <h1 className='text-center text-white'>B???n x???ng ????ng v???i</h1>
                            <h1 className='text-center text-white'>nh???ng quy???n l???i thi???t th???c</h1>
                            <div style={{marginTop: 80}} className="overflow-hidden">
                                <div className='tcf-gallery-image-body'>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978680713.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Ph???m Ph??c Th???nh - Top 4 cu???c thi Vietnam National Barista Championship 2019</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978808591.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Ti???c Gi??ng sinh</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978830113.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Vietnamese Women's Day - Cu???c thi c???m hoa</p>
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
                                            <p>2020 - homie ti???p s???c m??a d???ch</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978747502.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>Homie H?? N???i ????n ti???c t??n ni??n</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978865073.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>HOMIE THAM GIA CU???C THI LATTE ART CHAMPIONSHIP 2019</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978882335.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>HOMIE NH???N GI???I TH?????NG CU???C THI BARISTA</p>
                                        </div>
                                    </div>
                                    <div className="tcf-gallery-item">
                                        <a href=''>
                                            <img src='https://partner.thecoffeehouse.com/hr/files/banners/1624978906407.jpeg' alt='' />
                                        </a>
                                        <div className='tcf-gallery-item-description'>
                                            <p>2021 - Ch?? Phi - B???o v??? ???????c y??u th??ch nh???t c???a n??m</p>
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
                            <h6 className='mt-4 text-muted'>Copyright ?? 2020 The Coffee House. All rights reserved.</h6>
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
