'use client'
import { authClient } from "../../lib/auth-client";
import Link from "next/link";
import Image from "next/image";

const ProfilePage = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newUserData = Object.fromEntries(formData.entries())

        await authClient.updateUser({
            ...newUserData
        })
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-2 mt-10">
                <Link href={'/profile'}>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                            <Image alt="your image" src={user?.image}
                                width={40}
                                height={40} />
                        </div>
                    </div>
                </Link>
                <h2 className="font-bold">{user?.name}</h2>
                <h2 className="font-semibold">{user?.email}</h2>
            </div>
            <form onSubmit={handleUpdateProfile}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" />

                    <label className="label">Image</label>
                    <input name='image' type="url" className="input" placeholder="Iamge" />

                    <button type="submit" className="btn bg-red-600 btn-neutral mt-4">Update your profile</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ProfilePage;