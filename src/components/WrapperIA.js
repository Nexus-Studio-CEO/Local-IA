import React from 'react';
import ModuleRatiosAdaptatifs from './ModuleRatiosAdaptatifs';

function WrapperIA({ contexte, ratio }) {
  return (
    <div>
      <ModuleRatiosAdaptatifs contexte={contexte} ratio={ratio} />
    </div>
  );
}

export default WrapperIA;