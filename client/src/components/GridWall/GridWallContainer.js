import {connect} from 'react-redux';
import GridWall from './GridWall';

const mapStateToProps = ( state ) => {
    return {
        gwData : state.gwData
    }
}

export default connect(mapStateToProps)(GridWall);