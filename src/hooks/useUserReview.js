import { useEffect, useState } from "react"

const useUserReview = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    return [user, setUser];

}

export default useUserReview;