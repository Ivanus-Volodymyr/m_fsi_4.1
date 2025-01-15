import {useEffect, useState} from 'react';

import {CompanyUsers, IProfile} from "../types";

const useUserRole = (user: IProfile | null, companyMembers: CompanyUsers[]) => {
    const [isMember, setIsMember] = useState<boolean>(false);
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        if (!user || !companyMembers.length) return;

        const member = companyMembers.find((member) => member.user_id === user.user_id);

        if (member) {
            setIsMember(true);
            setIsOwner(member.action === 'owner');
            setIsAdmin(member.action === 'admin');
        }
    }, [user, companyMembers]);

    return {
        isMember,
        isOwner,
        isAdmin
    };
};

export default useUserRole;
