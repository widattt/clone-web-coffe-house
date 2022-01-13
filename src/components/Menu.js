import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Menu.css'
import { dataAll } from '../dataAll'

function Menu({props}) {

    const [active, setActive ] = useState(`${props ? props : 'all'}`)
    
    const handleClick = (str) => {

        str === 'all' && setActive('all')
        str === 'coffe' && setActive('coffe')
        str === 'ca-phe-viet-nam' && setActive('ca-phe-viet-nam')
        str === 'ca-phe-may' && setActive('ca-phe-may')
        str === 'cold-brew' && setActive('cold-brew')
        str === 'tea' && setActive('tea')
        str === 'tra-trai-cay' && setActive('tra-trai-cay')
        str === 'tra-sua-macchiato' && setActive('tra-sua-macchiato')
        str === 'other' && setActive('other')
        str === 'da-xay' && setActive('da-xay')
        str === 'matcha-socola' && setActive('matcha-socola')
        str === 'snack' && setActive('snack')
        str === 'banh-man' && setActive('banh-man')
        str === 'banh-ngot' && setActive('banh-ngot')
        str === 'banh-snack' && setActive('banh-snack')
        str === 'home' && setActive('home')
        str === 'ca-phe-tai-nha' && setActive('ca-phe-tai-nha')
        str === 'tra-tai-nha' && setActive('tra-tai-nha')

    }
    

    return (
        <div>
            <Navbar bg={'white'} />
            <div className='my-2 py-5 border-top border-muted'>
                <div className='container-fluid'>     
                    <div className='row'>                    
                        <div className='col-3 border-right border-2 border-muted d-flex justify-content-end'>
                            <div className='col-8 sidebar_menu'>
                                <h6 onClick={()=> handleClick('all')} style={{cursor:'pointer'}} className={`${active === 'all' && 'active'}`}>Tất cả</h6>
                                <div>
                                    <h6 onClick={() => handleClick('coffe')} className ={`${(['coffe','ca-phe-viet-nam','ca-phe-may','cold-brew'].includes(active)) && 'active'}  text-decoration-none`}>Cà phê</h6>
                                    <ul className={`${(['coffe','ca-phe-viet-nam','ca-phe-may','cold-brew'].includes(active)) && 'active'} `}>
                                        <li onClick={() => handleClick('ca-phe-viet-nam')} className={`${active === 'ca-phe-viet-nam' && 'active'} text-decoration-none`}>Cà Phê Việt Nam</li>
                                        <li onClick={() => handleClick('ca-phe-may')} className={`${active === 'ca-phe-may' && 'active'} text-decoration-none`}>Cà Phê Máy</li>
                                        <li onClick={() => handleClick('cold-brew')} className={`${active === 'cold-brew' && 'active'} text-decoration-none`}>Cold Brew</li>
                                    </ul>
                                </div>
                                <div >
                                <h6 onClick={() => handleClick('tea')} className ={`${(['tea','tra-trai-cay','tra-sua-macchiato'].includes(active)) && 'active'} text-decoration-none`}>Trà</h6>
                                    <ul className={`${(['tea','tra-trai-cay','tra-sua-macchiato'].includes(active)) && 'active'} `}>
                                        <li onClick={() => handleClick('tra-trai-cay')} className={`${active === 'tra-trai-cay' && 'active'} text-decoration-none`}>Trà trái cây</li>
                                        <li onClick={() => handleClick('tra-sua-macchiato')} className={`${active === 'tra-sua-macchiato' && 'active'} text-decoration-none`}>Trà sữa Macchiato</li>
                                    </ul>
                                </div>
                                <div >
                                    <h6 onClick={() => handleClick('other')} className ={`${(['other','da-xay','matcha-socola'].includes(active)) && 'active'} text-decoration-none`} >Món khác</h6>
                                    <ul className={`${(['other','da-xay','matcha-socola'].includes(active)) && 'active'}`}>
                                        <li onClick={() => handleClick('da-xay')} className={`${active === 'da-xay' && 'active'} text-decoration-none`}>Đá xay</li>
                                        <li onClick={() => handleClick('matcha-socola')} className={`${active === 'matcha-socola' && 'active'} text-decoration-none`}>Matcha - Sô cô la</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 onClick={() => handleClick('snack')} className ={`${(['snack','banh-man','banh-ngot','banh-snack'].includes(active)) && 'active'} text-decoration-none`} >Bánh & Snack</h6>
                                    <ul className={`${(['snack','banh-man','banh-ngot','banh-snack'].includes(active)) && 'active'} `}>
                                        <li onClick={() => handleClick('banh-man')} className={`${active === 'banh-man' && 'active'} text-decoration-none`}>Bánh mặn</li>
                                        <li onClick={() => handleClick('banh-ngot')} className={`${active === 'banh-ngot' && 'active'} text-decoration-none`}>Bánh ngọt</li>
                                        <li onClick={() => handleClick('snack')} className={`${active === 'banh-snack' && 'active'} text-decoration-none`}>Snack</li>
                                    </ul>
                                </div>
                                <div >
                                    <h6 onClick={() => handleClick('home')} className ={`${(['home','ca-phe-tai-nha','tra-tai-nha'].includes(active)) && 'active'} text-decoration-none`} >Tại nhà</h6>
                                    <ul className={`${(['home','ca-phe-tai-nha','tra-tai-nha'].includes(active)) && 'active'} `}>
                                        <li onClick={() => handleClick('ca-phe-tai-nha')} className={`${active === 'ca-phe-tai-nha' && 'active'} text-decoration-none`}>Cà phê tại nhà</li>
                                        <li onClick={() => handleClick('tra-tai-nha')} className={`${active === 'tra-tai-nha' && 'active'} text-decoration-none`}>Trà tại nhà</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='col-9 d-flex justify-content-center'>
                            <div className='col-11'>
                                <div>
                                    <img className='w-100' src='https://file.hstatic.net/1000075078/file/1920x768-menu-cafe-19k-tch_082c86bc9450424eb2bc1d94e79f2ead_master.jpg' alt='' />
                                </div>
                                <h4 className='my-4'>
                                {
                                    // active === 'coffe' && 'Cà phê tại nhà'                                   
                                }
                                {
                                    // active === 'tea' && 'Trà tại nhà'                                   
                                }
                                
                                </h4>
                                {/* filter in store detail */}
                                {
                                    active === 'all' && (
                                        dataAll.map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                    
                                {/* filter coffe in store detail */}
                                {
                                    active === 'coffe' && (
                                        dataAll.filter(con => {
                                            return (con.name === 'coffe')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'ca-phe-viet-nam' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'ca-phe-viet-nam')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'ca-phe-may' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'ca-phe-may')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }

{
                                    active === 'cold-brew' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'cold-brew')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }

{
                                    active === 'tea' && (
                                        dataAll.filter(con => {
                                            return (con.name === 'tea')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'tra-trai-cay' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'tra-trai-cay')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'tra-sua-macchiato' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'tra-sua-macchiato')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'other' && (
                                        dataAll.filter(con => {
                                            return (con.name === 'other')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'da-xay' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'da-xay')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'matcha-socola' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'matcha-socola')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'snack' && (
                                        dataAll.filter(con => {
                                            return (con.name === 'snack')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'banh-man' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'banh-man')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'banh-ngot' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'banh-ngot')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'banh-snack' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'banh-snack')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'home' && (
                                        dataAll.filter(con => {
                                            return (con.name === 'home')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'ca-phe-tai-nha' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'ca-phe-tai-nha')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                {
                                    active === 'tra-tai-nha' && (
                                        dataAll.filter(con => {
                                            return (con.type === 'tra-tai-nha')
                                        })
                                        .map(item => {
                                           
                                            return (
                                                <>
                                                <h4 className='my-4'>{item.title}</h4>
                                                <div className='row my-3'>
                                                {
                                                    item.data.map(e => {
                                                        return (
                                                           <>                                                
                                                               <div className='col-4'>
                                                                   <div>
                                                                       
                                                                       <div>
                                                                           <img className='w-100 rounded shadow' src={e.image} alt='' />
                                                                       </div>
                                                                       <div className='my-3'>
                                                                           <h6>{e.title}</h6>
                                                                           <h6 style={{color: '#ed8626'}}>{e.price}</h6>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </>
                                                       )
                                                    })
                                                }
                                                </div>
                                                
                                                </>
                                            )
                                           
                                        })
                                        
                                    
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu
