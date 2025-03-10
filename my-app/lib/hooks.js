

const useFetch = (cb) => {

    const [loading, setLoading] = useState(null)
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(null)

    const fn = async () => {
        //Logic to trigger API
    }
    return { loading, data, error, fn, setData };
};


export default useFetch