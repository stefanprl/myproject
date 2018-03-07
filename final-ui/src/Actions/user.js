import request from "../Config/request";

export const getAllJobs = () => {

    return(dispatch) => {
        request.get("/jobs")
            .then((response) => {
                let availableJobs = [];
                for(let i=0; i<response.data.length; i++){
                    if(response.data[i].isAvailable){
                        availableJobs.push(response.data[i])
                    }
                }

                dispatch(getJobs(availableJobs));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};


export const getJobs = (payload) => {
    return { type: "GET_ALL_JOBS", payload}
};
