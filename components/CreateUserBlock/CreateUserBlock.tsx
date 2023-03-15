import styles from "./CreateUserBlock.module.scss"
import Link from "next/link";
import { SetStateAction, useState } from "react";
import $ from "jquery"
import axios from 'axios';
import { useRouter } from 'next/router';
// import DatePicker from "react-datepicker";
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateUserBlock({custType, threshold}:any) {

    console.log('TREEEE==',threshold)

    const [divClose, setDivclose] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [customerType, setCustomerType] = useState('');
    const [period, setPeriod] = useState('');
    const [thresholdValue, setThresholdValue] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
        // const [customerName, setCustomerName] = useState('');
    // const [customerName, setCustomerName] = useState('');
    // const [customerName, setCustomerName] = useState('');
    const router = useRouter();

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        var formData = {
            "customer_name": customerName,
            "customer_email": customerEmail,
            "api_count":thresholdValue,
            "period":period,
            "customer_type":customerType,
            "used_count":"",
            "available_count":"",
            "start_date":"2023-03-04",
            "expiry_date":"2023-04-04",
            "api_threshold":{
                    "1":"Tracking No",
                    "2":"Refrence No",
                    "3":"Last Status Date",
                    "4":"Last Status",
                    "5":"Booking Date",
                    "6":"Origin"       
            },            
            "environment": process.env.NEXT_PUBLIC_API_ENV
        }
        
        try {
          const response = await axios.post('http://localhost:3001/api/createCustomer', formData);
          if(response){
            // setTrackRes(response.data)
           
                router.push('/');
            
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    console.log('Name==',customerName);
    console.log('Type==',customerType);
    return (
       <div className={styles.CreateUserBlock}>
            <div className={`container-fluid px-4`}>
                <div className={styles.HeaderTitle}>
                    <div className={`row`}>
                        <div className={`col-6`}>
                            <h3>Create Customer</h3>
                        </div>
                        <div className={`col-6 text-end`}>
                            <Link href={`/`}>View Customer</Link>
                        </div>
                    </div>
                </div>
            </div>

           <div className={`container-fluid px-4`}>
              <div className={styles.CreateForm}>
                  <div className={`row`}>
                      <div className={`col-md-8`}>
                          <div className={`row pt-2`}>
                              <div className={`col-md-6`}>
                                  <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Customer Name</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1"
                                             placeholder="Customer Name" onChange={(event)=>setCustomerName(event.target.value)}/>
                                  </div>

                              </div>
                              <div className={`col-md-6`}>
                                    <div className="mb-3">
                                       <label htmlFor="exampleFormControlInput1" className="form-label">Customer Type</label>
                                       <select  className="form-control" id="exampleFormControlInput1"
                                             placeholder="Customer Type" onChange={(event)=>setCustomerType(event.target.value)}>
                                                 <option value=''>Select Customer Type</option>
                                                {custType?.data?.map((element:any, index:any)=>(
                                                    <option value={element.id} key={index}>{element.customer_type}</option>
                                                ))}
                                        </select>
                                    </div>
                              </div>
                          </div>
                          <div className={`row pt-2`}>
                              <div className={`col-md-6`}>
                                  <div className="mb-3">
                                      <label htmlFor="customer_email" className="form-label">Custmoer Email</label>
                                      <input type="email" className="form-control" id="customer_email"
                                             placeholder="courier@dtdc.com" onChange={(event)=>setCustomerEmail(event.target.value)}/>
                                  </div>

                              </div>
                              
                              <div className={`col-md-6 d-flex justify-content-between`}>
                                  <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Threshold Period</label>
                                      <div className={`d-flex justify-content-between align-items-center`}>
                                          <select  className="form-control" id="exampleFormControlInput1"
                                             placeholder="Select Period" onChange={(event)=>setPeriod(event?.target.value)}>
                                                   <option value=''>Select Period</option>
                                                    <option value='daily' >Daily</option>
                                                    <option value='weekly' >Weekly</option>
                                                    <option value='monthly' >Monthly</option>
                                                    <option value='yearly' >Yearly</option>
                                               
                                        </select>
                                         
                                      </div>
                                  </div>
                                  <div className="mb-3">
                                          <label htmlFor="exampleFormControlInput1" className="form-label">Threshold Value</label>
                                          <input  className="form-control" id="exampleFormControlInput1"
                                                  placeholder=" " onChange={(event)=>setThresholdValue(event?.target.value)} />
                                    </div>
                              </div>
                          </div>
                          <div className={`row pt-2`}>
                               <div className={`col-md-6`}>
                                  <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">API Key</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1"
                                             placeholder="API Key" disabled/>
                                  </div>

                              </div>
                              <div className="col-md-6">
                              {/* <DatePicker onChange={(event:any)=>setSelectedDate(event.target.value)} value={selectedDate} /> */}
                              {/* <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                /> */}
                              </div>
                          </div>
                          <div className={`row pt-2`}>
                             
                                  {threshold?.map((element:any,index:any)=>{
                                        let checked = false;
                                        if(element.active == 1 ){
                                             checked = true;
                                        }
                                        return( 
                                            <div className={`col-md-4`} key={index}>
                                                <div className="form-check" >
                                                
                                                    <input className="form-check-input" type="checkbox" value={element.id}  id="flexCheckDefault" checked={checked} />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">{element.name}</label>
                                                </div>
                                            </div>
                                            
                                        );
                                     })}
                              
                          </div>
                          
                          <div className={`accordion  ${styles.advancedSettings}`} id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Advanced Settings
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className={`row `}>
                                                        <div className="form-check" >
                                                            <input className="form-check-input" type="checkbox" value={'ip_address'}  id="flexCheckDefault"/>
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">Ip Address based tracking</label>
                                                        </div>
                                                </div>
                                                <div className={`row `}>
                                                        <div className="form-check" >
                                                            <input className="form-check-input" type="checkbox" value={'ip_address'}  id="flexCheckDefault"/>
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">Domain name based tracking</label>
                                                        </div>
                                                  
                                                </div>
                                            </div>
                                    </div>
                                </div>
                          </div>
                          <div className={`row pt-2`}>
                              <div className={`col-12`}>
                                  <button className={`btn btn-primary`} onClick={handleSubmit}>Create</button>
                              </div>
                          </div>
                      </div>
                     
                  </div>
              </div>
           </div>

       </div>
    )
}
