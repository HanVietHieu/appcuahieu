import React from 'react';
import Slick from './Slick'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from 'react-bootstrap';
import img_supham from './images/supham.png'
import img_suphamhcm from './images/suphamtphcm.png'
import mokey from './images/monkey.png'
import vepic from './images/vepic.png'
import './text.css'

const Text = () => {
    return (
        <>
            <div className="container main-text">
            <h1 style={{textAlign:"center", fontSize: "58px", paddingTop: "20px", fontFamily: "tahoma"}}>BLOG</h1>
            <div className="text">
                <h1>CÁC ĐƠN VỊ TỔ CHỨC BIÊN SOẠN, XUẤT BẢN</h1>
                <p>Bộ sách giáo khoa Cánh Diều (gồm sách giấy và phiên bản điện tử) do NXB Đại học Sư phạm, NXB Đại học Sư phạm TP. Hồ Chí Minh, Monkey - Tiếng Anh cho mọi trẻ em và Công ty cổ phần One Percent phối hợp tổ chức biên soạn, xuất bản theo Chương trình Giáo dục phổ thông 2018.</p>
                </div>
                <div className="row logo">
                    <div className="col-lg-3">
                        <div>
                            <img src={img_supham} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <img src={img_suphamhcm} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <img src={mokey} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <img src={vepic} alt="" />
                        </div>
                    </div>
                    <span></span>

                    <div className="text">
                <h1>Ý NGHĨA TÊN GỌI “CÁNH DIỀU”</h1>
                <p>“Cánh Diều” gắn với tuổi học trò nhiều ước mơ bay bổng. Các bài học trong sách gắn với thực tiễn cuộc sống như cánh diều gắn với mặt đất bằng dây diều, “Mang cuộc sống vào bài học – Đưa bài học vào cuộc sống”. Bộ sách tạo cơ hội cho học sinh bay cao trên bầu trời tri thức bao la như diều gặp gió.</p>
                </div>
                <span></span>

                
                </div>
            </div> 
            <div className="dky">
                <h1>Đăng ký ngay <br /> để kích hoạt sách</h1>
                <button>ĐĂNG KÝ</button> 
            </div> 
            <div className="container tacgia">
            <div className="tacgiadiv"></div>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src="https://hvegjijo7jobj.vcdn.cloud/upload/web/background-web/img-selection-home-2-01.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <div className="text1">
                                <h1>TÁC GIẢ</h1>
                                <p>Tác giả bộ sách Cánh Diều là những nhà giáo, nhà khoa học tâm huyết và giàu kinh nghiệm, trong đó có tác giả là Tổng Chủ biên Chương trình Giáo dục phổ thông 2018 và nhiều tác giả là thành viên Ban Phát triển Chương trình tổng thể, Ban Phát triển các chương trình môn học thành lập theo Quyết định của Bộ trưởng Bộ GDĐT.</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    
                    <div className="col-lg-6">
                        <div>
                            <div className="text1">
                                <h1>TÁC GIẢ</h1>
                                <p>Tác giả bộ sách Cánh Diều là những nhà giáo, nhà khoa học tâm huyết và giàu kinh nghiệm, trong đó có tác giả là Tổng Chủ biên Chương trình Giáo dục phổ thông 2018 và nhiều tác giả là thành viên Ban Phát triển Chương trình tổng thể, Ban Phát triển các chương trình môn học thành lập theo Quyết định của Bộ trưởng Bộ GDĐT.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://hvegjijo7jobj.vcdn.cloud/upload/web/background-web/img-selection-home-2-01.png" alt="" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-6">
                        <div>
                            <img src="https://hvegjijo7jobj.vcdn.cloud/upload/web/background-web/img-selection-home-2-01.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <div className="text1">
                                <h1>TÁC GIẢ</h1>
                                <p>Tác giả bộ sách Cánh Diều là những nhà giáo, nhà khoa học tâm huyết và giàu kinh nghiệm, trong đó có tác giả là Tổng Chủ biên Chương trình Giáo dục phổ thông 2018 và nhiều tác giả là thành viên Ban Phát triển Chương trình tổng thể, Ban Phát triển các chương trình môn học thành lập theo Quyết định của Bộ trưởng Bộ GDĐT.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <div className="text1">
                                <h1>TÁC GIẢ</h1>
                                <p>Tác giả bộ sách Cánh Diều là những nhà giáo, nhà khoa học tâm huyết và giàu kinh nghiệm, trong đó có tác giả là Tổng Chủ biên Chương trình Giáo dục phổ thông 2018 và nhiều tác giả là thành viên Ban Phát triển Chương trình tổng thể, Ban Phát triển các chương trình môn học thành lập theo Quyết định của Bộ trưởng Bộ GDĐT.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://hvegjijo7jobj.vcdn.cloud/upload/web/background-web/img-selection-home-2-01.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Text;
