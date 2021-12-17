import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TranslatorContext } from '@jutro/locale';

import styles from './AgentOverview.module.scss';
import messages from './AgentOverview.messages';

export const AgentOverview = ({ title }) => {
    const translator = useContext(TranslatorContext);
    return (
        <div className={styles.agentOverview} title={title}>
            {translator(messages.label)}
        </div>
    );
};

AgentOverview.propTypes = {
    title: PropTypes.string,
};

AgentOverview.defaultProps = {
    title: 'sample',
};
