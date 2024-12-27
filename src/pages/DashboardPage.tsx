import "./DashboardPage.scss";
import {useEffect, useState} from "react";
import {SportSeeAPI} from "../api/SportSeeAPI.ts";
import {UserData} from "../api/user.types.ts";
import Activity from "../components/dashboard/Activity.tsx";
import {ActivityData} from "../api/activity.types.ts";

const queryParams = new URLSearchParams(window.location.search);
const userId = parseInt(queryParams.get('userId') || "0");

function DashboardPage() {
    const [user, setUser] = useState<UserData>();
    const [activity, setActivity] = useState<ActivityData>();
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
            await fetchActivity();
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

    const fetchActivity = async () => {
        const data = await SportSeeAPI.getUserActivity(userId);
        setActivity(data);
    };

    return <main className="flex column gap-20">
        {isLoading && !error ? <>
            <h1>Chargement des données...</h1>
        </> : error ? <>
            <div className="error-ct flex align-center justify-center column gap-20">
                <p>{error}</p>
                <button onClick={fetchData} className="border-r6">
                    Réessayer
                </button>
            </div>
        </> : user && activity && <>
            <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="grid-charts gap-20">
                <Activity activity={activity}/>
            </div>
        </>}
    </main>;
}

export default DashboardPage;
