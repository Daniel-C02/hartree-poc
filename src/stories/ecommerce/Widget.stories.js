import React from 'react';
import Widget from "../../components/Widget";
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

export default {
  title: 'Components/Widget',
  component: Widget,
};

const Template = (args) => {
  const { percent } = args; // Extract percent from args

  return (
    <Widget
      {...args}
      chart={{
        ...args.chart,
        colors: ['rgba(91, 228, 155, 1)', 'rgba(0, 167, 111, 1)'],
        ...(percent < 0 && {
          colors: ['rgba(255, 86, 48, 1)', 'rgba(183, 29, 24, 1)'],
        }),
      }}
    />
  );
};

export const First = Template.bind({});
First.args = {
  title: 'Weekly Move',
  percent: 39.4,
  graphTitle: "Oil Heating",
  chart: {
    series: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  },
  sx: { background: "#3D529C", borderRadius: 0 }
};


export const Second = Template.bind({});
Second.args = {
  title: 'Weekly Move',
  percent: -5.2,
  graphTitle: "Oil (Crude)",
  chart: {
    series: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  },
  sx: { background: "#3D529C", borderRadius: 0 }
};

export const Third = Template.bind({});
Third.args = {
  title: 'Weekly',
  percent: 22.1,
  graphTitle: "Gas",
  chart: {
    series: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
  },
  sx: { background: "#3D529C", borderRadius: 0 }
};

export const ThreeComponentsSideBySide = () => {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={4}>
        <Template {...First.args} />
      </Grid>
      <Grid xs={12} md={4}>
        <Template {...Second.args} />
      </Grid>
      <Grid xs={12} md={4}>
        <Template {...Third.args} />
      </Grid>
    </Grid>
  );
};






