import * as React from 'react';

import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { v4 as uuidv4 } from 'uuid';


export const TableComponent = ({props})  =>{
  let flights = props['flights']
  const handleModal = props['handleModal'];

  const attributes = Object.keys(flights[0]);
  
  // flights.map((elem,i)=>{
  //   attributes.map((elem1,i1)=>{
  //     console.log("sa",flights[i][elem1])
  //   })
  // })
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ maxWidth: 800,margin:"auto" }}>
        <TableHead>
          <TableRow>
            {attributes.map((elem)=>(
              <TableCell 
              key={uuidv4()}
              align='right'>{elem}</TableCell>
            ))}
          </TableRow>
        </TableHead>


        <TableBody>
            {flights.map((elem,i)=>(
              <TableRow key={uuidv4()}>
                  {attributes.map((elem1,i1)=>(
                      (elem1!=="segment")?
                      <TableCell
                          key={uuidv4()}
                          align="right">{flights[i][elem1]}
                      </TableCell>:
                      <TableCell
                      key={uuidv4()}
                      align="right">
                          <Button
                              type="submit"
                              variant="contained"
                              onClick={()=>{
                                  handleModal(flights[i][elem1])
                              }}
                          >
                                Flight Route
                            </Button>
                      </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

{/* <TableRow
              key={uuidv4()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > 
              <TableCell align="right">{i+1}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              {(row.segment)?
              <TableCell align="right">
                  <Button
                      type="submit"
                      variant="contained"
                      onClick={()=>{
                          handleModal(row['segment'])
                      }}
                  >
                        Flight Route
                    </Button>
              </TableCell>:""}
            </TableRow> */}


                            {/* {(row.segment)?
                <TableCell align="right">
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={()=>{
                            handleModal(row['segment'])
                        }}
                    >
                          Flight Route
                      </Button>
                </TableCell>:""} */}




                



                //  {flights.map((row,i) => (
                //   attributes.map((row1,i1)=>(
                //       <TableRow
                //       key={uuidv4()}
                //       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                //       > 
                        
        
                //     </TableRow>
                //   ))
                // ))}