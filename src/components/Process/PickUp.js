import React,{Component} from 'react';
import { Grid,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Widget from "../../components/Widget";
import Table from '../../pages/dashboard/components/Table/Table';
import mock from "../../pages/dashboard/mock";
// import TableComponent from '../../pages/dashboard/components/Table/Table';
const useStyles = makeStyles(theme => ({
    tableOverflow: {
      overflow: 'auto'
    }
  }))
  const Pickup=()=>{
    const classes = useStyles();
    return(
        <div>
        <Button color="primary"></Button>
        <Grid item xs={12}>
        <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
          <Table data={mock.table} />
        </Widget>
      </Grid>
      </div>
    )
}
export default Pickup;