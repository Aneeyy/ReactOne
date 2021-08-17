import React from 'react';
import { Grid,  Container,Typography, CssBaseline, Checkbox, FormControlLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import PublishIcon from '@material-ui/icons/Publish';

function App() {

  function createData(A, B) {
    return { A, B};
  }
  const rows1 = [
    createData('Premigration', '200h'),
    createData('DB Remediation', '100h'),
    createData('App Code Remediation', '200h'),
    createData('DB Migration', '100h'),
    createData('App Code Deployment', '180h'),
    createData('Application Testing', '120h'),
    createData('Data Validation', '150h'),
  ];

  const rows2 = [
    createData('Calculated Complexity', 'Medium'),
    createData('Suggested Target Solution', 'Migrate to Aurora PSQL'),
  ];


  return (
    <>
    <Container maxWidth="lg" style={{backgroundColor: "#E9E9E9", padding:'2em',}}>
    <Grid container spacing={3}> 
    <Grid item xs={12} sm={7}>
    <div style={{backgroundColor: "#E9E9E9", padding:'2em'}}>
      <CssBaseline/>
      <Typography variant = "p"> CALCULATE COMPLEXITY - <strong> DB, Relational</strong>  </Typography> <br></br>
      <br></br>
      <br></br>

      <TableContainer >
      <Table sx={{ minWidth: 650 }} size='small' aria-label="simple table">

        <TableBody>
          
        <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> Provide the following details to calculate Complexity:  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>
              </TableCell>
            </TableRow> 

        <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> # of DB Objects  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>
              <input type="number" name="numObj" style={{border:0, padding:'6px'}} /> 
              </TableCell>
            </TableRow>   
            
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> Does it use SSIS:  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>
              <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
        /> 
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> Does it use SSAS:  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>
              <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
        /> 
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> Does it use EBI:  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>
              <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
        /> 
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> Does it use Geolocalization DataType:  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>
              <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
        /> 
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> SCT, DMA &gt; Object Conversion Compatibility  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>             
              </TableCell>
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
              <Typography variant = "p"> <a style={{color:'blue'}}><PublishIcon color="blue"/>  Upload Report (DMA/SCT/DB Agent) </a>  </Typography>
              </TableCell>
              <TableCell align="left" style={{border:0}}>
              </TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
<br></br>        
        <Button variant="contained" style={{ backgroundColor: 'grey', color:'white' }}>
          CALCULATE COMPLEXITY
        </Button>

    </div>
        </Grid>
        <Grid item xs={12} sm={5}>
        <Container style={{backgroundColor: "white", padding:'2em',}}>
        <CssBaseline/>
    <Typography variant = "p"> <strong> EFFORT ESTIMATION for DB, Relational </strong>  </Typography> <br></br>
    <br></br>
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.A}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
                {row.A}
              </TableCell>
              <TableCell align="right" style={{border:0}}>{row.B}</TableCell>

            </TableRow>
          ))}
        </TableBody>
        <hr  style={{
    color: 'grey',
    backgroundColor: 'lightgrey',
    height: .75,
    width : '185%',
    borderColor : 'lightgrey'
}}/>
<TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.A}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{border:0}}>
                {row.A}
              </TableCell>
              <TableCell align="right" style={{border:0}}>{row.B}</TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
    </Container>
        </Grid>
    </Grid>
    </Container>
    <Container maxWidth="lg" style={{padding:'0.5em',}}>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={9}>
    <Button variant="contained" style={{ backgroundColor: 'grey', color:'white', align:'left', margin:'1em' }}>
    &lt; BACK: RESOURCE ALLOCATION 
        </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Button variant="contained" style={{ backgroundColor: 'blue', color:'white', align:'right', margin:'1em' }}>
          NEXT: COMPONENTS &gt;
        </Button>
        </Grid>
    </Grid>
    </Container>
    </>
  );
}

export default App
