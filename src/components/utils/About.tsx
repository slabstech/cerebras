import { Component } from 'react';
import { Container, Typography } from '@mui/material';

interface AppState {
}

type AboutProps = {
};

class About extends Component<AboutProps, AppState> {


  constructor(props:AboutProps) {
    super(props);
  }

  render() {
    return (
      <div style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Cerberas - Militart Decision AI
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>What will Cerebras Do ?</strong>
        </Typography>       
          <ul>
            <li>Assist with Military Data Analysis</li>
          </ul>
        <Typography variant="body1" paragraph>
          <strong>What will Cerebras not do ?</strong>
        </Typography>
          <ul>
            <li>Solve AI for Military Issues</li>
          </ul>
      </Container>
      </div>
    );
  }
}

export default About;
