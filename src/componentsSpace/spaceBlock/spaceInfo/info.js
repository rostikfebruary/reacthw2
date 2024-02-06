const Info = ({launchInfo}) => {
    const {flight_number,launch_year,mission_name,links,mission_patch_small} = launchInfo;
    return (
        <div>
            <div>{flight_number}</div>
            <div>{launch_year}</div>
            <div>{mission_name}</div>
            <div>
                <img src={links.mission_patch_small} alt={mission_name}/>
            </div>

        </div>
    );
};

export {Info};



