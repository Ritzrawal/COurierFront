import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import PropTypes from 'prop-types'; 


// components
// import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";


const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title={props.tableTitle}
            data={props.data}
            columns={props.columnTitles}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title={props.tableTitle} upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
// validating prop types 
Tables.propTypes = { 
  data: PropTypes.array, 
  tableTitle: PropTypes.string, 
  numberProp: PropTypes.number, 
  columnTitles:PropTypes.array,
  boolProp: PropTypes.bool, 
} 

// creating default props 
Tables.defaultProps = { 
  data: [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
    ["James Houston", "Example Inc.", "Dallas", "TX"],
    ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
    ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
    ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
    ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
    ["Meral Elias", "Example Inc.", "Hartford", "CT"],
    ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
    ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
    ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
    ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
    ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
    ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
    ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
    ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
  ], 
  tableTitle: "Courier Services", 
  numberProp: "10", 
  columnTitles:["Name", "Company", "City", "State"],
  boolProp: true, 
}
