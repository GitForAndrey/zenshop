import React, { useState } from 'react';
import { Modal } from 'antd';
import NormalLoginForm from '../LogInForm';
import RegistrationForm from '../RegisterForm';

const ModalLog = ({ modalShow, CLOSEMODAL }) => {
  const [form, changeForm] = useState(true);

  const onLinkClick = (arg, e) => {
    e.preventDefault();
    changeForm(arg);
  };
  return (
    <>
      <Modal
        title={form ? 'Вход' : 'Регистрация'}
        centered
        visible={modalShow}
        onCancel={() => CLOSEMODAL()}
        footer={null}>
        {form ? (
          <NormalLoginForm onLinkClick={onLinkClick} />
        ) : (
          <RegistrationForm onLinkClick={onLinkClick} />
        )}
      </Modal>
    </>
  );
};

export default ModalLog;
