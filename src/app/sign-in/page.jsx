"use client"
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/"
        })
        if (data) {
            toast.success('Login successfull')
            redirect("/")
        }
        if (error) {
            toast.error('invalid email or password')
        }
    }
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }
    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github"
        })
    }

    return (
        <div className='mt-10'>
            <h2 className='text-2xl font-bold mb-4 text-rose-600'>সাইন ইন</h2>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button type="submit" className="btn bg-red-600 btn-neutral mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
            <button onClick={handleGoogleSignIn} className="btn">Sign in With Google</button>
            <button onClick={handleGithubSignIn} className="btn">Sign in With Github</button>
        </div>
    );
};

export default SignInPage;