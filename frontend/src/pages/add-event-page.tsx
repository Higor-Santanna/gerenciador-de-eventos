import { AddEvent } from "../components/add-event";
import { BackPage } from "../styles/utils-style";

const AddEventPage = () => {
    return (
        <>
            <BackPage>
                <a href="/home"><i className="fa-solid fa-arrow-left"></i></a>
            </BackPage>
            <AddEvent />
        </>
    )
};

export { AddEventPage }