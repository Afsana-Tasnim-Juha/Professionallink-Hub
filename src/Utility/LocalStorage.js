

const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);

    }
    return [];
}


const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();

}

export { getStoredJobApplication, saveJobApplication }