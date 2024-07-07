'use client'

import {AppDispatch, RootState} from "@/redux/store";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import makeRequest from "@/utils/requst_handler";
import {setAuth} from "@/redux/reducer/authReducer";
import {verifyTokenResponse} from "@/utils/types";
import Snackbar from "@/components/snack_bar";
import {useRouter} from "next/navigation";
import Loader from "@/components/loader";

export default function LoginPage() {

    const dispatch = useDispatch<AppDispatch>()
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);
    const router = useRouter();

    const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect((): void => {
        const validateToken = async (tokenPara: string): Promise<boolean> => {
            try{
                setLoading(true);
                const response: verifyTokenResponse = await makeRequest('user/validate-token/', 'post', {token: tokenPara});
                return response.status
            }
            catch (e){
                console.log('Error validating token:', e);
                return false;
            }
            finally {
                setLoading(false);
            }
        };
        const token: string = localStorage.getItem('token') || '';
        if (token.length > 0) {
            validateToken(token)
                .then((isValid) => {
                    setSnackbarMessage(isValid ? 'Hey, Welcome back' : 'Ahh! You are logged out Please login again')
                    dispatch(setAuth(isValid));
                })
                .catch((error) => {
                    console.error('Error validating token:', error);
                    setSnackbarMessage('Error validating token');
                    dispatch(setAuth(false));

                });
        } else {
            setSnackbarMessage('Ahh! You are logged out Please login again');
            dispatch(setAuth(false));
        }
        toggleSnackbar(true);
    }, [dispatch]);


    const toggleSnackbar = (value: boolean) => setShowSnackbar(value);
    // Handle login function
    const handleLogin = async () => {
        setLoading(true);
        try {
            const response: any = await makeRequest('user/login/', 'post', {email, password});
            if (response.status === 200) {
                setSnackbarMessage('Logged in successfully');
                toggleSnackbar(true);
                localStorage.setItem('token', response.access);
                dispatch(setAuth(true));
                router.push('/');
            } else {
                setSnackbarMessage(response.message);
                toggleSnackbar(true);
            }
        } catch (e) {
            console.error('Error logging in:', e);
            setSnackbarMessage('Error logging in');
            toggleSnackbar(true);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <>
            {loading ? <div className="h-screen w-screen flex items-center justify-center"><Loader /></div> :
                <>
                    {showSnackbar && <Snackbar message={snackbarMessage} onClose={() => toggleSnackbar(false)} />}
                    <div className="h-screen w-screen flex flex-col items-center justify-center text-xl">
                        <div className="flex flex-col gap-16 items-center justify-center p-4 w-1/2">
                            {
                                !isAuth ? (
                                        <>
                                            <div className="relative w-full">
                                                <input type="text"
                                                       placeholder="Enter your email"
                                                       className="w-full bg-black border-[2px] border-green focus:outline-none p-6"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-blue -z-10"></span>
                                            </div>
                                            <div className="relative w-full">
                                                <input type="password"
                                                       placeholder="Enter your password"
                                                       className="w-full bg-black border-[2px] border-purple focus:outline-none p-6"
                                                       value={password}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <span className="absolute h-full w-full top-[20px] bottom-0 -left-[20px] right-0 border-2 border-yellow -z-10"></span>
                                            </div>
                                        </>

                                    )
                                    :
                                    (
                                        <></>
                                    )
                            }


                            <button onClick={handleLogin} className="py-4 px-20 border-2 border-white ">
                                {isAuth ? 'Logout' : 'Login'}
                            </button>

                        </div>
                    </div>

                </>
            }

        </>
    )
}