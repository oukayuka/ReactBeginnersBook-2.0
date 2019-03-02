import React, { FC } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Spinner: FC = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>読み込み中...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
