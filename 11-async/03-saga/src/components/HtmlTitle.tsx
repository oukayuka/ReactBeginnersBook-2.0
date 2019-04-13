import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const HtmlTitle: FC<{ title: string }> = ({ title = '' }) =>
  title ? (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  ) : (
    <div />
  );

export default HtmlTitle;
