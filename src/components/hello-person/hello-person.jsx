import PropTypes from 'prop-types';
import style from './hello-person.module.css';

const HelloPerson = (props) => {
    const { name, age } = props;

    return (
        <div>
            <h1 className={style.ayan}>Bienvenue {name} sur l’application React!</h1>
            <p>Vous avez {age} ans!</p>
        </div>
    );
};

HelloPerson.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

HelloPerson.defaultProps = {
    age: 18
};

export default HelloPerson;