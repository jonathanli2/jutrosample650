import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TranslatorContext } from '@jutro/locale';
import { MetadataForm } from '@jutro/uiconfig';
import uiMetadata from './AgentOverview.metadata.json5';
import { ClaimList } from './ClaimList/src/index';
import listData from './ClaimList/src/claimListData.json';
import styles from './AgentOverview.module.scss';
import messages from './AgentOverview.messages';

export const AgentOverview = ({ title }) => {
    const translator = useContext(TranslatorContext);
    return (
        <div className={styles.agentOverview} title={title}>
          <MetadataForm
            uiProps={uiMetadata['a.b.agentOverview']}
            showOptional
            classNameMap={styles}
            componentMap = {{
                ClaimList
            }}
            overrideProps= {{
                claimList:  {
                  formData: { claims: listData.claimList }
                }
            }}
          />
        </div>
      );
};

AgentOverview.propTypes = {
    title: PropTypes.string,
};

AgentOverview.defaultProps = {
    title: 'sample',
};
