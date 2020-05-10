import React from 'react';
import { useSampleContext } from './SampleContext';
import { LibSampleContext } from '@mi-wmf/utils';

const RemoteSimbaApp = React.lazy(() => import("simba/App"));

export default function Host() {
  const [loadSimba, setLoadSimba] = React.useState(false);
  const { host: hostMsg } = React.useContext(LibSampleContext);
  return (
    <>
      <h1>Main host application</h1>
      <h2>Console App</h2>
      <h4>This message is from context - {hostMsg}</h4>
      {!loadSimba && (
        <button onClick={() => setLoadSimba(true)}>Load simba app</button>
      )}
      {loadSimba && (
        <React.Suspense fallback="Loading Simba App">
          <RemoteSimbaApp />
        </React.Suspense>
      )}
    </>
  )
}
