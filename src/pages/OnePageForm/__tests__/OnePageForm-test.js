import React from 'react';
import { mountWithTranslatorContext, textWasTranslated } from '@jutro/test';
import { axe, toHaveNoViolations } from 'jest-axe';
import messages from '../OnePageForm.messages';
import { OnePageForm } from '../OnePageForm';

expect.extend(toHaveNoViolations);

describe('OnePageForm', () => {
    it('renders default component', () => {
        const wrapper = mount(<OnePageForm />);
        expect(wrapper).toBeDefined();
    });

    it('renders with default prop value', () => {
        const wrapper = mount(<OnePageForm />);
        expect(wrapper.props().title).toBe('sample');
    });

    it('renders with custom prop value', () => {
        const newTitle = 'newTitle';
        const wrapper = mount(<OnePageForm title={newTitle} />);
        expect(wrapper.props().title).toBe(newTitle);
    });

    it('renders with css class', () => {
        const wrapper = mount(<OnePageForm />);
        expect(wrapper.find('div').props().className).toBe('onePageForm');
    });

    it('renders with translation', () => {
        const wrapper = mountWithTranslatorContext(<OnePageForm />);
        textWasTranslated(wrapper.text(), messages.label);
    });

    it('has no a11y violations', async () => {
        const wrapper = mount(
            <main>
                <OnePageForm />
            </main>
        );
        const results = await axe(wrapper.getDOMNode());
        expect(results).toHaveNoViolations();
    });
});
