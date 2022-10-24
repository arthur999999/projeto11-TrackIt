import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom';

export default function Menu () {

    const percentage = 66;
    return(
        <div>
            <Link to='/habitos'>

                <p>Hábitos</p>
            </Link>
            <Link to='/hoje'>

                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            </Link>
            <p>Histórico</p>
        </div>
    )
}