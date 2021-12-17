import React, { useEffect, useState, useCallback, useContext } from 'react';
import uiMetadata from './OnePageForm.metadata.json5';
import { MetadataForm } from '@jutro/uiconfig';
import PropTypes from 'prop-types';
import { TranslatorContext } from '@jutro/locale';
import { set } from 'lodash';

import styles from './OnePageForm.module.scss';
import messages from './OnePageForm.messages';

export const OnePageForm = ({ title }) => {
    const translator = useContext(TranslatorContext);
    const [formData, setFormData] = useState({});
    const [isValid, setIsValid] = useState(false);
    const onValidationChange = useCallback((newIsValid) => {
      setIsValid(newIsValid);
    }, []);
    
    const readValue = (id, path) => 
        get(formData, path);

    const saveForm = () => {
        if (!isValid) {
          showError(messages.formValidationError);
          setSubmitted(true);
          return;
        }
        const overrideProps = undefined;
        const resolvers = {
          // only a subset of resolvers needed for 'validation' vs 'render'
          resolveValue: readValue, // get value (needs base data to make it generic)
        };
      };

      const showSuccess = (msg) => {
        console.log({
          status: 'success',
          title: messages.genericSuccessMessage,
          message: msg,
        });
      };
    
      const showError = (msg) => {
        console.log({
          status: 'error',
          title: messages.genericErrorMessage,
          message: msg,
        });
      };

    const writeValue = (value, path) => {
        setFormData((prevState) => {
          const newState = { ...prevState };
          set(newState, path, value);
          return newState;
        });
    };

    return (
        <MetadataForm
            data={formData}
            onDataChange={writeValue}
            uiProps={uiMetadata['myApp.myFeature.myForm']}
            onValidationChange={onValidationChange}
            callbackMap={{
                saveForm: saveForm,
            }}
        />
    );
};

OnePageForm.propTypes = {
    title: PropTypes.string,
};

OnePageForm.defaultProps = {
    title: 'sample',
};
