
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';


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
                        <li className=""><a title="linkedin" target="_blank" href="https://www.linkedin.com/company/87206089">  <FaLinkedin style={{ fontSize: '20px', color: '#fff' }} /></a></li>
                        <li className=""><a href="https://www.facebook.com/IZT.tours/" target="_blank" title="Facebook"> <FaFacebook style={{ fontSize: '20px', color: '#fff' }} /></a></li>
                        <li className=""><a title="instagram" target="_blank" href="https://www.instagram.com/interville.zeroual/?igshid=YmMyMTA2M2Y%3D"><FaInstagram style={{ fontSize: '20px', color: '#fff' }} /></a></li>
                    </ul>
                </div>
            </div >
        </Container>


    );
}

export default SideBar;