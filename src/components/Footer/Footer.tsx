import React from 'react';
import style from './Footer.module.css'
import {Link} from "react-router-dom";
import facebookIcon from '../../common/assets/images/facebookIcon.svg'
import instagramIcon from '../../common/assets/images/instagramIcon.svg'
import vkIcon from '../../common/assets/images/vkIcon.svg'
import googlePlayIcon from '../../common/assets/images/googlePlayIcon.svg'
import appStoreIcon from '../../common/assets/images/appStoreIcon.svg'
import {FooterIcon} from "./FooterIcon/FooterIcon";

export const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.footerMain}>
                <div className={style.leftPart}>
                    <Link to="/" className={style.logo}>React</Link>
                    <div>
                        <div>Присоединяйтесь к нам</div>
                        <div className={style.socialMediaIcons}>
                            <FooterIcon url={"https://www.facebook.com/"} alt={'Facebook logo'} imageSrc={facebookIcon}/>
                            <FooterIcon url={"https://www.instagram.com/"} alt={'Instagram logo'} imageSrc={instagramIcon}/>
                            <FooterIcon url={"https://vk.com/"} alt={'VK logo'} imageSrc={vkIcon}/>
                        </div>
                    </div>
                </div>
                <div className={style.rightPart}>
                    <div>Устанавливайте приложение</div>
                    <div className={style.appDownloadIcons}>
                        <FooterIcon url={"https://pay.google.com/"} alt={'Google Play logo'} imageSrc={googlePlayIcon}/>
                        <FooterIcon url={"https://www.apple.com/"} alt={'App Store logo'} imageSrc={appStoreIcon}/>
                    </div>
                </div>
            </div>

            <div className={style.footerBottom}>
                <a href="https://sionic.ru/">© Sionic</a>
                <a href="http://pravo.gov.ru/" target="_blank">Правовая информация</a>
                <a href="https://policies.google.com/privacy?hl=ru" target="_blank">Политика конфиденциальности</a>
            </div>
        </div>
    );
};
