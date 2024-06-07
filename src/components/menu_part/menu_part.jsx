import { Container, Row } from "react-bootstrap"
import hamyak_btn from "../../assets/img_menu_part/hamyak_menu.png"
import kirka_btn from "../../assets/img_menu_part/mayning.png"
import friends_btn from "../../assets/img_menu_part/friends.png"
import money_btn from "../../assets/img_menu_part/money.png"
import airdrop_btn from "../../assets/img_menu_part/airdrop.png"

import "./menu_part.css"

export default function menu_part() {
    return (
        <>
            <Container>
                <Row>
                    <div className="allbtn_part">
                        <div className="btn_part_01">
                            <img src={hamyak_btn} alt="" className="menupart_btn" />
                        </div>
                        <div className="btn_part_01">
                            <img src={kirka_btn} alt="" className="menupart_btn" />
                        </div>
                        <div className="btn_part_01">
                            <img src={friends_btn} alt="" className="menupart_btn" />
                        </div>
                        <div className="btn_part_01">
                            <img src={money_btn} alt="" className="menupart_btn" />
                        </div>
                        <div className="btn_part_01">
                            <img src={airdrop_btn} alt="" className="menupart_btn" />
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}
