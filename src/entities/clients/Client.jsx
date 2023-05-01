/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';

import cl from './styleClient.module.scss';

import active from '../../shared/icons/clients/powerGreen.svg';
import stop from '../../shared/icons/clients/powerYellow.svg';
import finish from '../../shared/icons/clients/powerRed.svg';
import in_process from '../../shared/icons/clients/complaint-round-svgrepo-com.svg';

import contractIcon from '../../shared/icons/clients/contract.svg';

export default function Client({ el }) {
  return (
    <div className={cl.workspace_resultpolygon_client}>
      <div className={cl.resultPolygon_header}>
        <div className={cl.resultPolygon_header_clientName}>{el.name}</div>
        {Array.isArray(el.contracts) ? el.contracts.map((contract) => (

          <div className={cl.resultPolygon_header_contract}>
            <img src={contractIcon} alt="Договор" className={cl.resultPolygon_header_contract_icon} />
            <p>{contract}</p>
          </div>

        )) : (
          <div className={cl.resultPolygon_header_contract}>{el.contracts}</div>
        )}
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
          <div className={cl.resultpolygon_objects_element}>
            <div className={cl.objects_element_status}>
              {elt.status === 'active'
                ? (<img src={active} className={cl.objects_element_status_icon} alt="active" />) : (
                  elt.status === 'finished' ? (<img src={finish} className={cl.objects_element_status_icon} alt="finished" />) : (
                    elt.status === 'stop' ? (<img src={stop} className={cl.objects_element_status_icon} alt="stop" />) : (<img src={in_process} className={cl.objects_element_status_icon} alt="in process" />)
                  )
                )}
            </div>
            <div className={cl.objects_element_pults}>
              {
            Array.isArray(elt.pult) ? elt.pult.map((pult) => (
              <p className={cl[`resultpolygon_objects_element_${elt.status}`]}>{pult}</p>))
              : <p className={cl[`resultpolygon_objects_element_${elt.status}`]}>{elt.pult}</p>
            }
            </div>
            <div>Магазин</div>
            <div />
            <div>{elt.name}</div>
            <div>
              <button>История взаимодействия</button>
              <button>Документы</button>
              <button>Карточка</button>
              <button>Документы</button>
              <button>Приостановить</button>
              <button>В архив</button>
              <button>Редактировать</button>
              <button>Добавить заявку</button>
            </div>
            <p />
            <h6>Объект: </h6>

          </div>
        ))}
      </div>
    </div>
  );
}
