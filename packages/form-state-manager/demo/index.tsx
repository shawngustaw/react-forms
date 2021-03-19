import React from 'react';
import ReactDOM from 'react-dom';

import FormStateManager from '../src/files/form-state-manager';
import FormSpy from '../src/files/form-spy';

import TextField from '../src/tests/helpers/text-field';
import { Validator } from '../src/types/validate';

const asyncValidator: Validator = (value) => new Promise((res, rej) => setTimeout(() => (value === 'foo' ? rej('No async foo') : res()), 1000));
const asyncValidator1: Validator = (value) => new Promise((res, rej) => setTimeout(() => (value === 'foo' ? rej('No async foo') : res()), 3000));

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <FormStateManager subscription={{ valid: true, validating: true, pristine: true, invalid: true, submitting: true }} onSubmit={console.log}>
        {({ handleSubmit, ...state }) => {
          return (
            <form onSubmit={handleSubmit} name="field-2">
              <h1>There will be children</h1>
              <TextField initialValue="foo" autoComplete="off" validate={asyncValidator} label="field-1" name="field-1" id="field-1" type="text" />
              <TextField autoComplete="off" validate={asyncValidator} label="field-2" name="field-2" id="field-2" type="text" />
              <FormSpy>
                {(props) => (
                  <pre>
                    {JSON.stringify(
                      {
                        validate: props.valid,
                        validating: props.validating
                      },
                      null,
                      2
                    )}
                  </pre>
                )}
              </FormSpy>
              <div style={{ margin: 16 }}>
                <button type="submit">Submit</button>
              </div>
            </form>
          );
        }}
      </FormStateManager>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
