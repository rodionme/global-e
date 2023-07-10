import React from 'react';

import { Registration } from "./components/Registration";
import {Success} from "./components/Success";

import {useFormStore} from "./store";

function App() {
  const isSubmitted = useFormStore((state) => state.isSubmitted);
  const setSubmitted = useFormStore((state) => state.setSubmitted);

  return (
    <div>
      {isSubmitted ? <Success /> : <Registration onSubmit={setSubmitted} />}
    </div>
  );
}

export default App;
