import React, {
    Component
} from 'react';
import './Background.scss';

import Particles from 'react-particles-js';
import config from './data/particles.js';

class Background extends Component {
    render() {
        return (
            <Particles className="particles"
                params={config} />
        );
    }
}

export default Background;
