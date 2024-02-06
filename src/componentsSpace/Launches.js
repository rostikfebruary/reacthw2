import {useEffect, useState} from "react";
import {Info} from "./spaceBlock/spaceInfo/info";
import {launchService} from "./spaceServices/launchServise";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(({data}) => setLaunches(data))
    }, []);
    launchService.getAll()
        .then(({data})=>setLaunches(data.filter(value => value.launch_year !=='2020')))


    return (
        <div>
            {launches.map(spaceInfo => <Info key={spaceInfo.id} launchInfo={spaceInfo}/>)}
            Launches
        </div>
    );
};

export  default Launches;