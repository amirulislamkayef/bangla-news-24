'use client'
import { authClient } from "../lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    const handleSignOut = async () => {
        await authClient.signOut()
    }

    return (
        <div>
            {
                user ? <div className="grid grid-cols-1 gap-2">
                    <Link href={'/profile'}>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                                <Image alt="your image" src={user?.image}
                                    width={40}
                                    height={40} />
                            </div>
                        </div>
                    </Link>
                    <h2 className="font-bold">{user.name}</h2>
                    <button onClick={handleSignOut} className="btn bg-red-600 text-white">Sign Out</button>
                </div> : <div className=" grid grid-cols-2 gap-4 ml-50">
                    <Link href='/sign-in'><button className="btn btn-neutral">সাইন ইন</button></Link>
                    <Link href='/sign-up'><button className="btn btn-neutral">সাইন আপ</button></Link>
                </div>
            }
        </div>
    );
};

export default UserInfo;