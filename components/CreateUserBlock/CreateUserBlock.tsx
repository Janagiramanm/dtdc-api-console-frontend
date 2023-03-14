import styles from "./CreateUserBlock.module.scss"
import Link from "next/link";

export default function CreateUserBlock() {
    return (
       <div className={styles.CreateUserBlock}>
            <div className={`container-fluid px-4`}>
                <div className={styles.HeaderTitle}>
                    <div className={`row`}>
                        <div className={`col-6`}>
                            <h3>Create Customer</h3>
                        </div>
                        <div className={`col-6 text-end`}>
                            <Link href={`#`}>View Customer</Link>
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
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1"
                                             placeholder="Customer Name" />
                                  </div>

                              </div>
                              <div className={`col-md-6`}>
                                  <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Customer Type</label>
                                      <select  className="form-control" id="exampleFormControlInput1"
                                             placeholder="Customer Type" />
                                  </div>

                              </div>
                          </div>
                          <div className={`row pt-2`}>
                              <div className={`col-md-6`}>
                                  <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">API Key</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1"
                                             placeholder="API Key" />
                                  </div>

                              </div>
                              <div className={`col-md-6 d-flex justify-content-between`}>
                                  <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">API Threshold</label>
                                      <div className={`d-flex justify-content-between align-items-center`}>
                                          <input  className="form-control mr-2 " id="exampleFormControlInput1"
                                                  placeholder="" />
                                          <input  className="form-control" id="exampleFormControlInput1"
                                                  placeholder=" " />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className={`row pt-2`}>
                              <div className={`col-md-4`}>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>

                              </div>
                              <div className={`col-md-4`}>

                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                              </div>
                              <div className={`col-md-4`}>

                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value=""  id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                                  </div>
                              </div>
                          </div>

                          <div className={`row pt-2`}>
                              <div className={`col-12`}>
                                  <button className={`btn btn-primary`}>Create</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>

       </div>
    )
}
