const controls = [
    {
        type: 'input',
        label: 'Title',
        name: 'title',
        placeholder: 'Enter task title',
        rules: { required: "Title is required" }
    },
    {
        type: 'textarea',
        label: 'Description',
        name: 'description',
        placeholder: 'Enter task description',
    },
    {
        type: 'select',
        label: 'Priority',
        name: 'priority',
        options: [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High' }
        ],
    }
];

export default controls;