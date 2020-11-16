import React from "react";
import "./Fact.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AccessibleIcon from "@material-ui/icons/Accessible";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1100,
    borderRadius: 15,
  },
}));

function Fact() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="pokam">
      <div className="neu pp container">
        <div className="tab-rad">
          <div className={classes.root}>
            <div className="colors">
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab
                    style={{ color: "#8E44AD", fontWeight: 600 }}
                    label="Kids Corner"
                    icon={<AirlineSeatFlatIcon />}
                    {...a11yProps(0)}
                  />
                  <Tab
                    style={{ color: "#8E44AD", fontWeight: 600 }}
                    label="Youth Power"
                    icon={<DirectionsRunIcon />}
                    {...a11yProps(1)}
                  />
                  <Tab
                    style={{ color: "#8E44AD", fontWeight: 600 }}
                    icon={<AccessibleIcon />}
                    label="Aged Person"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className="health-sec">
                    <div
                      className="taxting"
                      style={{ fontSize: 20, textAlign: "left" }}
                    >
                      <ol>
                        <li>
                          Talk with children about COVID-19 as we should spread
                          awarness.{" "}
                        </li>
                        <li>
                          It is important to make time to talk with children
                          when they are worried. They need to know they can
                          express their feelings and ask questions.
                        </li>

                        <li>
                          Be aware of what your children see and hear on
                          television, the radio and online.
                        </li>

                        <li>
                          Tell your children that most kids with COVID-19 do not
                          get very sick, but we can help those who could get
                          very sick.
                        </li>

                        <li>
                          Keep Children Busy with so many interesting things
                          that they don't stop learning.
                        </li>
                      </ol>
                    </div>
                    <div className="image-sec">
                      <img
                        src="https://www.netclipart.com/pp/m/1-13986_boss-baby-big-baby-boss.png"
                        alt=""
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <div className="health-sec">
                    <div
                      className="taxting"
                      style={{ fontSize: 20, textAlign: "left" }}
                    >
                      <ol>
                        <li>
                          Talk with children about COVID-19 as we should spread
                          awarness.{" "}
                        </li>
                        <li>
                          It is important to make time to talk with children
                          when they are worried. They need to know they can
                          express their feelings and ask questions.
                        </li>

                        <li>
                          Be aware of what your children see and hear on
                          television, the radio and online.
                        </li>

                        <li>
                          Tell your children that most kids with COVID-19 do not
                          get very sick, but we can help those who could get
                          very sick.
                        </li>

                        <li>
                          Keep Children Busy with so many interesting things
                          that they don't stop learning.
                        </li>
                      </ol>
                    </div>
                    <div className="image-sec">
                      <img
                        src="https://images4.fanpop.com/image/photos/16200000/Joey-Tribbiani-Chandler-Bing-and-Ross-Geller-joey-chandler-and-ross-16243636-598-476.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <div className="health-sec">
                    <div
                      className="taxting"
                      style={{ fontSize: 20, textAlign: "left" }}
                    >
                      <ol>
                        <li>
                          Talk with children about COVID-19 as we should spread
                          awarness.{" "}
                        </li>
                        <li>
                          It is important to make time to talk with children
                          when they are worried. They need to know they can
                          express their feelings and ask questions.
                        </li>

                        <li>
                          Be aware of what your children see and hear on
                          television, the radio and online.
                        </li>

                        <li>
                          Tell your children that most kids with COVID-19 do not
                          get very sick, but we can help those who could get
                          very sick.
                        </li>

                        <li>
                          Keep Children Busy with so many interesting things
                          that they don't stop learning.
                        </li>
                      </ol>
                    </div>
                    <div className="image-sec">
                      <img
                        src="https://www.shecos.com/blog/wp-content/uploads/2019/09/walter-white-cosplay.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </TabPanel>
              </SwipeableViews>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
