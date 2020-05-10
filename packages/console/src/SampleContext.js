import React from 'react';

const SampleContext = React.createContext({});

export const useSampleContext = () => React.useContext(SampleContext);

export default SampleContext;
