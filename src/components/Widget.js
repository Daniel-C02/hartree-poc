import PropTypes from "prop-types"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { fNumber, fPercent } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import Chart, { useChart } from 'src/components/chart';

function Widget({ title, percent, graphTitle, chart, sx, ...other }) {
  const theme = useTheme();

  const {
    colors = [theme.palette.primary.light, theme.palette.primary.main],
    series,
    options,
  } = chart;

  const chartOptions = useChart({
    colors: [colors[1]],
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[0], opacity: 1 },
          { offset: 100, color: colors[1], opacity: 1 },
        ],
      },
    },
    chart: {
      animations: {
        enabled: true,
      },
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
      marker: {
        show: false,
      },
    },
    ...options,
  });

  const renderTrending = (
    <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }}>
      <Iconify
        icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'}
        sx={{
          mr: 1,
          p: 0.5,
          width: 24,
          height: 24,
          borderRadius: '50%',
          color: '#22C55E',
          bgcolor: '#22C55E29',
          ...(percent < 0 && {
            color: '#FFFFFF',
            bgcolor: '#D32F2F7F',
          }),
        }}
      />

      <Typography variant="subtitle2" component="div" noWrap className="ff-sans fs-14 fw-600 text-cyan-light" >
        {percent > 0 && '+'}

        {fPercent(percent)}

        <Box component="span" className="ff-sans fs-14 fw-400 text-cyan-light" >
          {' than last week'}
        </Box>
      </Typography>
    </Stack>
  );

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography className="ff-sans fs-14 fw-600 text-cyan-light" variant="subtitle2" sx={{ mb: 2 }} >
          {title}
        </Typography>

        <Typography variant="h3" gutterBottom className="ff-sans fs-32 fw-500 text-cyan-light">
          {graphTitle}
        </Typography>

        {renderTrending}
      </Box>

      <Chart
        dir="ltr"
        type="line"
        series={[{ data: series }]}
        options={chartOptions}
        width={96}
        height={64}
      />
    </Card>
  );
}

Widget.propTypes = {
    chart: PropTypes.object,
    percent: PropTypes.number,
    sx: PropTypes.object,
    title: PropTypes.string,
    graphTitle: PropTypes.string,
}

export default Widget
