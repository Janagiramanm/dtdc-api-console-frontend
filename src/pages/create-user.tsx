import next from "next";
import Head from 'next/head'
import SideNav from "../../components/SideNav/SideNav";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import React, {useState} from "react";
import CreateUserBlock from "../../components/CreateUserBlock/CreateUserBlock";

export default function CreateUser(props:any) {

  return (
    <>
      <main>
        <div className={`d-flex`}>
          <SideNav/>
          <div className={`RightPanel`}>
            <HeaderNav/>
            <CreateUserBlock/>
          </div>
        </div>
      </main>
    </>
  )
}