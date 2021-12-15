import React from 'react';
import imgzalo from './images/7044033_zalo_icon.png'
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="lh">
                    <h1>LIÊN HỆ</h1>
                </div>
                
                <div className="hotline">
                <div className="hotline1">
                    <p><span>Hotline: 02473098866</span>
                   
                   <span className="hotline1-span">contact@hoc10.vn</span></p>
                    <ul className="hotline2">
                        <li><span><i class="fab fa-facebook-f"></i></span></li>
                        <li><span><i class="fab fa-youtube"></i></span></li>
                        <li><span><i><img src={imgzalo} alt="" /></i></span></li>
                    </ul>
                </div>
                <ul className="hotline3">
                        <li><span></span>Liên hệ</li>
                        <li><span></span>Hướng dẫn kích hoạt</li>
                        <li><span></span>Điều khoản sử dụng</li>
                        <li><span></span>Chính sách bảo mật</li>
                    </ul>

                    <div className="diachi_sonha">
                        <p>©2021 CÔNG TY CỔ PHẦN ONE PERCENT <br />Địa chỉ: Tầng 2, tòa nhà HH-N01, dự án Gold Season, Số 47 đường Nguyễn Tuân, Phường Thanh Xuân Trung, Quận Thanh Xuân, Tp. Hà Nội <br />
                        Số giấy chứng nhận ĐKKD: 0109 621 809 Ngày cấp 6/5/2021 Nơi cấp: Sở KHĐT thành phố Hà Nội
                        <br />
                            Người đại diện: Ông Đào Xuân Hoàng
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
