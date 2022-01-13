import React, { useEffect, useState, useRef } from 'react'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Logo from '../assets/img/logocoffehouse.png'
import { Link, Navigate } from 'react-router-dom'
import './Navbar.css'
function Navbar({bg}) {
    const [activeNav, setActiveNav] = useState(false)
    const getEleNavBar = useRef(null)
    const getuseRef = useRef(null)


    useEffect(()=> {
        window.addEventListener('scroll', function() {
            
            if(window.scrollY >= 45) {
                setActiveNav(true)
            }
            else {
                setActiveNav(false)
            }
        })
        return ()=> {
            window.removeEventListener('scroll', function() {
            
                if(window.scrollY >= 45) {
                    setActiveNav(true)
                }
                else {
                    setActiveNav(false)
                }
            })
        }
    },[])
    return (
        <>
            <div className='top_bar container d-flex justify-content-center py-2'>
                <div className='mx-5' style={{cursor: 'pointer'}}>
                    <RoomIcon style={{color: '#e57905'}}/>
                    <span className='small pl-1 text-muted'>146 Cửa hàng khắp cả nước</span>
                </div>
                <div  className='mx-5' style={{cursor: 'pointer'}}>
                    <PhoneIcon style={{color: '#e57905'}} />
                    <span className='small pl-2 text-muted'>Đặt hàng: 1800.6936</span>
                </div>
                <div  className='mx-5' style={{cursor: 'pointer'}}>
                    <LocalShippingIcon style={{color: '#e57905'}} />
                    <span className='small pl-2 text-muted'>Freeship từ 50.000vnd</span>
                </div>
            </div>
            <div ref={getEleNavBar} style={{backgroundColor: bg ? bg : ''}} className={`container-fluid color_navbar ${activeNav ? 'active' : '' } `}>
                    <div className='container navbar'>
                        <Link to='/' className='wrap_img_navbar '>
                            <img src={Logo} className='img_navbar' style={{cursor: 'pointer'}} alt='' />
                        </Link>

                        <div className='wrap_btn_link mt-2'>
                            <Link className='text-decoration-none'  to='/collections/ca-phe-tai-nha'>
                                <h6>Cà phê</h6>
                            </Link>
                            <Link className='text-decoration-none' to='/collections/tra-tai-nha'>
                                <h6>Trà</h6>
                            </Link>
                            <div className='d-flex align-items-center has_child position-relative'>
                                <Link className='text-decoration-none' to='/collections/all'>
                                    <h6 className='d-flex mt-1 menu_parent'>
                                        Menu
                                        <div className='icon_arrowdown'>
                                            <ArrowDropDownIcon />
                                        </div>
                                    </h6>
                                </Link>
                                <ul className='child_Menu'>
                                    <li>
                                        <Link to='/collections/all' className='link_menu_child text-decoration-none'>Tất Cả</Link>
                                    </li>
                                    <li>
                                        <Link to='/collections/ca-phe' className='link_menu_child text-decoration-none'>Cà Phê</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link to='/collections/all '>Cà Phê Việt Nam</Link></li>
                                            <li><Link to='/collections/all '>Cà Phê Máy</Link></li>
                                            <li><Link to='/collections/all '>Cold Brew</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/collections/tra' className='link_menu_child text-decoration-none '>Trà</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link to='/collections/all '>Trà Trái Cây</Link></li>
                                            <li><Link to='/collections/all '>Trà Sữa Macchiato</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/collections/other' className='link_menu_child text-decoration-none'>Món Khác</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link to='/collections/all '>Đá xay</Link></li>
                                            <li><Link to='/collections/all '>Matcha- Sô cô la</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/collections/snack' className='link_menu_child text-decoration-none'>Bánh & Snack</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link to='/collections/all '>Bánh Mặn</Link></li>
                                            <li><Link to='/collections/all '>Bánh ngọt</Link></li>
                                            <li><Link to='/collections/all '>Snack</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/collections/home' className='link_menu_child text-decoration-none '>Tại nhà</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link to='/collections/all '>Cà phê tại nhà</Link></li>
                                            <li><Link to='/collections/all '>Trà tại nhà</Link></li>
                                        </ul>
                                    </li>
                                </ul>

                                
                                
                            </div>
                            <div className='d-flex align-items-center has_child position-relative'>
                                <h6 className='d-flex mt-1 Coffee_Tea_parent'>
                                    <Link className='text-decoration-none text-dark' to='/pages/chuyen-ca-phe-va-tra'><h6 className='mb-0'>Chuyện Cà Phê và Trà</h6></Link>

                                    <div className='icon_arrowdown'>
                                        <ArrowDropDownIcon />
                                    </div>
                                </h6>

                                <ul className='child_Coffe_Tea'>
                                    
                                
                                    <li>
                                        <Link to='/pages/chuyen-ca-phe-va-tra/Coffeeholic' className='link_menu_child text-decoration-none'>Coffeeholic</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link className='text-decoration-none' to='/pages/chuyen-ca-phe-va-tra' >#chuyencaphe</Link></li>
                                            <li><Link className='text-decoration-none' to='/pages/chuyen-ca-phe-va-tra' >#phacaphe</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to='/pages/chuyen-ca-phe-va-tra/Teaholic' className='link_menu_child text-decoration-none'>Teaholic</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link className='text-decoration-none' to='/pages/chuyen-ca-phe-va-tra' >#cauchuyenvetra</Link></li>
                                            <li><Link className='text-decoration-none' to='/pages/chuyen-ca-phe-va-tra' > #phatra</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/pages/chuyen-ca-phe-va-tra/Blog'  className='link_menu_child text-decoration-none'>Blog</Link>
                                        <ul className='list-unstyled mt-3' style={{fontSize: 15}}>
                                            <li><Link className='text-decoration-none' to='/pages/chuyen-ca-phe-va-tra' >#inthemood</Link></li>
                                            <li><Link className='text-decoration-none' to='/pages/chuyen-ca-phe-va-tra' >#Review</Link></li>
                                            <li><Link className='text-decoration-none' to='/pages/chuyen-ca-phe-va-tra' >#HumanofTCH</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <Link className='text-decoration-none' to='/pages/danh-sach-cua-hang'>
                                <h6>Cửa hàng</h6>
                            </Link>
                            <Link className='text-decoration-none' to='/pages/tuyen-dung ' target="_blank" rel="noopener noreferrer">
                                <h6>Tuyển dụng</h6>
                            </Link>
                            <Link className='text-decoration-none' to='/pages/reward'>
                                <h6>Ưu đãi thành viên</h6>
                            </Link>

                        </div>
                    </div>

                    
            </div>
        </>

    )
}

export default Navbar
