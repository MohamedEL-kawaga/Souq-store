import HeroLogin from "../../components/HeroLogin/HeroLogin";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
    return (
        <>
            <section className="login-page">
                <div className="container">
                    <div className="row justify-content-center align-items-center g-2 vh-100">
                        <div className="col-lg-6">
                            <HeroLogin />
                        </div>
                        <div className="col-lg-6">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
