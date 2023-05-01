/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';

import cl from '../shared/styles/WorkSpace.module.scss';

import clients from './test_data/clients';

import Client from '../entities/clients/Client';

export default function WorkSpace() {
  return (
    <div className={cl.wrapper}>

      <div className={cl.workSpace_panel}>

        <div className={cl.workSpace_panel_left}>
          <button type="button" className={cl.workSpace_panel_left_button}>Добавить</button>
          <button type="button" className={cl.workSpace_panel_left_button}> Убавить</button>
          <button type="button" className={cl.workSpace_panel_left_button}>Подбаавить</button>
        </div>

        <div className={cl.workSpace_panel_middle}>Центральная часть</div>

        <div className={cl.workSpace_panel_right}>
          <input type="text" />
          <span>Поиск по ИНН названию адресу</span>
          <button type="button">Уволить</button>
        </div>
      </div>

      <div className={cl.workspace_resultpolygon}>

        {clients?.map((el) => (
          <Client el={el} />
        ))}

      </div>

    </div>
  );
}
