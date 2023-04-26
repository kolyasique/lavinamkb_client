import React from 'react';

import cl from '../shared/styles/WorkSpace.module.scss';

import clients from './test_data/clients';

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

          <div className={cl.workspace_resultpolygon_client}>
            <div className={cl.resultPolygon_header}>
              <div className={cl.resultPolygon_header_clientName}>{el.name}</div>
            </div>
            <div className={cl.resultPolygon_main}>
              <div className={cl.resultpolygon_client_info}>
                <p>{`Количество объектов ${el.objects.length}`}</p>
              </div>

              <div className={cl.resultpolygon_client_widget}>
                <button type="button" className={cl.resultpolygon_client_widget_button}>Расторжение</button>
                <button type="button" className={cl.resultpolygon_client_widget_button}>Приостановка</button>
                <button type="button" className={cl.resultpolygon_client_widget_button}>Редактировать</button>
                <button type="button" className={cl.resultpolygon_client_widget_button}>Добавить документ</button>
              </div>
            </div>
            <div className={cl.resultpolygon_client_objects}>
              {el.objects.map((elt) => (
                <div className={cl[`resultpolygon_objects_element_${elt.status}`]}>
                  <h6>{`Объект: ${elt.name}`}</h6>
                  <p>{`Пультовой номер: ${elt.pult}`}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
