import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context/Auth.context";


const LoginSchema = yup.object({
    username: yup.string().required("username is required"),
    password: yup
        .string()
        .required("password is required")
});

export default function useLogin() {
    // const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AuthContext); //include refreshToken&accessToken to check vakue
    const { setAccessToken, setRefreshToken } = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleSubmit(value) {
        try {
            const options = {
                method: "POST",
                url: "https://dummyjson.com/auth/login",
                headers: {
                    "Content-Type": "application/json",
                },
                data: value,
                withCredentials: true,
            };
            const { data } = await axios.request(options);
            console.log(data);
            if (data) {
                toast.success("Logged in successfully!");
                setAccessToken(data.accessToken);
                localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
                // console.log(accessToken);
                setRefreshToken(data.refreshToken);
                localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
                // console.log(refreshToken);
                navigate("/");
            }
        } catch (error) {
            console.log(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: handleSubmit,
    })

    return { formik }
}