import HeaderMenu from "./HeaderMenu";

export default function Today () {

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
        { headers: { Authorization: `Bearer ${token}` } }
        );

		requisicao.then(res => {
			setListHabits(res.data);
            console.log(res.data)
		});
	}, []);

    return(
        <>
        
            <HeaderMenu/>
            <div>

            </div>
        </>
    )
}