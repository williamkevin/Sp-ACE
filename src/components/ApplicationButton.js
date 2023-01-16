import React from 'react'
import Button from 'react-bootstrap/Button';

const ApplicationButton = () => {
  return (
    <div className="d-grid gap-2">
    <Button href="/Chatting" variant="secondary" size="lg">
      채팅 신청
    </Button>
  </div>
  )
}

export default ApplicationButton