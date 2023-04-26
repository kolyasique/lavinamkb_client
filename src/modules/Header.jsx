/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { MainContext } from '../../context/Main.context';

import lavinaOprk from '../shared/logo/lavinaOprkLogo.svg';
import chatLogo from '../shared/icons/header/messages.svg';
import noteLogo from '../shared/icons/header/notifications.svg';

import cl from '../shared/styles/HeaderStyles.module.scss';

export default function Header() {
  // const {
  //   open, setOpen, open2, setOpen2, visible, setVisible
  // } = useContext(MainContext)
  // const navigate = useNavigate()
  // const { openULK, setOpenULK } = useContext(UserAccountContext)

  return (
    <div className={cl.wrapper}>
      <div className={cl.header}>

        <div className={cl.header_block_left}>
          <img src={lavinaOprk} className={cl.header_logo_standart} alt="avatar" />
          <img src={chatLogo} className={cl.header_logo_chat} alt="messages" title="Сообщения" />
          <img src={noteLogo} className={cl.header_logo_note} alt="notifications" title="Уведомления" />
        </div>

        <div className={cl.header_block_right}>
          <button type="button">Войти</button>
        </div>

      </div>
    </div>
  );
}
