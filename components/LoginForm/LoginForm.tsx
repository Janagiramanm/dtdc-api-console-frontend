import styles from "./LoginForm.module.scss"

export default function LoginForm() {
    return (
        <div className={styles.LoginForm}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-md-6`}>
                        <div className={styles.LoginLogo}>
                           <img src={`./images/logo.png`} />
                        </div>
                    </div>
                </div>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-12 text-center`}>
                        <h3>Sign in to dashboard</h3>
                    </div>
                </div>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-md-5`}>
                        <div className={styles.LoginCard}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput"
                                       placeholder="User ID" />
                                    <label htmlFor="floatingInput">User ID</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="d-grid mt-3 gap-2 mx-auto">
                                <button type="button" className="btn btn-lg btn-primary ">Login</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-md-5 text-center pt-4`}>
                        <p className={`text-white`}>© Copyright DTDC Express Limited. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
