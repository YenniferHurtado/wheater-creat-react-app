
import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
];

class App extends Component {

  constructor() {
    super()
    this.state = { city: null };
  }
  handleSelectionLocation = city => {
    this.setState({ city });
  }

  render() {

    const { city } = this.state;
    return (
  
        <Grid>
          <Row> 
            <Col xs={12}>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="h4" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList 
                cities={cities}
                onSelectedLocation={this.handleSelectionLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper> 
                <div className='detail'>
                  { city ? 
                      <ForecastExtended city={city}/> :
                      null
                  }
                </div>
              </Paper>
            </Col>
          </Row>      
        </Grid>

  )};
}

export default App;
