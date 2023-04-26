/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import info from './services/test';
import cl from './MyInfoWidget.module.scss';

// avatar icons
// import male from '../../shared/icons/avatar/male.svg'
// import female from '../../shared/icons/avatar/female.svg'

import open from '../../shared/icons/myinfowidget/arrowDown.svg';
import close from '../../shared/icons/myinfowidget/arrowUp.svg';

export default function MyInfoWidget() {
  const [visible, setVisible] = useState(true);
  const underWrapperClasses = [cl.wrapper];

  if (!visible) {
    underWrapperClasses.push(cl.move_out);
  }
  if (visible) {
    underWrapperClasses.push(cl.move_in);
  }
  return (
    // <div className={cl.overWrapper}>
    <div className={underWrapperClasses.join(' ')}>

      <div className={info.basic_info.gender === 'male' ? cl.myInfoWidget_blockphoto_male : cl.myInfoWidget_blockphoto_female} />
      <p className={cl.myInfoWidget_block_p}>{info.basic_info.second_name}</p>
      <p className={cl.myInfoWidget_block_p}>{info.basic_info.name}</p>
      <p className={cl.myInfoWidget_block_p}>{info.basic_info.email}</p>

      <div className={cl.myInfoWidget_blockprogress_standart}>
        <p>Мой прогресс: 65%</p>
      </div>
      <div className={cl.myInfoWidget_blockbuttons_standart}>
        <button type="button" className={cl.myInfoWidget_blockbuttons_button}>История</button>
        <button type="button" className={cl.myInfoWidget_blockbuttons_button}>Отчеты</button>
        <button type="button" className={cl.myInfoWidget_blockbuttons_button}>Настройки</button>
      </div>
      <img src={visible ? close : open} alt="" className={cl.myInfoWidget_close} onClick={() => setVisible(!visible)} />

    </div>
  // </div>
  );
}
