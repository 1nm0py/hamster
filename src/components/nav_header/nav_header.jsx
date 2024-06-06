import {  Container, Row } from "react-bootstrap";
import hamyak_01 from "../../assets/img_nav/hamyak_01.png"
import hamyak_02 from "../../assets/img_nav/hamyak_02.png"

import "./nav_header.css"

export default function nav_header() {
    return (
        <>
            <Container>
                <Row>
                    <div className="all">
                        <div className="div_nick">
                            <img src={hamyak_01} alt="" className="nick_img" />

                            <h2 className="h2_nick">SurName Name</h2>
                        </div>
                        <div className="div_btn">
                            <img src={hamyak_02} alt="" className="btn_img" />

                            <h2 className="btn_h2">Сменить биржу</h2>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}
