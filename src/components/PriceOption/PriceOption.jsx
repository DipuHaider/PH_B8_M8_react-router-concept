import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div>
            {/* <h2>{option.name}{option.price}</h2> //before destruturing*/}
            <h2>{name} {price}</h2>
            {
                features.map((feature ,idx)=> <Feature key={idx} feature={feature}></Feature>)
            }
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;