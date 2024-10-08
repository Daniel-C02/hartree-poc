import Stack from "../../components/Stack";

export default {
    title: 'Components/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: { control: 'number' },
    }
}

const Template = ({ numberOfChildren = 4, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <div key={n} style={{width: "50px", height: "50px", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center",}}>
                {n + 1}
            </div>
        ))}
    </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: 'row',
    spacing: 2,
    wrap: false
}

export const Vertical = Template.bind({});
Vertical.args = {
    direction: 'column',
    spacing: 4,
    wrap: false
}

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
    numberOfChildren: 40,
    direction: 'row',
    spacing: 4,
    wrap: true
}

export const WrapOff = Template.bind({});
WrapOff.args = {
    numberOfChildren: 40,
    direction: 'row',
    spacing: 2,
    wrap: false
}