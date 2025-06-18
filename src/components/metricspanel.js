import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const metrics = [
  { title: 'Total Orders', value: 1342 },
  { title: 'Revenue Today', value: '$1,2452' },
  { title: 'Conversion Rate', value: '8.65%' },
  { title: 'Top-Selling Product', value: 'Watches' }
];

const MetricsPanel = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {metrics.map((metric, index) => (
        <Grid item key={index}>
          <Card
            sx={{
              width: 200,
              height: 100,
              transition: '0.3s',
              overflow: 'hidden',
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}
          >
            <CardContent sx={{ padding: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: 600,
                }}
              >
                {metric.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'gray',
                }}
              >
                {metric.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MetricsPanel;
