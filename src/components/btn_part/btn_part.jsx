import "./btn_part.css"

import coin_01 from "../../assets/btn_part_img/coin_01.png"
import coin_02 from "../../assets/btn_part_img/coin_02.png"
import energy_01 from "../../assets/btn_part_img/energy.png"
import boost_01 from "../../assets/btn_part_img/boost.png"
import i_znak from "../../assets/btn_part_img/i_znak.png"
import hams_coin_01 from "../../assets/btn_part_img/hamster-coin.png"


export default function btn_part() {
    return (
        <>
            <div className="all_hams">
                <div className="hams_manu">
                    <div className="hams_menu_part_01">
                        <p className="hams_menu_P" id="pribl">Прибыль за тап</p>
                        <div className="img_menu_part_coin">
                            <img src={coin_01} alt="" className="hams_coin001"/>
                            <p className="sum_cin_part">+15</p>
                        </div>
                    </div>
                    <div className="hams_menu_part_01">
                        <p className="hams_menu_P" id="monet">Монет для апа</p>
                        <div className="img_menu_part_coin">
                            <p className="sum_cin_part">35K</p>
                        </div>
                    </div>
                    <div className="hams_menu_part_01">
                        <p className="hams_menu_P" id="chas">Прибыль в час</p>
                        <div className="img_menu_part_coin">
                            <img src={coin_01} alt="" className="hams_coin001"/>
                            <p className="sum_cin_part">+15</p>
                            <img src={i_znak} alt="" className="hams_coin001"/>
                        </div>
                    </div>
                </div>
                <div className="hams_sum">
                    <img src={coin_02} alt="" className="Coin_sum_001"/>
                    <h1 className="coin_sum">3 300 003 300</h1>
                </div>
                <div className="hams_line">
                    <div className="up_hams_line">
                        <p className="level_p_01">Lord</p>
                        <p className="level_p_01">Level 9/10</p>
                    </div>
                    <div className="div_line_01"></div>
                </div>
                <div className="hams_clickk">
                    <img src={hams_coin_01} alt="" className="Big_coin_01"/>
                </div>
                <div className="hams_energy">
                    <div className="energy">
                        <img src={energy_01} alt="" className="Finish_img" />
                        <p className="boost_P_01">10000 / 15000</p>
                    </div>
                    <div className="boost">
                        <img src={boost_01} alt="" className="Finish_img" />
                        <p className="boost_P_01">Boost</p>
                    </div>
                </div>
            </div>
        </>
    )
}
