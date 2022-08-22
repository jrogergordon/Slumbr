import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import GreetingNew from './greeting_new';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: session.id
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(GreetingNew);