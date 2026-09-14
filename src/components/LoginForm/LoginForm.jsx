export default function LoginForm() {
    return (
        <section className="login-form">
            <div className="auth-card">
                <div className="auth-heading">
                    <span className="text-accent h6 auth-label">WELCOME TO SOUQ</span>
                    <h2>Welcome back</h2>
                    <span>Sign in to continue shopping</span>
                </div>

                <form className="d-flex justify-content-center align-items-center flex-column w-100 gap-3">
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button type="button" className="btn-auth w-100">
                        Login
                    </button>
                </form>
            </div>
        </section>
    )
}
