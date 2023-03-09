import React, { useEffect } from "react";

export class ApiService {
    public getBaseUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         return "http://localhost:8080";
      }else{
         return "";
      }
         
    }

    
}