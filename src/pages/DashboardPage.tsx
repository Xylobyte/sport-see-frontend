import "./DashboardPage.scss";
import {useEffect, useState} from "react";
import {SportSeeAPI} from "../api/SportSeeAPI.ts";
import {UserData} from "../api/user.types.ts";
import Activity from "../components/dashboard/Activity.tsx";
import {ActivityData} from "../api/activity.types.ts";
import InfoCard from "../components/dashboard/InfoCard.tsx";
import energy from "../assets/icons/energy.svg";
import chicken from "../assets/icons/chicken.svg";
import apple from "../assets/icons/apple.svg";
import cheeseburger from "../assets/icons/cheeseburger.svg";
import AverageSession from "../components/dashboard/AverageSession.tsx";
import Intensity from "../components/dashboard/Intensity.tsx";
import ScoreCounter from "../components/dashboard/ScoreCounter.tsx";
import {AverageSessionsData} from "../api/average-sessions.types.ts";
import {PerformanceData} from "../api/performance.types.ts";

const queryParams = new URLSearchParams(window.location.search);
const userId = parseInt(queryParams.get('userId') || "0");

function DashboardPage() {
    const [user, setUser] = useState<UserData>();
    const [activity, setActivity] = useState<ActivityData>();
    const [averageSessions, setAverageSessions] = useState<AverageSessionsData>();
    const [userPerfs, setUserPerfs] = useState<PerformanceData>();
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
            await fetchAverageSessions();
			await fetchUserPerfs();
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

    const fetchAverageSessions = async () => {
        const data = await SportSeeAPI.getUserAverageSessions(userId);
        setAverageSessions(data);
    };

	const fetchUserPerfs = async () => {
		const data = await SportSeeAPI.getUserPerformance(userId);
		setUserPerfs(data);
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
        </> : user && user.todayScore && activity && averageSessions && userPerfs && <>
            <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="grid-charts gap-20">
                <Activity activity={activity}/>

                <InfoCard
                    value={user.keyData.calorieCount}
                    unit="Kcal"
                    label="Calories"
                    color="red"
                    icon={<img src={energy} alt=""/>}
                />
                <InfoCard
                    value={user.keyData.proteinCount}
                    unit="g"
                    label="Proteines"
                    color="#4CB8FE"
                    icon={<img src={chicken} alt=""/>}
                />

                <AverageSession averageSessions={averageSessions}/>
                <Intensity userPerfs={userPerfs}/>
                <ScoreCounter score={user.todayScore}/>

                <InfoCard
                    value={user.keyData.proteinCount}
                    unit="g"
                    label="Glucides"
                    color="#FDCD19"
                    icon={<img src={apple} alt=""/>}
                />
                <InfoCard
                    value={user.keyData.lipidCount}
                    unit="g"
                    label="Lipides"
                    color="#FD5181"
                    icon={<img src={cheeseburger} alt=""/>}
                />
            </div>
        </>}
    </main>;
}

export default DashboardPage;
