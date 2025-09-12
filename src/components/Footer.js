import React from 'react'

export default function 
Footer() {
  const footerStyle={
    position: "relative",
    width: "100%",
    top: "100vh",
    border: "2px solid green"
  }
  return (
    <footer className=" bg-dark text-light my-3 py-3" style={footerStyle}>
        <p className="text-center">
          Copyright &copy; MyTodolist.com
        </p>
    </footer>
  )
}
