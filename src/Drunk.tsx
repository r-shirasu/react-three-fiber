import DrunkEffect from './DrunkEffect';
import { forwardRef } from 'react';

export default forwardRef(function (props, ref) {
  const effect = new DrunkEffect(props);

  return <primitive ref={ref} object={effect} />;
});
