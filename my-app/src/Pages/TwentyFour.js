import { useEffect, useState } from "react";
import { requests } from "../Request";
import Row from "../components/Row";

function TwentyFour() {
    const year = 2024;
    const [oscars, setOscars] = useState([]);
    useEffect(() => {
        fetch(requests.winner24)
            .then(response => response.json())
            .then(data => setOscars(data.results));
    }, []);
    return (
        <Row movies={oscars} year={year} />
    );
}

export default TwentyFour;