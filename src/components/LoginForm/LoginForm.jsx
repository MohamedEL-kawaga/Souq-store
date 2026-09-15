import useLogin from "../../Hooks/useLogin"

export default function LoginForm() {
    const { formik } = useLogin();
    return (
        <section className="login-form">
            <div className="auth-card">
                <div className="auth-heading">
                    <span className="text-accent h6 auth-label">WELCOME TO SOUQ</span>
                    <h2>Welcome back</h2>
                    <span>Sign in to continue shopping</span>
                </div>

                <form className="d-flex justify-content-center align-items-center flex-column w-100 gap-3" onSubmit={formik.handleSubmit}>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="username"
                            name="username"
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="floatingInput">User name</label>
                    </div>
                    {formik.touched.username && formik.errors.username && (
                        <p className="text-danger mb-0 align-self-start">
                            *{formik.errors.username}
                        </p>
                    )}

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-danger mb-0 align-self-start">
                            *{formik.errors.password}
                        </p>
                    )}
                    <button type="submit" className="btn-auth w-100" > {formik.isSubmitting ? "Logging in..." : "Login"} </button>
                </form>
            </div>
        </section >
    )
}