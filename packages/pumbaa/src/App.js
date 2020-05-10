import React from 'react';

import { useSampleContext } from 'consoleApp/SampleContext';
import { LibSampleContext } from '@mi-wmf/utils';

export default function App() {
  const { pumbaa } = useSampleContext();
  const { pumbaa: pumbaaLib } = React.useContext(LibSampleContext);
  return (
    <div>
      <h1>Pumbaa App</h1>
      <h2>Running as a remote app from port 3003</h2>
      {<h4>Message from console app context: {pumbaa}</h4> }
      <h4>Message from library context: {pumbaaLib}</h4>
    </div>
  )
}
