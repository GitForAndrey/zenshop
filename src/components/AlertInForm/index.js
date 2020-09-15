import React, { useState } from 'react';
import { Container } from './style';
function AlertInForm({ alertForm }) {
  return (
    <Container>
      {alertForm.text} {alertForm.type}
    </Container>
  );
}

export default AlertInForm;
