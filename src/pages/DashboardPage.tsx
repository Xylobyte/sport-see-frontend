import "./DashboardPage.scss";
import {useEffect, useState} from "react";
import {SportSeeAPI, User} from "../api/SportSeeAPI.ts";

const queryParams = new URLSearchParams(window.location.search);
const userId = parseInt(queryParams.get('userId') || "0");

function DashboardPage() {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setError(undefined);
        setIsLoading(true);

        try {
            await fetchUser();
        } catch (e) {
            console.error(e);
            setError("Erreur de communication avec le serveur, verifiez votre connextion internet !");
        }

        setIsLoading(false);
    };

    const fetchUser = async () => {
        const data = await SportSeeAPI.getUser(userId);
        setUser(data);
    };

    return <main className="column gap-20">
        {isLoading && !error ? <>
            <h1>Chargement des données...</h1>
        </> : error ? <>
            <div className="error-ct align-center justify-center column gap-20">
                <p>{error}</p>
                <button onClick={fetchData} className="border-r6">
                    Réessayer
                </button>
            </div>
        </> : user && <>
            <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </>}
    </main>;
}

export default DashboardPage;
