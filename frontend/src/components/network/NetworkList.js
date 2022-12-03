import React from 'react'
import { useGetUsersQuery } from "../../features/users/userSlice";
import Loading from '../Loading';
import ProfileBox from './ProfileBox';

const NetworkList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersQuery("getUsers");

    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (isSuccess) {
        content = (
            <>{users.ids.map((userId) => {
                return <ProfileBox user={users.entities[userId]} key={userId} />;
            })}</>
        );
    } else if (isError) {
        content = <p>{error}</p>;
    }
    return (
        <div class="grid grid-cols-3 gap-4">{content}</div>
    )
}

export default NetworkList