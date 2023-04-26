import React from 'react';

import cl from '../shared/styles/SideMenuStyles.module.scss';
import MyInfoWidget from '../widgets/MyInfoWidget/MyInfoWidget';

export default function SideMenu() {
  return (
    <aside className={cl.sideMenu_block_standart}>
      <MyInfoWidget />
      <div className={cl.sideMenu_element_standart}>Главная</div>
      <div className={cl.sideMenu_element_standart}>Задачи</div>
      <div className={cl.sideMenu_element_standart}>Клиенты</div>
      <div className={cl.sideMenu_element_standart}>Объекты</div>
      <div className={cl.sideMenu_element_standart}>Календарь</div>
      <div className={cl.sideMenu_element_standart}>Чат</div>
      <div className={cl.sideMenu_element_standart}>Сотрудники</div>
      <div className={cl.sideMenu_element_standart}>Прогресс</div>
      <div className={cl.sideMenu_element_standart}>Конструктор документов</div>
      <div className={cl.sideMenu_element_standart}>nyhb</div>
      <div className={cl.sideMenu_element_standart}>nhbtgv</div>
      <div>bhtgvfvbgt</div>
    </aside>
  );
}
