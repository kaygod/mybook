import Loadable from 'react-loadable';
import Loading from '../../components/loading';
import React from "react";

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: Loading,
});

export default ()=><LoadableComponent/>;