import { useEffect, useState } from "react";
import { requests } from "../Request";
import Row from "../components/Row";

function TwentyThree() {
    const year = 2023;
    const [oscars, setOscars] = useState([]);
    useEffect(() => {
        fetch(requests.winner23)
            .then(response => response.json())
            .then(data => setOscars(data.results));
    }, []);
    return (
        <Row movies={oscars} year={year} />
    );
}

export default TwentyThree;
