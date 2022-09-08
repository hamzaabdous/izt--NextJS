
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram,FaTwitter,FaTiktok } from 'react-icons/fa';


function SideBar() {
    return (
        <Container className='side-bar postion-relative '>
            <div className='position-absolute pt-20' style={{ width: '35px', left: '2%' }}>
                <div className="widget no-box" >
                    <h6 className="widget-title mx-auto" style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed'
                    }}>Follow us on<span></span></h6>

                    <ul className="social-footer2">
                        <li className=""><a title="tiktok" target="_blank" href="https://www.tiktok.com/">  <FaTiktok style={{ fontSize: '20px', color: '#fff' }} /></a></li>
                        <li className=""><a href="https://www.facebook.com/" target="_blank" title="Facebook"> <FaFacebook style={{ fontSize: '20px', color: '#fff' }} /></a></li>
                        <li className=""><a href="https://twitter.com" target="_blank" title="Twitter"><FaTwitter style={{ fontSize: '20px', color: '#fff' }} /></a></li>
                        <li className=""><a title="instagram" target="_blank" href="https://www.instagram.com/"><FaInstagram style={{ fontSize: '20px', color: '#fff' }} /></a></li>
                    </ul>
                </div>
            </div >
        </Container>


    );
}

export default SideBar;