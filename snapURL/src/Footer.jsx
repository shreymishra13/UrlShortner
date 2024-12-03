import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'
export default function Footer() {
    return (
        <div id='footer' className='container-fluid text-center' style={{backgroundColor:'#6A1E55'}}>

            <div className="row p-5">
                <div className="col">
                    <h2>Address</h2>
                    <p>
                        194 G, Pardewanpur <br />
                        Lal Bangla , Kanpur <br />
                        India - 208007
                    </p>
                </div>
                <div className="col">
                <div className="container">
                    <div className="row">
                    <h3>Copyright is reserved &copy;</h3>
                    </div>
                    <div className="row mt-5 ">
                    <span class="arizonia-regular">Shrey Mishra❤️</span>
                    </div>
                </div>
                

                </div>
                <div className="col">
                    <h2>
                        Let us Connect!
                    </h2>
                    <ul id="logo" className='text-center'>
                        <li>
                            <a href='https://wa.me/+918957183030' target='_blank'>
                                <i class="bi bi-whatsapp text-white"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shrey-mishra-250b3b222/" target='_blank'>
                                <i class="bi bi-linkedin  text-white"></i>
                            </a></li>
                        <li>
                            <a href="mailto:mishra.shrey001@gmail.com" target='_blank'>
                                <i class="bi bi-envelope-at-fill  text-white"></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://x.com/MishraShrey001' target='_blank'>
                                <i class="bi bi-twitter-x  text-white"></i>
                            </a></li>
                    </ul>
                </div>
            </div>





        </div>
    )
}
