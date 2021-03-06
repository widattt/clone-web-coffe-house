import React from 'react'
import { dataCoffee } from '../dataCoffee'
import { dataTea } from '../dataTea'
import './CommonContainer.css'

function CommonContainer({props}) {
    return (       
       <div>
            <div className='banner'>
                <img src = 'https://file.hstatic.net/1000075078/file/des_288x700_cpg-combo-qua-tet_2ee88e1f1b654190a93cf2dc457c5dfa_master_bbc77fc0fb424e78982ae59da775166b_master.jpg' className='w-100' alt='' />
            </div>
            <div className='container mt5'>
                <h4 className='mt-3'>{props.title}</h4>
                <div className='row mt4 mb-5'>
                   {props.dataCoffee && (
                        props.dataCoffee.map((item, index) => {
                            return (
                                <div key={index} className='col-3 mb-2'>
                                    <a href='' className='wrap_img_item_coffee'>
                                        <img src={item.image} className='w-100 shadow' />
                                    </a>
                                    <div className='info_item_coffee'>
                                        <a href='' className='mt-3'>{item.title}</a>
                                        {
                                            index === 0 ? <a style={{color: `${index === 0 ? '#ed8225' : ''}`}}>{item.price}</a> :
                                            <p className='text-muted'>{item.price}</p>
                                        }
                                        
                                    </div>
                                </div>
                            )
                        })
                        )
                    }
                    {props.dataTea && (
                        props.dataTea.map((item, index) => {
                            return (
                                <div key={index} className='col-3 mb-2'>
                                    <a href='' className='wrap_img_item_coffee'>
                                        <img src={item.image} className='w-100 shadow' />
                                    </a>
                                    <div className='info_item_coffee'>
                                        <a href='' className='mt-3'>{item.title}</a>
                                        {
                                            index === 0 ? <a style={{color: `${index === 0 ? '#ed8225' : ''}`}}>{item.price}</a> :
                                            <p className='text-muted'>{item.price}</p>
                                        }
                                        
                                    </div>
                                </div>
                            )
                        })
                        )
                    }
                </div>
            </div>
            {/* <div className='banner'>
                <img src = 'https://file.hstatic.net/1000075078/file/des_288x700_cpg-combo-qua-tet_2ee88e1f1b654190a93cf2dc457c5dfa_master_bbc77fc0fb424e78982ae59da775166b_master.jpg' className='w-100' alt='' />
            </div>
            <div className='container mt-5'> 
                <h4 className='mt-3'>C?? Ph?? T???i Nh??</h4>
                <div className='row mt-4 mb-5'>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>Combo Q??a T???t 2022</a>
                            <a style={{color: '#ed8225'}}>249.000 ??</a>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? S???a ???? H??a Tan ?????m V??? H???p 18 g??i x 16gr</a>
                            <p className='text-muted'>48.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/combo-3-hop-ca-phe-sua-da-hoa-tan-dam-vi_5bfc3fb23ebd4ec88f17c08794617b96_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>Combo 3 H???p C?? Ph?? S???a ???? H??a Tan ?????m V??? H???p 18 g??i x 16gr</a>
                            <a style={{color: '#ed8225'}}>109.000 ??</a>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_400x400_08af198ffd3b4107a1843a2e44e3e8be_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? S???a ???? H??a Tan H???p 10 g??i</a>
                            <p className='text-muted'>44.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/combo-3cfsd-nopromo_320619_400x400_29c134e6f3a8485d88d5d28a79a82f69_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? Rang Xay Original 1 250gr</a>
                            <a style={{color: '#ed8225'}}>60.000 ??</a>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/2combo2-cforiginal-1_da7ae7afcce047aab54d95699f3c98e0_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? Peak Flavor H????ng Th??m ?????nh Cao 350gr</a>
                            <p className='text-muted'>90.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/rich-finish-nopromo_485968_400x400_9662f8762f5e4adeb7616cb33a4ac5c3_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? Rich Finish Gu ?????m Tinh T??? 350gr</a>
                            <p className='text-muted'>90.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/arabica_1_109041_400x400_4b9c43c475574627b6615a70f2ef9086_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? Arabica</a>
                            <p className='text-muted'>100.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? Arabica</a>
                            <p className='text-muted'>100.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/24-lon-cpsd_225680_400x400_331b2b7d4f21460a833bfe4cdf6452fa_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>Th??ng 24 Lon C?? Ph?? S???a ????</a>
                            <a style={{color: '#ed8225'}}>336.000 ??</a>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/p6-lon-3in1_717216_400x400_1afcd0cb780e4749b8a638a839f61c99_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? ph?? s???a ???? pack 6 lon</a>
                            <p className='text-muted'>84.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>C?? Ph?? S???a ???? H??a Tan T??i 25 x 22gr</a>
                            <p className='text-muted'>99.000 ??</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href='' className='wrap_img_item_coffee'>
                            <img src='https://product.hstatic.net/1000075078/product/combo-3cfsd-nopromo_320619_400x400_29c134e6f3a8485d88d5d28a79a82f69_large.jpg' className='shadow' alt='' />
                        </a>
                        <div className='info_item_coffee'>
                            <a href='' className='mt-3'>Combo 3 H???p C?? Ph?? S???a ???? H??a Tan</a>
                            <p className='text-muted'>109.000 ??</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default CommonContainer
