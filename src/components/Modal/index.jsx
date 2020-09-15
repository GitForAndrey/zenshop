import React from 'react';
import { Modal } from 'antd';
import NormalLoginForm from '../LogInForm';
import RegistrationForm from '../RegisterForm';

const ModalLog = ({
  modalShow,
  CLOSEMODAL,
  SIGNUP,
  CHANGEFORM,
  LOGIN,
  LOGOUT,
  alertForm,
  button,
  whatForm,
}) => {
  return (
    <>
      <Modal
        title={whatForm ? 'Вход' : 'Регистрация'}
        centered
        visible={modalShow}
        onCancel={() => CLOSEMODAL()}
        footer={null}>
        {whatForm ? (
          <NormalLoginForm
            CHANGEFORM={CHANGEFORM}
            LOGIN={LOGIN}
            LOGOUT={LOGOUT}
            alertForm={alertForm}
          />
        ) : (
          <RegistrationForm
            CHANGEFORM={CHANGEFORM}
            SIGNUP={SIGNUP}
            alertForm={alertForm}
            button={button}
          />
        )}
      </Modal>
    </>
  );
};

export default ModalLog;
