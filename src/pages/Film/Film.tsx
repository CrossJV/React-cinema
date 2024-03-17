import { useParams } from "react-router-dom";

function Film() {
    const { id } = useParams();

    return (
        <>Film - {id}</>
    );
}

export default Film;