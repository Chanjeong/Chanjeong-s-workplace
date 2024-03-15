import { getImageUrl } from './Utils.jsx';

export default function Avatar({ title, person, size, about }) {
    return (
        <>
            <h1>{title}</h1>
            <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />
            <p>{about}</p>
        </>
    );
}
