/* eslint-disable max-len */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { MainContext } from '../../context/Main.context';
import cl from './styles/Header.module.css';
// import standLogo from './standardLogo.png';
// import personalAccountLogo from './personalAccount.png';
// import FlyoutNavBar from './UI/navbar/1/FlyoutNavBar';
// import FlyoutNavBar2 from './UI/navbar/2/FlyoutNavBar2';
// import { UserAccountContext } from '../../context/UserAccount.context';

export default function Header() {
  const {
    open, setOpen, open2, setOpen2, visible, setVisible,
  } = useContext(MainContext);
  const navigate = useNavigate();
  const { openULK, setOpenULK } = useContext(UserAccountContext);

  return (
    <div className={cl.HeaderTotalDiv}>
      <div className={cl.UpperHeaderPart}>
        {/* <img className={cl.navlogo} src={standLogo} alt="sbkomi" onClick={() => { navigate('/'); setOpenULK(false); }} /> */}
        <div className={cl.PersAccDiv}>

          {/* <img className={cl.acclogo} src={personalAccountLogo} alt="sbkomi_account" onClick={() => { navigate('/account'); setOpenULK(true); }} /> */}
          {/* <img className={cl.acclogo} src={personalAccountLogo} alt="sbkomi_account" onClick={() => setVisible(true)} /> */}
        </div>
      </div>
      {openULK === true ? (
        <> </>
      ):(
        <div className={cl.HeaderMenu}>
          <div className={cl.HeaderMenu_main}>
            <div className={cl.MenuElement} onMouseEnter={() => { setOpen(true); }} onMouseLeave={() => { setOpen(false); }}>
              Информация
              {/* <FlyoutNavBar /> */}
            </div>
            <div className={cl.MenuElement} onMouseEnter={() => { setOpen2(true); }} onMouseLeave={() => { setOpen2(false); }}>
              Услуги
              {/* <FlyoutNavBar2 /> */}
            </div>
            {/* <div className={cl.MenuElement} onClick={() => { setOpen(!open); }}>
            Обслуживание
          </div> */}
            <Link to="/contacts" className={cl.MenuElement}><div>Контакты</div></Link>
          </div>
        </div>
      )}

    </div>
  );
}
