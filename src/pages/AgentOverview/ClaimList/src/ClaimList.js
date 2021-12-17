import React, { useState, useMemo } from 'react';
import { MetadataForm } from '@jutro/uiconfig';
import { Card } from '@business-patterns/components';
import { IconColumn, StatusColumn, WarningColumn } from './columns';
import uiMetadata from './ClaimList.metadata.json5';
import cx from 'classnames';
import { Link } from '@jutro/components';
import { Flex, FlexItem } from '@jutro/layout';
import { ActionTitleBar, TitleElement } from './TitleBars';
import styles from './ClaimList.module.scss';

const componentMap = {
    IconColumn: IconColumn,
    StatusColumn: StatusColumn,
    WarningColumn: WarningColumn,
};

const onSeeDetailsClick = row => {
    window.alert(`See details of: ${JSON.stringify(row)}`);
};

const onNewClaimClick = () => window.alert('New claim started');

const filterButtonsConfig = [
    { label: 'Open', filter: ({ state }) => state.code === 'open' },
    { label: 'Processing', filter: ({ state }) => state.code === 'processing' },
    { label: 'Approved', filter: ({ state }) => state.code === 'approved' },
    { label: 'Declined', filter: ({ state }) => state.code === 'declined' },
];

export const ClaimList = ({ formData }) => {

    const [activeFilter, setActiveFilter] = useState(filterButtonsConfig[0]);

    const filteredData = useMemo(() => {
        const claimList = formData.claims?.filter(activeFilter.filter);
        return { claimList };
      }, [activeFilter, formData]);

      const filterButtons = useMemo(
        () => (
          <Flex
            gap="small"
            alignItems="center"
            className={styles.filterButtonWrapper}
          >
            {filterButtonsConfig.map((config) => (
              <FlexItem
                grow="1"
                key={config.label}
                className={styles.filterButtonItem}
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link
                  onClick={() => setActiveFilter(config)}
                  className={cx({
                    [styles.activeFilterButton]: config.label === activeFilter.label,
                  })}
                >
                  {config.label}
                </Link>
              </FlexItem>
            ))}
          </Flex>
        ),
        [activeFilter]
      );

    const callbackMap = {
        onSeeDetailsClick,
        onNewClaimClick
    };

    return (
        <Card maxWidth={1200}>
            <ActionTitleBar>
                <TitleElement>
                    <h2>Claims List</h2>
                </TitleElement>
                {filterButtons}
            </ActionTitleBar>

            <MetadataForm
                uiProps={uiMetadata['claimList.view']}
                data={filteredData}
                callbackMap={callbackMap}
                componentMap={componentMap}
            />
        </Card>
    );
};
