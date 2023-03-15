import next from "next";
import Head from 'next/head'
import SideNav from "../../components/SideNav/SideNav";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import React, {useState} from "react";
import CreateUserBlock from "../../components/CreateUserBlock/CreateUserBlock";
import { ApiService } from "../../services/api.service";

export default function CreateUser(props:any) {

  
  return (
    <>
      <main>
        <div className={`d-flex`}>
          <SideNav/>
          <div className={`RightPanel`}>
            <HeaderNav/>
            <CreateUserBlock custType={props.custType} threshold={props.threshold}/>
          </div>
        </div>
      </main>
    </>
  )
}
export async function getServerSideProps() {

  const baseUrl = new ApiService();
  const response = await fetch(baseUrl.getBaseUrl() + `/get-customer-type`);
  const custType = await response.json();

  const resThreshold = await fetch(baseUrl.getBaseUrl() + `/api-threshold`);
  const threshold = await resThreshold.json();

   return { props: {custType, threshold}}

}
