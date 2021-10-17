import React, { MouseEvent, useState } from 'react';
import axios from 'axios';
import Button from '../../Button/Button';
import { getDataToServer, getIsDisabled } from '../../../store/selectors';
import { useSelector } from 'react-redux';
import { ApiRoutes } from '../../../types/enums';
import { showToast } from '../../../utils/common';
import styles from '../Form.module.scss';
import Spinner from '../../Spinner/Spinner';

const Submit = (): JSX.Element => {
  const isSubmitAllowed = useSelector(getIsDisabled);
  const dataToServer = useSelector(getDataToServer);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsLoading(true);
    axios.post(ApiRoutes.submit, dataToServer)
      .then(() => showToast('Запрос успешно отправлен', false))
      .catch(() => showToast('Ошибка запроса'))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.submit_wrapper}>
      <p className={styles.submit_text}>
        Нажимая кнопку “Запросить демо-доступ” вы принимаете&nbsp;
        <a href={'/#'}>пользовательское соглашение </a> и согласны с&nbsp;
        <a href={'/#'}>правилами использования и обработки персональных данных</a>
      </p>
      <Button
        disabled={!isSubmitAllowed || isLoading}
        onClick={handleClick}
      >
        <span className={styles.submit_button_text_xs}>Запросить демо-доступ</span>
        <span className={styles.submit_button_text_md}>Отправить заявку</span>
      </Button>
      { isLoading && <Spinner /> }
    </div>
  );
};

export default Submit;
