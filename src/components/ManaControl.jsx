import React, {Fragment} from 'react';
import { revisarMana } from '../helpers';
import PropTypes from 'prop-types';

const ManaControl = ({cantidad,restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Mana: ${cantidad}
            </div>
            {/*La clase se definira segun el mana restante*/}
            <div className={revisarMana(cantidad, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
     );
}
 ManaControl.propTypes = {
     cantidad: PropTypes.number.isRequired,
     restante: PropTypes.number.isRequired
 }

export default ManaControl;