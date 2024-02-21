import React from 'react'
import SidebarBtnElement from './SidebarBtnElement'
import { FormElements } from './FormElements'

function FormElementsSidebar() {
  return (
    <>
     Elements
        <SidebarBtnElement formElement={FormElements.TextField}/>
    </>
  )
}

export default FormElementsSidebar