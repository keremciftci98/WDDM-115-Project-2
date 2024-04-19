import { useEffect, useState } from "react";
import { requests } from "../Request";
import Row from "../components/Row";


function Nineteen() {
    
    const [oscars, setOscars] = useState([]);
    const year = 2019;
    useEffect(() => {
        fetch(requests.winner19)
            .then(response => response.json())
            .then(data => setOscars(data.results));
    }, []);
    return (
        <Row movies={oscars} year={year} />
    );

}

export default Nineteen;