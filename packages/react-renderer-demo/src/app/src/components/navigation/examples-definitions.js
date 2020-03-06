import { componentTypes, validatorTypes } from '@data-driven-forms/react-form-renderer';
import GenericComponentText from './examples-texts/generic-mui-component';
import TabsText from './examples-texts/tabs';
import CustomComponentText from './examples-texts/custom-component';
import WizardText from './examples-texts/wizard';
import SelectText from './examples-texts/select';
import DualListSelect from './examples-texts/dual-list-select';

const formGroupVariants = [{
  name: 'isDisabled',
  title: 'Disabled',
}, {
  name: 'helperText',
  title: 'Helper text',
  component: 'input',
}, {
  name: 'description',
  title: 'Description',
  component: 'input',
}, {
  name: 'isReadOnly',
  title: 'Read only',
}];

export const baseExamples = [{
  component: componentTypes.TEXT_FIELD,
  link: componentTypes.TEXT_FIELD,
  linkText: 'Text Field',
  ContentText: GenericComponentText,
  value: { fields: [{
    component: componentTypes.TEXT_FIELD,
    label: 'First name',
    name: 'first-name',
  }]},
  canBeRequired: true,
  variants: [
    ...formGroupVariants, {
      name: 'label',
      title: 'Label',
      component: 'input',
      value: 'First name',
    }, {
      title: 'Input Type',
      name: 'type',
      options: [ 'text', 'number', 'password' ],
    }, {
      name: 'placeholder',
      title: 'Placeholder',
      component: 'input',
    }],
}, {
  component: componentTypes.TEXTAREA_FIELD,
  link: componentTypes.TEXTAREA_FIELD,
  linkText: 'Text area',
  ContentText: GenericComponentText,
  canBeRequired: true,
  value: { fields: [{
    component: componentTypes.TEXTAREA_FIELD,
    label: 'Long text',
    name: 'long-text',
  }]},
  variants: [
    ...formGroupVariants, {
      name: 'label',
      title: 'Label',
      component: 'input',
      value: 'Long text',
    }, {
      name: 'placeholder',
      title: 'Placeholder',
      component: 'input',
    }],
},
{
  component: componentTypes.CHECKBOX,
  link: componentTypes.CHECKBOX,
  prev: {
    link: '/renderer/form-controls',
    label: 'Form Controls',
  },
  linkText: 'Checkbox',
  ContentText: GenericComponentText,
  value: { fields: [{
    component: componentTypes.CHECKBOX,
    label: 'Checkbox',
    name: 'checkbox',
  }]},
  variants: [
    ...formGroupVariants, {
      name: 'label',
      title: 'Label',
      component: 'input',
      value: 'Checkbox',
    }],
},
{
  component: componentTypes.RADIO,
  link: componentTypes.RADIO,
  linkText: 'Radio',
  ContentText: GenericComponentText,
  canBeRequired: true,
  value: { fields: [{
    component: componentTypes.RADIO,
    label: 'Radio',
    name: 'radio',
    options: [
      { label: 'Dogs', value: '1' },
      { label: 'Cats', value: '2' },
      { label: 'Hamsters', value: '3' },
    ],
  }]},
  variants: [ ...formGroupVariants, {
    name: 'label',
    title: 'Label',
    component: 'input',
    value: 'Radio',
  }],
},
{
  component: componentTypes.SELECT_COMPONENT,
  link: componentTypes.SELECT_COMPONENT,
  linkText: 'Select',
  ContentText: SelectText,
  canBeRequired: true,
  value: { fields: [{
    component: componentTypes.SELECT_COMPONENT,
    label: 'Select',
    name: 'select',
    simpleValue: true,
    options: [
      { label: 'Dogs', value: '1' },
      { label: 'Cats', value: '2' },
      { label: 'Hamsters', value: '3' },
    ],
  }]},
  variants: [ ...formGroupVariants, {
    name: 'label',
    title: 'Label',
    component: 'input',
    value: 'Select',
  }, {
    name: 'multi',
    title: 'Multi',
  },
  {
    name: 'noOptionsMessage',
    title: 'No options message',
    component: 'input',
  },
  {
    name: 'placeholder',
    title: 'Placeholder',
    component: 'input',
  },
  {
    name: 'isSearchable',
    title: 'Searchable',
  }, {
    name: 'isClearable',
    title: 'Clearable',
  }, {
    name: 'simpleValue',
    title: 'Simple value',
  }],
},
{
  component: componentTypes.SWITCH,
  link: componentTypes.SWITCH,
  linkText: 'Switch',
  ContentText: GenericComponentText,
  value: { fields: [{
    component: componentTypes.SWITCH,
    label: 'Switch',
    name: 'switch',
  }]},
  variants: [ ...formGroupVariants, {
    name: 'label',
    title: 'Label',
    component: 'input',
    value: 'Switch',
  }, {
    name: 'onText',
    title: 'onText',
    component: 'input',
  }, {
    name: 'offText',
    title: 'offText',
    component: 'input',
  },
  ],
},
{
  component: componentTypes.DATE_PICKER,
  link: componentTypes.DATE_PICKER,
  linkText: 'Date picker',
  ContentText: GenericComponentText,
  canBeRequired: true,
  value: { fields: [{
    component: componentTypes.DATE_PICKER,
    label: 'Date Picker',
    name: 'date-picker',
  }]},
  variants: [ ...formGroupVariants, {
    name: 'label',
    title: 'Label',
    component: 'input',
    value: 'Date Picker',
  }, {
    title: 'Variant',
    name: 'variant',
    options: [ 'date-time', 'date' ],
  }, {
    name: 'showTodayButton',
    title: 'Show today button',
  }, {
    name: 'todayButtonLabel',
    component: 'input',
    value: 'Today',
    title: 'Today button label',
  }, {
    name: 'closeOnDaySelect',
    title: 'Close on day select',
  }, {
    name: 'isClearable',
    title: 'Clearable',
  }],
},
{
  component: componentTypes.TIME_PICKER,
  link: componentTypes.TIME_PICKER,
  linkText: 'Time picker',
  ContentText: GenericComponentText,
  canBeRequired: true,
  value: { fields: [{
    component: componentTypes.TIME_PICKER,
    label: 'Time Picker',
    name: 'time-picker',
  }]},
  variants: [ ...formGroupVariants, {
    name: 'label',
    title: 'Label',
    component: 'input',
    value: 'Time Picker',
  },
  ],
},
{
  component: componentTypes.TABS,
  link: componentTypes.TABS,
  linkText: 'Tabs / Tab item',
  ContentText: TabsText,
  value: { fields: [{
    component: componentTypes.TABS,
    name: 'tabs',
    fields: [
      {
        component: componentTypes.TAB_ITEM,
        validateFields: [ 'apple' ],
        name: '1',
        title: 'Fruits',
        description: 'Here you can find fruits',
        fields: [
          {
            name: 'apple',
            label: 'Apple',
            title: 'Apple',
            component: componentTypes.TEXT_FIELD,
            validate: [{
              type: validatorTypes.REQUIRED,
            }],
          },
        ],
      },
      {
        component: componentTypes.TAB_ITEM,
        name: '2',
        title: 'Vegetables',
        description: 'Here you can find vegetables',
        fields: [
          {
            name: 'carrot',
            label: 'Carrot',
            title: 'Carrot',
            component: componentTypes.TEXT_FIELD,
          },
        ],
      },
    ],
  }]},
  variants: [],
},
{
  component: componentTypes.SUB_FORM,
  link: componentTypes.SUB_FORM,
  linkText: 'Subform',
  ContentText: CustomComponentText,
  value: { fields: [{
    component: componentTypes.SUB_FORM,
    title: 'Subform',
    description: 'This is a subform',
    name: 'subform',
    fields: [
      {
        name: 'carrot',
        label: 'Carrot',
        title: 'Carrot',
        component: componentTypes.TEXT_FIELD,
      },
    ],
  }]},
  variants: [{
    name: 'description',
    title: 'Description',
    component: 'input',
    value: 'This is a subform',
  }, {
    name: 'title',
    title: 'Title',
    component: 'input',
    value: 'Subform',
  },
  ],
},
{
  component: 'checkbox-multiple',
  link: 'checkbox-multiple',
  linkText: 'Checkbox multiple',
  ContentText: GenericComponentText,
  value: { fields: [{
    component: componentTypes.CHECKBOX,
    label: 'Checkbox',
    name: 'checkbox',
    options: [
      { label: 'Dog', value: '1' },
      { label: 'Cats', value: '2' },
      { label: 'Hamsters', value: '3' },
    ],
  }]},
  variants: [ ...formGroupVariants, {
    name: 'label',
    title: 'Label',
    component: 'input',
    value: 'Checkbox',
  }],
}, {
  component: componentTypes.PLAIN_TEXT,
  link: 'plain-text',
  linkText: 'Plain Text',
  ContentText: GenericComponentText,
  variants: [{
    name: 'label',
    title: 'Label',
    component: 'textarea',
    value: `Lorem ipsum sem velit. Mauris scelerisque tortor sed lorem dapibus, bibendum scelerisque ligula consequat. Quisque fringilla luctus.
Vestibulum vulputate inceptos himenaeos.`,
  }],
  value: {
    fields: [{
      component: componentTypes.PLAIN_TEXT,
      name: 'plain-text-component',
      label: `Lorem ipsum sem velit. Mauris scelerisque tortor sed lorem dapibus, bibendum scelerisque ligula consequat. Quisque fringilla luctus.
Vestibulum vulputate inceptos himenaeos.`,
    }],
  },
}, {
  component: 'dual-list-select',
  link: 'dual-list-select',
  linkText: 'Dual list select',
  ContentText: DualListSelect,
  variants: [
    ...formGroupVariants,
  ],
  value: {
    fields: [{
      component: 'dual-list-select',
      name: 'dual-list-select',
      options: [{
        value: 'cats', label: 'cats',
      }, {
        value: 'cats_1', label: 'cats_1',
      }, {
        value: 'cats_2', label: 'cats_2',
      }, {
        value: 'zebras', label: 'zebras',
      }, {
        value: 'pigeons', label: 'pigeons',
      }],
    }],
  },
}, {
  component: componentTypes.WIZARD,
  link: componentTypes.WIZARD,
  linkText: 'Wizard',
  ContentText: WizardText,
  value: {
    fields: [{
      component: componentTypes.WIZARD,
      name: 'wizzard',
      fields: [{
        title: 'Get started with adding source',
        name: 'step-1',
        stepKey: 1,
        nextStep: {
          when: 'source-type',
          stepMapper: {
            aws: 'aws',
            google: 'google',
          },
        },
        fields: [{
          component: componentTypes.TEXTAREA_FIELD,
          name: 'source-name',
          type: 'text',
          label: 'Source name',
        }, {
          component: componentTypes.SELECT_COMPONENT,
          name: 'source-type',
          label: 'Source type',
          isRequired: true,
          options: [{
            label: 'Please Choose',
          }, {
            value: 'aws',
            label: 'Aws',
          }, {
            value: 'google',
            label: 'Google',
          }],
          validate: [{
            type: validatorTypes.REQUIRED,
          }],
        }],
      }, {
        title: 'Configure AWS',
        name: 'step-2',
        stepKey: 'aws',
        nextStep: 'summary',
        fields: [{
          component: componentTypes.TEXT_FIELD,
          name: 'aws-field',
          label: 'Aws field part',
        }],
      }, {
        stepKey: 'google',
        title: 'Configure google',
        name: 'step-3',
        nextStep: 'summary',
        fields: [{
          component: componentTypes.TEXT_FIELD,
          name: 'google-field',
          label: 'Google field part',
        }],
      }, {
        fields: [{
          name: 'summary',
          component: 'summary',
        }],
        stepKey: 'summary',
        name: 'summary',
      }],
    }],
  },
  variants: [],
  next: {
    link: '/others/miq-components',
    label: 'ManageIQ components',
  },
  prev: {
    link: '/component-example/time-picker',
    label: 'Time Picker',
  },
}];
