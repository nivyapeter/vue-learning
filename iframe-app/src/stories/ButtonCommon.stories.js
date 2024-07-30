import ButtonCommon from '../components/ButtonCommon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Example/ButtonCommon',
    component: ButtonCommon,
    tags: ['autodocs'],
    // argTypes: {
    //     text: {
    //         control: {
    //             type: 'text',
    //         },
    //     },
    // },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
      text: 'Add',
    },
  };

// const Template = (args, { argTypes }) => {
//     return {
//         components: { 'button-common': ButtonCommon },
//         props: Object.keys(argTypes),
//         template: `
//         <button-common
//           :text="text"
//         />
//       `,
//     };
// };

// export const Default = Template.bind({});
// Default.args = {
//     text: 'Sample',
// };
