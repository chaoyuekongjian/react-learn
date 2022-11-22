import React from 'react'
import Layout from '../../components/Layout/index'
import Header from '../../components/Header/index'
import Menu from '../../components/Menu/index'
import {Outlet} from "react-router-dom";

export default function Admin() {
  return (
    <Layout
      header={<Header />}
      aside={<Menu />}
    >
      <Outlet />
    </Layout>
  )
}
