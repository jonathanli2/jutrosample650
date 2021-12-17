import React from 'react';
import { mountWithTranslatorContext, textWasTranslated } from '@jutro/test';
import { axe, toHaveNoViolations } from 'jest-axe';
import messages from '../AgentOverview.messages';
import { AgentOverview } from '../AgentOverview';

expect.extend(toHaveNoViolations);

describe('AgentOverview', () => {
    it('renders default component', () => {
        const wrapper = mount(<AgentOverview />);
        expect(wrapper).toBeDefined();
    });

    it('renders with default prop value', () => {
        const wrapper = mount(<AgentOverview />);
        expect(wrapper.props().title).toBe('sample');
    });

    it('renders with custom prop value', () => {
        const newTitle = 'newTitle';
        const wrapper = mount(<AgentOverview title={newTitle} />);
        expect(wrapper.props().title).toBe(newTitle);
    });

    it('renders with css class', () => {
        const wrapper = mount(<AgentOverview />);
        expect(wrapper.find('div').props().className).toBe('agentOverview');
    });

    it('renders with translation', () => {
        const wrapper = mountWithTranslatorContext(<AgentOverview />);
        textWasTranslated(wrapper.text(), messages.label);
    });

    it('has no a11y violations', async () => {
        const wrapper = mount(
            <main>
                <AgentOverview />
            </main>
        );
        const results = await axe(wrapper.getDOMNode());
        expect(results).toHaveNoViolations();
    });
});
