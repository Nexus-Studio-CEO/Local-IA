import React from 'react';
import ModePersonnalisable from './ModePersonnalisable';

function ModuleRatiosAdaptatifs({ contexte, ratio }) {
  return (
    <div>
      {contexte === 'factuel' && <ModePersonnalisable ratio={ratio} />}
      {contexte === 'créatif' && <ModePersonnalisable ratio={ratio / 2} />}
      {contexte === 'hybride' && <ModePersonnalisable ratio={ratio * 2} />}
    </div>
  );
}

export default ModuleRatiosAdaptatifs;