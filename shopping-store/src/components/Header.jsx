import React from 'react'

const style = {
  backgroundColor: '#fefae0',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '283618',
  width: '100%',
}
// for styling use classnames or You can use css in js or you can use modules.css and import
function Header() {
  return (
    <div style={style}>I am Header</div>
  )
}

export default Header
