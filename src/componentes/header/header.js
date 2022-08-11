import React from 'react';
import { Icon } from 'react-icons-kit';
import {androidMicrophone} from 'react-icons-kit/ionicons/androidMicrophone';
import {gearA} from 'react-icons-kit/ionicons/gearA';

const header = () => {
  return (
    <div>
        <div>
          <h2>The Games Database</h2>
        </div>
        <div>
          <Icon icon={androidMicrophone} />
          <Icon icon={gearA} />
        </div>
    </div>
  )
}

export default header;